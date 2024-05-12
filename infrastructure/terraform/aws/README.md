Login to your AWS account and create access keys.

Replace the values in your `terraform.tfvars` file with your `awsAccessKey` and `awsSecretKey`. Terraform will use these values to authenticate to AWS before provisioning your resources.

After you have saved your customized variables file, initialize your Terraform workspace, which will download the provider and initialize it with the values provided in your `terraform.tfvars` file.
```
terraform init
```

In your initialized directory, run terraform apply and review the planned actions. Your terminal output should indicate the plan is running and what resources will be created.

```
terraform apply
```

Now that you've provisioned your EKS cluster, you need to configure `kubectl`.

Run the following command to retrieve the access credentials for your cluster and automatically configure `kubectl`.
```
aws eks --region $(terraform output -raw region) update-kubeconfig --name $(terraform output -raw cluster_name)
```
or
```
aws eks --region {{your_region}} update-kubeconfig --name k6 --profile {{your_profile}}
```

Now you can use `kubectl` or Lens to interact with your Kubernetes cluster.

Remember to destroy any resources you create once you are done with your work. Run the `destroy` command and confirm with `yes` in your terminal.

```
terraform destroy
```