
  
# Note Taker

## Description 

This application creates and saves various notes for the user. By using the Express.js backend, the saved notes are created and deleted from a JSON file. 

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A version of the deployed website can be viewed here.](https://note-taking-app-erin.herokuapp.com/)

## Contents
1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance Criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

The user easily views their saved notes and can either create more as tasks emerge, or delete notes as they're tackled. The application uses Express.js to save the user's notes in a JSON file, which can be added to or deleted from depending on the user's needs. As the file is constantly updated through Express.js, the user can expect their notes to stay updated as they sift through their tasks. 

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria 

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Visuals: 

![index.html screenshot](public\assets\images\index-screenshot.png)
![notes.html screenshot](public\assets\images\notes-screenshot.png)

## Technologies

*[Node.js](https://nodejs.org/en/)
*[Express.js](https://expressjs.com/)
*[uuid](https://www.npmjs.com/package/uuid)
*[Heroku](https://id.heroku.com/login)
*[Bootstrap](https://getbootstrap.com/)
*[Google Fonts](https://fonts.google.com/)



## Installation 

Please run the following dependencies to install the application: 

`
npm i
`

## License 

This reposititory is licensed under the MIT license. 

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage 

After installing the required packages, the user must run \`node server.js` to be taken to the server. The user can either run the application in the local server or use Heroku to host the application.  

## Contributing 

This repository is currently not accepting contributions. 

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

* GitHub: [ekellv](https://github.com/ekellv)
* Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)

