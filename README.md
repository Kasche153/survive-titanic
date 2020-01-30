
## PROJECT DESCRIPTON

Our project is an webaplication where the user gets to calculated their chance of survivng the Titanic.
The input is answers to Y/N questions and a username. The output is a number between 0 and 1, visualzation of the data(decison tree), and a place on our leaderboard.

## How to setup

To set this project up download the repository and run

$npm install && npm run start

This will start the react application on your local machine on port 3000.

## File structure

We are using a default react typescript enviroment with scss. We implementent a global state using redux and are using apollo clientside to handle GraphQL request. The file strucutre is a MVC with Containers > Pages > Views > Components.

## The API

The API we are using is implemented using the API specification GraphQL and is hosted on AWS with no CORS restrictions.

Please visit https://d4aiv8yqah.execute-api.eu-west-1.amazonaws.com/dev/graphql for API specifications.

## Scripts 

## npm run start

Starts the application in development mode to be run locally

## npm run build

Build the applciation

## HOSTED HERE http://will-you-survive-titanic.s3-website-eu-west-1.amazonaws.com/