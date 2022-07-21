build-dev:
	@ docker build -f devops/Dockerfile -t yavishop:latest .
deploy:
	@ docker stack deploy -c devops/stack.yml yavishop-na
rm:
	@ docker stack rm yavishop-na
network:
	@ docker network create --driver overlay  --attachable --scope swarm  yavishop-networks
