provider "aws" {
  region = "ap-southeast-1"
  # Config an AWS account profile name "personal-admin-account" on your machine
  profile = "personal-admin-account"
}

resource "aws_instance" "hello_terraform" {
  ami = "ami-08f49baa317796afd"
  instance_type = "t2.micro"
}
