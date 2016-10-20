# Push docker server release images
docker tag "$SERVER_DEBUG_IMG" "$SERVER_RELEASE_IMG"
docker tag "$SERVER_DEBUG_IMG" "$SERVER_IMG:latest"
docker push "entake/acuity-server:latest"
docker push "$SERVER_RELEASE_IMG"

# Push docker client release images
docker tag "$CLIENT_DEBUG_IMG" "$CLIENT_RELEASE_IMG"
docker tag "$CLIENT_DEBUG_IMG" "entake/acuity-client:latest"
docker push "$SERVER_IMG:latest"
docker push "$CLIENT_RELEASE_IMG"

# Deploy latest version to server
## TODO
