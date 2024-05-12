resource "azurerm_resource_group" "k6" {
  name     = "k6-rg"
  location = var.location

  tags = {
    environment = var.environmentName
  }
}

resource "azurerm_kubernetes_cluster" "k6" {
  name                = "k6-aks"
  location            = azurerm_resource_group.k6.location
  resource_group_name = azurerm_resource_group.k6.name
  dns_prefix          = "k6-k8s"
  kubernetes_version  = "1.29.2"

  default_node_pool {
    name            = "system"
    node_count      = var.systemPoolNodeCount
    vm_size         = var.systemPoolNodeType
    os_disk_size_gb = 30
  }

  service_principal {
    client_id     = var.appId
    client_secret = var.password
  }

  role_based_access_control_enabled = true

  tags = {
    environment = var.environmentName
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "k6" {
  name                  = "k6"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.k6.id
  vm_size               = var.k6NodeType
  node_count            = var.k6NodeCount

  tags = {
    environment = var.environmentName
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "observability" {
  name                  = "o11y"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.k6.id
  vm_size               = var.observabilityNodeType
  node_count            = var.observabilityNodeCount

  tags = {
    environment = var.environmentName
  }
}