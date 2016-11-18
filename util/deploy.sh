# Push docker server release images
docker tag entake/acuity-server:0.3.0-debug entake/acuity-server:0.3.0
docker tag entake/acuity-server:0.3.0 entake/acuity-server:latest
docker push entake/acuity-server:0.3.0
docker push entake/acuity-server:latest

# Push docker client release images
docker tag entake/acuity-client:0.3.0-debug entake/acuity-client:0.3.0
docker tag entake/acuity-client:0.3.0 entake/acuity-client:latest
docker push entake/acuiy-client:0.3.0
docker push entake/acuiy-client:latest

# Deploy latest version to server
## TODO
