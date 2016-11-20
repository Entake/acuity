#!/bin/bash

# eval $(ssh-agent -s)
# ssh-add <(echo "$SSH_PRIVATE_KEY")

ssh deploy@$DEPLOY_SERVER_IP '
cd acuity/ ;
docker-compose down ;
docker-compose pull ;
docker rmi $(docker images -q -f dangling=true) ;
docker-compose up -d ;
'
