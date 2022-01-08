#!/bin/bash
docker-compose -f docker-compose.yml -f docker-compose-prod.yml $1 $2 $3 $4 $5 $6
