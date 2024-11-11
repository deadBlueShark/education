resource "local_file" "hello_local_file" {
  content = "Hello Terraform local!"
  filename = "${path.module}/hello_local_file.txt"
}
