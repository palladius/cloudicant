#!/bin/bash

export PROJECT_ID="cloudicant"
export PROJECT_NUMBER="164050956481"

set -x

gcloud alpha functions deploy helloworld \
	--source-url https://source.developers.google.com/p/cloudicant/ \
	--source /cloud_functions/index.js \
	--source-branch master \
	--trigger-topic hello_world


