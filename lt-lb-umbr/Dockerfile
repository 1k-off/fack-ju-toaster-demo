FROM mcr.microsoft.com/dotnet/aspnet:8.0-jammy AS base
LABEL maintainer="Bogdan Kosarevskyi <bogdan.kosarevskyi@gmail.com>"
ENV HTTP_PORTS=8080
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0-jammy AS build
WORKDIR /src
COPY ["lt-lb-umbr.csproj", "."]
RUN dotnet restore "lt-lb-umbr.csproj"
COPY . .
RUN dotnet build "lt-lb-umbr.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish lt-lb-umbr.csproj -c Release -o /app/publish

FROM base AS final
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "lt-lb-umbr.dll"]