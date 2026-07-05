terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.6.2"
    }
  }
}

provider "docker" {
  host = "unix:///home/dimitar/.docker/desktop/docker.sock"
}

resource "docker_image" "nginxdemo" {
  name = "nginxdemos/hello"
}

# Start a container
resource "docker_container" "nginxdemo" {
  name  = "foo"
  image = docker_image.nginxdemo.name

  ports {
    internal = 80
    external = 5000
  }
}

resource "docker_volume" "shared_volume" {
  name = "shared_volume"
}
