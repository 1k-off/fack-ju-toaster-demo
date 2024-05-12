module "helm_charts" {
  source = "../helm"

  k6AgentPoolName            = "k6"
  observabilityAgentPoolName = "observability"

  k6ChartVersion             = var.k6ChartVersion
  prometheusChartVersion     = var.prometheusChartVersion

  nodeGroupSelector = "eks\\.amazonaws\\.com/nodegroup"

  depends_on = [
    module.eks
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
    module.eks,
    module.helm_charts
  ]
}