pipeline {
	agent any

    stages {
        stage ('Build') {
		steps{
			sh "$aws ecr get-login --no-include-email --region us-east-1"
			sh "docker build -t rede-webserv ./Serv/Web/"
			sh "docker tag rede-webserv:latest 797409686075.dkr.ecr.us-east-1.amazonaws.com/rede-webserv:latest"
		}
        }
        stage ('Push') {
		steps{
            		sh "docker push 797409686075.dkr.ecr.us-east-1.amazonaws.com/rede-webserv:latest"
		}
      	}
      	stage ('Deploy') {
		steps{
           		sh "echo 'update ECS intances'"
		}
      	}
    } 
}



