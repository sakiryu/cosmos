# Cosmos
An http(s)-based update provider for nano-launcher

## Requirements
- NodeJS 18.x, if you just want to run the project 
- Docker, if you want to run the project in a containerized environment

## Setting up

- Create the folder "/data" in the root of the project
- This is the folder that will hold the files of your update

### Running with NodeJS
```
npm install
npm run dev
```
### Running with docker

- Replace the dummy path below with one pointing to the folder you've created in the root directory of the project

```
docker build . -t cosmos
docker run -p 5000:5000 -v absolute/path/to/data/folder:/data cosmos
```
