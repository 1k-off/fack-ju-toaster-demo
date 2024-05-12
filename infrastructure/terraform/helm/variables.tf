variable "k6ChartVersion" {
  description = "k6 chart version"
}

variable "prometheusChartVersion" {
    description = "Prometheus chart version"
}

variable "k6AgentPoolName" {
  description = "k6 agent pool name"
}

variable "observabilityAgentPoolName" {
  description = "observability agent pool name"
}

variable "nodeGroupSelector" {
  description = "node group selector name"
}
