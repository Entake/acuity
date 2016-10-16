# Push docker release images
docker tag "$SERVER_DEBUG_IMG" "$SERVER_RELEASE_IMG"
docker tag "$SERVER_DEBUG_IMG" "$SERVER_IMG:latest"
docker push "$SERVER_IMG:latest"
docker push "$SERVER_RELEASE_IMG"

# Deploy latest version to server
## TODO
