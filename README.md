# angular2-sandbox-guildrunner
The GuildRunner web application is a sandbox project for learning how to build Angular 2 web applications through
research and experimentation.  Blog posts concerning the evolution of the project can be found at 
[http://www.thoughtdelimited.org/thoughts](http://www.thoughtdelimited.org/thoughts/) 

## Installation Instructions

To download and execute this web application on your own system, perform the following steps:

1. Install [node.js](https://nodejs.org/en/) on your system if you don't already have it.

2. Perform a global install the latest version of [Angular CLI](https://cli.angular.io/) that uses SystemJS as its module loader.
   1. The current version of Angular CLI still uses SystemJS, so you can perform the install with the following
command: **npm install -g angular-cli**.
   2. In the near future, Angular CLI will use Webpack as its module loader, at which point you would need to
   install the last SystemJS version rather than the current CLI version.
   
3. Download the repo to a project folder on your system.

4. Open a terminal/command prompt in the project folder and execute the following commands:  
   1. **npm install** to download and install the necessary node modules (this will take at least a few minutes)
   2. **ng serve**, which will create a "dist" folder in the project and will serve the application 


## Release Highlights

### 0.0.1

* Basic application foundation established.
* Added [in-memory web API](https://angular.io/docs/ts/latest/guide/server-communication.html#!#in-mem-web-api) to application to make use of mock data.
* Created "db" folder to hold mock data exports.


