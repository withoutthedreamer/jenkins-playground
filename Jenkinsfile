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
                        junit 'playground/reports/angular.tests.xml'
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
