docker = docker-compose run --rm -u 1000

init:
	${docker} node_1 		npm install
	${docker} node_2 		npm install
	${docker} node_prisma	npm install
	${docker} node_client 	npm install
	make proto_build

format:
	${docker} node_1 		npm run format
	${docker} node_2 		npm run format
	${docker} node_prisma	npm run format
	${docker} node_client 	npm run format

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

npm_update:
	${docker} node_1 		npm update
	${docker} node_2 		npm update
	${docker} node_prisma 	npm update
	${docker} node_client 	npm update
	make init

prisma_deploy:
	${docker} node_prisma	prisma deploy

prisma_generate_client:
	${docker} node_prisma 	graphql get-schema --project database
	${docker} node_prisma	graphql codegen --project database

proto_build:
	${docker} generic 		npm install
	${docker} generic 		sh compile.proto.sh