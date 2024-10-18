# Desafio FullCycle 3.0 - Node.js


This Dockerized application contains:
- nginx as a reverse proxy
- mysql as a database
- node.js as the server application


### Container build / start  (To initialize the application, run this command)
```
docker-compose up --build -d
```

### Container removal
```
docker-compose down -v
```

### Checking all containers (stopped or running)
```
docker ps -a
```

### Checking containers logs
```
docker logs app
docker logs db
docker logs proxy
```

### Accessing container (in this case, DB conainer)
```
docker exec -it db /bin/bash

mysql -u root -p
```
