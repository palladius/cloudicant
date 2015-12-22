
#TODO(ricc): find an easy way to import the env.sh and test the repo (eg, make sure the .json exists 
#	         whereas there is a .dist)

export PROJECT_ID="cloudicant"
export PROJECT_NUMBER="164050956481"

deploy:
	gcloud alpha functions deploy helloworld \
	 --source-url https://source.developers.google.com/p/cloudicant/ \
	 --source / --source-branch master --trigger-topic hello_world

call:
	gcloud alpha functions call helloworld --data '{"message": "Messaggio da Rudy: Hello World!"}'
	