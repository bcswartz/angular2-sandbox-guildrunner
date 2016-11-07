# angular2-sandbox-guildrunner
The GuildRunner web application is a sandbox project for learning how to build Angular 2 web applications through
research and experimentation.  Blog posts concerning the evolution of the project can be found at 
[http://www.thoughtdelimited.org/thoughts](http://www.thoughtdelimited.org/thoughts/) 

## Angular / Angular CLI Version Notes

As of release 0.0.3, this application is built around Angular 2 release candidate 5 (RC5) and Angular CLI version beta.10.  So it does not 
utilize Webpack as its module loader (it uses SystemJS), but it does use the ngModule feature introduced in Angular 2 RC5.

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

### 0.0.7

* Revised the sandbox Chapter edit form to use the [vadacl](https://github.com/bcswartz/vadacl) validation library,
which allows developers to define validation rules at both the data object and component level.

### 0.0.6

* Created a sandbox version of a Chapter edit form using reactive form classes (FormGroup, FormArray, and FormControl)
and Validators.

### 0.0.5

* Removed Address and Member domain classes; added Person, Location, Chapter, ChapterLocation, and ChapterMember classes; refactored Guild class
* Created new approach to setting domain class property defaults and setting property values in the constructor
* Created sandbox views and master list views for Chapters and ChapterMembers
* Utilized Promise.all() to resolve multiple promises in component methods that need data from multiple service methods

### 0.0.4

* Added "incorporationYear" and "email" properties to the Guild data and domain class
* Refactored the Guild domain class to allow it to be instantiated without data
* Created basic add/edit form for guild objects
* Created first draft of proof-of-concept for validating a pre-RC6 template-driven form
* Created HttpResponse object for transporting HTTP response data from the service to the component

### 0.0.3

* Upgraded Angular modules to release candidate 5 (RC5)
* Refactored routing code to use latest routing setup and syntax
* Refactored multiple files to utilize ngModule introduced in RC5
* Moved sandbox feature files into separate module and routing file

### 0.0.2

* Added Bootstrap navigation bar
* Added routing
* Created guild, address, and member data and domain classes
* Created "sandbox" area of application to hold experimental/diagnostic features
* Created guild master list component to display data from instances of the Guild domain class

### 0.0.1

* Basic application foundation established
* Added [in-memory web API](https://angular.io/docs/ts/latest/guide/server-communication.html#!#in-mem-web-api) to application to make use of mock data
* Created "db" folder to hold mock data exports


