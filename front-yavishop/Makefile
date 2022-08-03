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
volume:
	@ docker volume create yavishop_data
#rm build-dev deploy
stats:
	@ docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" | grep yavishop