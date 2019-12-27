# npm_install:
# 	docker-compose run node npm install

# npm_outdate:
# 	docker-compose run node npm outdate

# npm_ncu:
# 	docker-compose run node ncu-u

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

format:
	docker-compose run node npm run format

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./