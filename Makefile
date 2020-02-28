npm_install:
	docker-compose run --rm node_1 			npm install
	docker-compose run --rm node_2 			npm install
	docker-compose run --rm node_prisma	 	npm install
	docker-compose run --rm node_client 	npm install

format:
	docker-compose run --rm node_1 			npm run format
	docker-compose run --rm node_2 			npm run format
	docker-compose run --rm node_prisma		npm run format
	docker-compose run --rm node_client 	npm run format

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

npm_update:
	docker-compose run --rm node_1 			npm update
	docker-compose run --rm node_2 			npm update
	docker-compose run --rm node_prisma 	npm update
	docker-compose run --rm node_client 	npm update
	make npm_install

prisma_deploy:
	docker-compose run --rm node_prisma		prisma deploy

prisma_generate_client:
	docker-compose run --rm node_prisma 	graphql get-schema --project database
	docker-compose run --rm node_prisma		graphql codegen --project database

proto_build:
	docker-compose run -u 1000 generic npm install
	docker-compose run -u 1000 generic sh compile.proto.sh