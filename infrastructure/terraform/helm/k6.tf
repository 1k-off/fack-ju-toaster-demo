resource "helm_release" "k6" {
  name              = "k6-operator"
  repository        = "https://grafana.github.io/helm-charts"
  chart             = "k6-operator"
  dependency_update = true
  force_update      = true
  wait_for_jobs     = true
  set {
    name  = var.nodeGroupSelector
    value = var.k6AgentPoolName
  }
}
