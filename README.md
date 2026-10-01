# Node.js CI/CD Pipeline using GitHub Actions

## Project Overview

This project demonstrates a basic CI/CD pipeline for a Node.js application using GitHub Actions and Docker.

The pipeline automatically runs when code is pushed to the `main` branch.

## Technologies Used

- Node.js
- npm
- Jest
- Docker
- Docker Hub
- GitHub
- GitHub Actions

## Application

The Node.js application runs a simple HTTP server and displays:

"Hello! My First DevOps Internship Task — Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)"

## CI/CD Workflow

The GitHub Actions pipeline performs these steps:

1. Checkout the source code
2. Set up Node.js
3. Install dependencies
4. Run automated tests
5. Log in to Docker Hub
6. Build the Docker image
7. Push the Docker image to Docker Hub

## Docker

The application is containerized using a Dockerfile.

Build the image:

```bash
docker build -t nodejs-demo-app .