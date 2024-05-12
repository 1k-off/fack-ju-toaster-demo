module "helm_charts" {
  source = "../helm"

  k6AgentPoolName            = "k6"
  k6ChartVersion             = var.k6ChartVersion
  prometheusChartVersion     = var.prometheusChartVersion
  observabilityAgentPoolName = "observability"

  nodeGroupSelector = "nodeSelector.kubernetes\\.azure\\.com/agentpool"

  depends_on = [
    azurerm_kubernetes_cluster.k6,
    azurerm_kubernetes_cluster_node_pool.k6,
    azurerm_kubernetes_cluster_node_pool.observability
  ]
}

resource "kubernetes_config_map" "grafana-k6-dashboard" {
  metadata {
    name = "grafana-k6-dashboard"
    namespace = "observability"
    labels = {
      grafana_dashboard = "1"
    }
  }

  data = {
    "k6.json" = file("../../k8s/observability/grafana/dashboards/k6.json")
  }

  depends_on = [
    module.helm_charts
  ]
}