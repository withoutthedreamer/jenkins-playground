pipeline {
    agent any

    stages {
        stage('Install modules') {
            steps {
                dir ('playground') {
                    nodejs('Node') {
                        sh 'npm ci'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                dir('playground') {
                    nodejs('Node') {
                        sh 'nx test'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                dir('playground') {
                    nodejs('Node') {
                        sh 'nx build'
                    }
                }
            }
        }
    }
}
