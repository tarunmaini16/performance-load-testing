#!/usr/bin/env bash

function run() {
    docker run --rm -v `pwd`/user-files:/sandbox/gatling/user-files -v `pwd`/results:/sandbox/gatling/results gatling:local -s $1
}
