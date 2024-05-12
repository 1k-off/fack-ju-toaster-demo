# NOT TESTED!!!
Login to your Azure account using the Azure CLI.
```
az login
```

You need to create an Active Directory service principal account using the Azure CLI. You should see something like the following.
```
az ad sp create-for-rbac --skip-assignment
```
```
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "displayName": "azure-cli-2019-04-11-00-46-05",
  "name": "http://azure-cli-2019-04-11-00-46-05",
  "password": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "tenant": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
}
```

Replace the values in your `terraform.tfvars` file with your `appId` and `password`. Terraform will use these values to authenticate to Azure before provisioning your resources.

After you have saved your customized variables file, initialize your Terraform workspace, which will download the provider and initialize it with the values provided in your `terraform.tfvars` file.
```
terraform init
```

In your initialized directory, run terraform apply and review the planned actions. Your terminal output should indicate the plan is running and what resources will be created.

```
terraform apply
```

Now that you've provisioned your AKS cluster, you need to configure `kubectl`.

Run the following command to retrieve the access credentials for your cluster and automatically configure `kubectl`.
```
az aks get-credentials --resource-group $(terraform output -raw resource_group_name) --name $(terraform output -raw kubernetes_cluster_name)
```

Now you can use `kubectl` or Lens to interact with your Kubernetes cluster.

Remember to destroy any resources you create once you are done with your work. Run the `destroy` command and confirm with `yes` in your terminal.

```
terraform destroy
```