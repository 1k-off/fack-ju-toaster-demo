output "resource_group_name" {
  value = azurerm_resource_group.k6.name
}

output "kubernetes_cluster_name" {
  value = azurerm_kubernetes_cluster.k6.name
}
