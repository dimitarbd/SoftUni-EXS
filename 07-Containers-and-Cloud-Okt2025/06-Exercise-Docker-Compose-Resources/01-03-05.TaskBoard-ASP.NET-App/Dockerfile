# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and projects
COPY TaskBoard.sln ./
COPY TaskBoard.WebApp/ ./TaskBoard.WebApp/
# Add all sibling/data projects here if needed
COPY TaskBoard.Data/ ./TaskBoard.Data/

# Restore solution (restores all projects)
RUN dotnet restore "TaskBoard.sln"

# Copy rest of the code
COPY . .

# Publish the web app
RUN dotnet publish "TaskBoard.WebApp/TaskBoard.WebApp.csproj" -c Debug -o /app/publish --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "TaskBoard.WebApp.dll"]
