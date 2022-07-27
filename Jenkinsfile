pipeline {
    agent any
    stages{
       stage ('Deploy'){
           agent {
            label: 'integracion'
           }
           steps {
               sh 'docker build -f devops/Dockerfile -t yavishop-front:latest .'
               sh 'docker stack deploy -c devops/stack.yml yavishop-na'
           }
       } 
    }
}