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
                        sh 'npx jest --coverage'
                        junit 'reports/angular.tests.xml'
                        publishCoverage adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')]
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
