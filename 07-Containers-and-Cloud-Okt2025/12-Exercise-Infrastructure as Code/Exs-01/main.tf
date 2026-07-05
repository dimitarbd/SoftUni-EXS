terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.54.0"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = "9e473b82-c9db-48c0-a130-de7d047d396f"
}

resource "azurerm_resource_group" "arg" {
  name     = "TerraformExampleRG"
  location = "Poland Central"
}

