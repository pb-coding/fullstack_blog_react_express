#!/bin/bash
docker-compose -f docker-compose.yml -f docker-compose-dev.yml $1 $2 $3 $4 $5 $6
