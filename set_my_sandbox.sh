#!/bin/bash

echo 'Building docker image...'
docker build -t gatling:local .

echo 'Setting command and granting permissions...'
chmod +x .run.sh
