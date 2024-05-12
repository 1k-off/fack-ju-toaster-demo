variable "awsAccessKey" {
    description = "AWS Access Key"
}

variable "awsSecretKey" {
    description = "AWS Secret Key"
}

variable "region" {
  description = "The region in which the resources will be created"
  default = "eu-north-1"
}

variable "azs" {
  description = "The availability zones in which the resources will be created"
  default = ["eu-north-1a", "eu-north-1b", "eu-north-1c"]
}

variable "k6VPCCIDR" {
  description = "The CIDR block for the VPC"
  default = "10.10.0.0/16"
}

variable "k6PublicSubnets" {
  description = "The CIDR blocks for the public subnets"
  default = ["10.10.0.0/19", "10.10.32.0/19", "10.10.64.0/19"]
}

variable "k6PrivateSubnets" {
  description = "The CIDR blocks for the private subnets"
  default = ["10.10.96.0/19", "10.10.128.0/19", "10.10.160.0/19"]
}
# free
# 10.10.192.0/19
# 10.10.224.0/19

variable "k6NodeInstanceType" {
  description = "The instance type for the k6 instances"
  default = ""
}

variable "k6AMIType" {
  description = "The AMI type for the k6 instances"
  default = ""
}

variable "k6NodeMinSize" {
  description = "The minimum number of k6 instances"
  default = 1
}

variable "k6NodeMaxSize" {
  description = "The maximum number of k6 instances"
  default = 6
}

variable "k6NodeDesiredSize" {
  description = "The desired number of k6 instances"
  default = 3
}

variable "observabilityNodeInstanceType" {
  description = "The instance type for the observer instance"
  default = "t3.medium"
}

variable "observabilityNodeMinSize" {
  description = "The minimum number of observer instances"
  default = 1
}

variable "observabilityNodeMaxSize" {
  description = "The maximum number of observer instances"
  default = 2
}

variable "observationNodeDesiredSize" {
  description = "The desired number of observer instances"
  default = 1
}

variable "k6ChartVersion" {
  description = "k6 chart version"
  default = "3.6.0"
}

variable "prometheusChartVersion" {
  description = "Prometheus chart version"
  default = "58.5.0"
}