docker = docker-compose run --rm -u 1000
projects = node_1 node_2 node_prisma node_client

init:
	$(foreach project,$(projects),${docker} ${project} npm install;)
	make proto_build

format:
	$(foreach project,$(projects),${docker} ${project} npm run format;)

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

npm_update:
	$(foreach project,$(projects),${docker} ${project} npm update;)
	make init

npm_update_last:
	$(foreach project,$(projects),${docker} ${project} ncu -u;)
	make init

prisma_deploy:
	${docker} node_prisma	prisma deploy

prisma_generate_client:
	${docker} node_prisma 	graphql get-schema --project database
	${docker} node_prisma	graphql codegen --project database

proto_build:
	${docker} generic 		npm install
	${docker} generic 		sh compile.proto.sh