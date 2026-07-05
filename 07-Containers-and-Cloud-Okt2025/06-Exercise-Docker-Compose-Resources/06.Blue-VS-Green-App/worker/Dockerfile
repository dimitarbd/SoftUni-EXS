FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS builder

# Create a working directory
WORKDIR /Worker

# Copy the .csproj file and restore
COPY src/Worker/Worker.csproj .
RUN dotnet restore
# Copy source files to the image
COPY src/Worker/ .
# Build the project
RUN dotnet publish -c Release -o /out 

FROM mcr.microsoft.com/dotnet/core/runtime:3.1

WORKDIR /app

COPY --from=builder /out .

ENTRYPOINT ["dotnet", "Worker.dll"]