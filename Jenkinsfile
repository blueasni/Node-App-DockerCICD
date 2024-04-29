#!/usr/bin/env groovy
pipeline {
  agent any
  stages {
        stage('Checkout'){
            steps{
                git url: 'git@github.com:blueasni/Node-App-DockerCICD.git', branch: 'master'
            }
        }
    stage('Pre-cleanup') {
      steps {
        /*sh 'rm -rf ./venv'*/
      }
    }
        }
    stage('Install dependencies') {
		  steps 
		  {
			dir('Backend') {
                    		sh 'npm install'
				sh 'npm build'
               		}
                        dir('bookmaker') {
                                sh 'npm install'
                                sh 'npm build'
                        }
                        dir('officer') {
                                sh 'npm install'
                                sh 'npm build'
                        }
		  }
    }
    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }
        stage('Deploy) {
      steps {
        sh 'npm run test'
      }
    }
  }
 /* post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }*/
}
