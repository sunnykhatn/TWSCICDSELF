pipeline {
  agent any

  environment {
    SONARQUBE_SERVER = 'YourSonarQubeServerName' // Replace with your actual SonarQube server name in Jenkins configuration
  }

  stages {
    stage('Checkout') {
      steps {
        // Checkout code from the repository
        git 'https://github.com/your-username/your-repo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        // Install dependencies
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        // Build the Docker image
        sh 'docker-compose build'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        // Run SonarQube analysis
        withSonarQubeEnv('YourSonarQubeServerName') {
          sh 'mvn clean verify sonar:sonar'
        }
      }
    }

    stage('Security Check') {
      steps {
        // Run OWASP Dependency-Check
        sh 'dependency-check.sh --scan ./'
      }
    }

    stage('Docker Image Scan') {
      steps {
        // Scan Docker image with Trivy
        sh 'trivy image your-image:latest'
      }
    }

    stage('Test') {
      steps {
        // Run tests
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        // Deploy the application
        sh 'docker-compose up -d'
      }
    }
  }

  post {
    always {
      // Cleanup
      sh 'docker-compose down'
    }
  }
}
