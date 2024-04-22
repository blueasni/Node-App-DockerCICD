pipeline {
    agent any
    
    stages{
        stage('Checkout'){
            steps{
                git url: 'git@github.com:blueasni/Node-App-DockerCICD.git', branch: 'master'
            }
        }
        stage('Build'){
            steps{
                sh 'sudo docker build . -t blueasni/nodo-todo:latest'
            }
        }
        stage('Test image') {
            steps {
                echo 'testing...'
                sh 'sudo docker inspect --type=image blueasni/nodo-todo:latest '
            }
        }
        
        stage('Push'){
            steps{
        	     sh "sudo docker login -u blueasni -p $#ABCDabcd0911$#"
                 sh 'sudo docker push blueasni/nodo-todo:latest'
            }
        }  
        stage('Deploy'){
            steps{
                echo 'deploying on another server'
                sh 'sudo docker stop nodo-todo || true'
                sh 'sudo docker rm nodo-todo || true'
                sh 'sudo docker run -d --name nodo-todo blueasni/nodo-todo:latest'
                sh '''
                ssh -i Ubuntudemo.pem -o StrictHostKeyChecking=no ubuntu@44.211.144.201 <<EOF
                sudo docker login -u basanagoudapatil -p dckr_pat_OvN0lH_USJztUCkm0opyjz-yXNc
                sudo docker pull basanagoudapatil/nodo-todo:latest
                sudo docker stop nodo-todo || true
                sudo docker rm nodo-todo || true 
                sudo docker run -d --name nodo-todo blueasni/nodo-todo:latest
                '''
            }
        }
    }
}
