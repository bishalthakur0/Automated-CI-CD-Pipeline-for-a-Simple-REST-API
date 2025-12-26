# 🚀 Automated CI/CD Pipeline for a Simple REST API

This project demonstrates a real-world CI/CD workflow where a simple REST API is automatically built, tested, containerized, and deployed to a cloud server whenever code is pushed.

## 📌 Product Overview
The goal is to eliminate manual deployments and ensure consistent, reliable application delivery using modern DevOps practices.

## 🎯 Objectives
- **Automate** build, test, and deployment steps.
- **Deploy** a backend service without manual intervention.
- **Demonstrate** CI/CD and cloud fundamentals.
- **Ensure** basic reliability and service health.

## 🛠️ Tech Stack
- **Backend**: Node.js / Express
- **CI/CD**: Jenkins
- **Containerization**: Docker
- **Cloud**: AWS EC2
- **Monitoring**: Logs / CloudWatch
- **OS**: Linux

## 🧩 Functional Requirements
- **REST API**:
    - `/health`: Returns service status.
    - `/hello`: Returns static response.
- **Dockerized**: Runs inside a Docker container for consistent runtime.
- **Pipeline Stages**:
    1. Code checkout
    2. Application build
    3. Basic unit tests
    4. Docker image build
    5. Automated deployment to AWS EC2

## 🚀 Getting Started

### Prerequisites
- Node.js installed locally.
- Docker installed locally.
- A Jenkins server installed and configured.
- AWS EC2 instance with Docker installed.

### Local Development
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Run tests: `npm test`

### Docker Support
Build the image locally:
```bash
docker build -t simple-rest-api .
```
Run the container:
```bash
docker run -p 3000:3000 simple-rest-api
```

## 🔐 Security & Reliability
- **No hardcoded secrets**: Use GitLab CI variables for sensitive information.
- **Auto-restart**: Docker containers are configured with `--restart always`.
- **Pipeline Gates**: Deployment only happens if all previous stages (build/test) pass.

## 📊 Success Criteria
- Code push triggers automated deployment.
- API is available at the public endpoint after a successful run.
- Zero manual deployment steps required.
