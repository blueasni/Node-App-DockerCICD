#!/usr/bin/env groovy
pipeline {
  agent any
  /*environment {
    NODE_ENV_PATH = './venv'
    NODE_VERSION = '6.11.1'
  }*/
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
        
      }
    }
  }
  post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }
}
