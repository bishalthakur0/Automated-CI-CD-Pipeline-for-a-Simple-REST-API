pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "bishalthakur0/simple-rest-api"
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials' // Jenkins Credential ID for Docker Hub
        EC2_CREDENTIALS_ID = 'ec2-ssh-key' // Jenkins Credential ID for AWS EC2 SSH Private Key
        SERVER_IP = "YOUR_EC2_PUBLIC_IP"
        SERVER_USER = "ubuntu"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent([EC2_CREDENTIALS_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "
                            docker pull ${DOCKER_IMAGE}:latest &&
                            docker stop simple-rest-api || true &&
                            docker rm simple-rest-api || true &&
                            docker run -d --name simple-rest-api -p 80:3000 --restart always ${DOCKER_IMAGE}:latest
                        "
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
