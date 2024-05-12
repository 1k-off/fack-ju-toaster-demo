variable "appId" {
  description = "Azure Kubernetes Service Cluster service principal"
}

variable "password" {
  description = "Azure Kubernetes Service Cluster password"
}

variable "location" {
  description = "Azure region"
  default = "West Europe"
}

variable "environmentName" {
  description = "Environment name"
  default = "k6"
}

variable systemPoolNodeCount {
  description = "Number of system nodes in the k6 cluster"
  default = 1
}

variable "systemPoolNodeType" {
  description = "Type of system pool nodes in the k6 cluster"
  default = "standard_d2as_v4" # "standard_d2as_v4" # standard_dc1s_v2
}

variable k6NodeCount {
  description = "Number of k6 nodes in the k6 cluster"
  default = 1
}

variable "k6NodeType" {
  description = "Type of k6 nodes in the k6 cluster"
  default = "standard_d2ps_v5" # "standard_d4ps_v5"
}

variable "k6ChartVersion" {
  description = "k6 chart version"
  default = "3.6.0"
}

variable observabilityNodeCount {
  description = "Number of observability nodes in the k6 cluster"
  default = 1
}

variable "observabilityNodeType" {
  description = "Type of observability nodes in the k6 cluster"
  default = "standard_d2ps_v5" # "standard_d4ps_v5"
}

variable "prometheusChartVersion" {
  description = "Prometheus chart version"
  default = "58.5.0"
}