A community news site project in the subject TDAT2003 Systemutvikling 2 med web-applikasjoner (2019)

<br/>

## Technologies used in this project
- MongoDB (noSQL database)
- Express.js (Node.js API module)
- Mongoose (MongoDB modeling tool)
- React.js
- Jest (for js) and supertest (for API)
<br/>


## How to launch website
1. Clone project and install dependencies
```terminal
git clone https://gitlab.stud.iie.ntnu.no/mikaek/firenews
npm install
```

2. Start API server (from command line)
```terminal
cd api 
node start.js
```
3. Start react server (from command line)
````terminal
npm start
````
<br/>

## Structure 
### Page routing
I used **react-router** for loading components on different urls on the site. 
````javascript
````
<br/>

## Screenshots/gifs
### Main pages/features
NB! The lag when loading new pages is because of the screen capture software
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/frontPage.gif' width='75%' alt="Main page features gif"/>

### 404 page
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/404.PNG' width='75%' alt="404 page screenshot"/>

### Article publish
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/publish.PNG' width='75%' alt="Publish aricle page screenshot"/>

### Input validation
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/input.gif' width='75%' alt="Input validation gif"/>

### Edit article & delte confirmation
<img src='https://gitlab.stud.iie.ntnu.no/mikaek/firenews/raw/master/images/delete.gif' width='75%' alt="Edit article and delete validation gif" />