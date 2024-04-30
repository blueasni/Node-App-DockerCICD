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
            	        /*dir('Backend') {
                    		sh 'npm install'
				sh 'npm run build'
               		}
                        dir('bookmaker') {
                                sh 'npm install'
                                sh 'npm run build'
                        }
                        dir('officer') {
                                sh 'npm install'
                                sh 'npm run build'
                        }
                        dir('LandingPage') {
                                sh 'npm install'
                                sh 'npm run build'
                        }*/
                sh 'cd home && npm install --force && npm run build'
                sh 'rm -rf *.tar.gz'
                sh 'tar czf build-$BUILD_NUMBER.tar.gz build'
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

                 /*sh 'sudo docker push blueasni/nodo-todo:latest'*/
                 sshPublisher(publishers: [sshPublisherDesc(configName: 'telecloud', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/var/www/html/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'build/')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
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
