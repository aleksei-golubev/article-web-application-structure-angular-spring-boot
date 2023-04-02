# Web application structure: Angular + Spring Boot

Here you can find three variations of combinations of frontend and backend modules on example of simple web application.

Environment:
- Java 17.0.6
- Maven 3.8.7
- Node.js 18.13.0
- Docker 20.10.23

## Development mode

Simply two independent applications with example of proxy settings usage.

## Single instance

Building the whole application as single JAR file: backend module depends on frontend one.

## Separate instanges

The same application but without frontend dependecy in backend module. Application is wraped with Docker containers. 