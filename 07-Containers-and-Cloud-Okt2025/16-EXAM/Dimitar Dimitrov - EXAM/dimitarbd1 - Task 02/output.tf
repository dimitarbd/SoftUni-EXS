output "web_app_fqdn" {
  description = "The fully qualified domain name of the Linux Web App"
  value       = azurerm_linux_web_app.alwa.default_hostname
}

output "ip_address" {
  description = "The IP address of the WebApp"
  value       = azurerm_linux_web_app.alwa.outbound_ip_addresses

}
