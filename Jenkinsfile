pipeline {
    agent any
    environment {
        PROJEC_NAME = "front-yavishop"
        TAGS = 'sistemaagil'
        HOME = '.'
    }    
    stages {
        stage("Despliegue"){
            agent {
                label 'integracion'
            }
            steps{
                sh 'docker build -f devops/Dockerfile -t yavishop-front:latest .'
                sh 'docker stack rm yavishop-na'
                sh 'docker stack deploy -c devops/stack.yml yavishop-na'
            }
        }
    }
}