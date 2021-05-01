# Create A movie API with NodeJs and MongoDB


This is an Nodejs RestFul API application for movies database, 
which can handle the creation of a new movie update the movie based on movieId,
read all the available movies from database, find a specific movie from database based on movieId,
and delete a movie based on movieId.

The technologies used in making this RestFul API application are:
    - NodeJs ( as a javascript runtime environment )
    - express ( JS library for building RestFul APIs' )
    - MongoDB ( As a dataBase )
    - mongoose ( NodeJs driver for handling the mongodb database)

We used the above technologies because of their whole kind, their heart is JavaScript :) . And nowadays to become a fullstack in webdevelopment we need to learn frontend and backend with JavaScript, since it is an emerging technology.

One challenging task that I faced while creating this Rest API is CORS, which is Cross Origin Resource Sharing, that means these api servers doesn't respond to the request coming from another server, it only accepts the requests that are coming from the same server ( address or url). But this becomes a great issue, since your frontend ( FE ) app will be another server and that api request coming from FE server cannot be processed due to CORS. But we have JS libarary named as *cors*, that solves this issue, we can simply this *cors* library and pass it as middleware for Rest API APP. You can reference this from app.js file from our project, how we passed cors as middleware for our app.

In future we will be adding other controller for our app which helps you to understand the file structure and working of Rest API with express NodeJs.


## Requirements
    -   NodeJs ( version 10+ )
    -   MongoDB server


## Installing the project

1. Clone this repository moviesRestApi
2. `cd moviesRestApi`
3. `npm install`


## How to run the app

1. Create a `.env` file with a DB_CONNECTION variable which contains the whole url for your MongoDB server connection with username and password. ( example: `DB_CONNECTION=mongodb+srv://username:password@serverRunningUrl/dataBaseName?retryWrites=true&w=majority`)
2. now execute `npm start`
3. Hurray ! thats it your server will be up and running.


## How to use the running app

1. Try using postman which is an api client used to test the api endpoints
2. try to call the apiendpoints which are defined in movieController form postman in proper way :) .

___

## Credits
-   [Easy understanding tutorial of building Rest API's with express NodeJs](https://youtu.be/vjf774RKrLc)

![Vivek's Badge](https://img.shields.io/badge/VivekTej-FollowMe-blue)



