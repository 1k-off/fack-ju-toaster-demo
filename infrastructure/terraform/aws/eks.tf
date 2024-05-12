module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "20.10.0"

  cluster_name    = "k6"
  cluster_version = "1.29"

  cluster_endpoint_public_access           = true
  enable_cluster_creator_admin_permissions = true

  cluster_addons = {
    aws-ebs-csi-driver = {
      service_account_role_arn = module.irsa-ebs-csi.iam_role_arn
    }
#    aws-efs-csi-driver = {
#      service_account_role_arn = module.irsa-efs-csi.iam_role_arn
#    }
  }

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    k6 = {
      name = "k6"
      instance_types = length(var.k6NodeInstanceType) == 0 ? ["c7a.xlarge"] : [var.k6NodeInstanceType]
      min_size     = var.k6NodeMinSize
      max_size     = var.k6NodeMaxSize
      desired_size = var.k6NodeDesiredSize
      ami_type     = var.k6AMIType == "" ? "AL2_x86_64" : var.k6AMIType
      use_name_prefix = false
    }

    observability = {
      name = "o11y"
      instance_types = [var.observabilityNodeInstanceType]
      min_size     = var.observabilityNodeMinSize
      max_size     = var.observabilityNodeMaxSize
      desired_size = var.observationNodeDesiredSize
      ami_type = "AL2_x86_64"
      use_name_prefix = false
    }
  }
}

module "irsa-ebs-csi" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role-with-oidc"
  version = "5.39.0"

  create_role                   = true
  role_name                     = "AmazonEKSTFEBSCSIRole-${module.eks.cluster_name}"
  provider_url                  = module.eks.oidc_provider
  role_policy_arns              = [data.aws_iam_policy.ebs_csi_policy.arn]
  oidc_fully_qualified_subjects = ["system:serviceaccount:kube-system:ebs-csi-controller-sa"]
}

#module "irsa-efs-csi" {
#  source = "terraform-aws-modules/iam/aws//modules/iam-role-for-service-accounts-eks"
#  role_name             = "AmazonEKSTFEFSCSIRole-${module.eks.cluster_name}"
#  attach_efs_csi_policy = true
#  oidc_providers = {
#    ex = {
#      provider_arn               = module.eks.oidc_provider_arn
#      namespace_service_accounts = ["kube-system:efs-csi-controller-sa"]
#    }
#  }
#}
#
#resource "kubernetes_storage_class" "efs-sc" {
#  metadata {
#    name = "efs-sc"
#  }
#  storage_provisioner = "efs.csi.aws.com"
#  parameters = {
#    provisioningMode = "efs-ap"
#    fileSystemId = aws_efs_file_system.k6.id
#  }
#}
#
#resource "aws_efs_file_system" "k6" {
#  creation_token = "k6"
#
#  tags = {
#    Name = "k6"
#  }
#}