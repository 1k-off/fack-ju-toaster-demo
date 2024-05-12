resource "helm_release" "prometheus-stack" {
  name              = "prometheus-stack"
  repository        = "https://prometheus-community.github.io/helm-charts"
  chart             = "kube-prometheus-stack"
  namespace         = "observability"
  create_namespace  = true
  dependency_update = true

  set {
    name  = var.nodeGroupSelector
    value = var.observabilityAgentPoolName
  }
  set {
    name  = "prometheus.prometheusSpec.enableRemoteWriteReceiver"
    value = "true"
  }
}
