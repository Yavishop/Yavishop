build-dev:
	@ docker build -f devops/Dockerfile -t yavishop-front:latest .
deploy:
	@ docker stack deploy -c devops/stack.yml yavishop-na
rm:
	@ docker stack rm yavishop-na
network:
	@ docker network create --driver overlay  --attachable --scope swarm  yavishop-networks
front-logs:
	@ docker logs $$(docker ps -q -f name=yavishop-na_yavishop-front)
back-logs:
	@ docker logs $$(docker ps -q -f name=yavishop-na_yavishop-backend)

#rm build-dev deploy
