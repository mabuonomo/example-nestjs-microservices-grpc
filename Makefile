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

# npm_outdate:
# 	docker-compose run node npm outdate

npm_update:
	docker-compose run --rm node_1 			npm update
	docker-compose run --rm node_2 			npm update
	docker-compose run --rm node_prisma 	npm update
	docker-compose run --rm node_client 	npm update
	make npm_install

prisma_deploy:
	docker-compose run node_prisma			npx prisma deploy

# start:
# 	docker-compose up -d
# 	docker-compose exec node npm start run

# debug:
# 	docker-compose up -d
# 	docker-compose exec node npm run start:debug

# stop:
# 	docker-compose stop

# test:
# 	docker-compose run node npm test