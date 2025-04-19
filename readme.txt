Portfolio --> MERN

inetialize portfolio folder : npm init, npm install express mongoose dotenv

FRONTEND :
    - npx create-react-app client
    - npm install react-router-dom

BACKEND :
    - create server.js
    - npm init      (inetialize folder)
    - npm install express mongoose dotenv



restart server
update server.js

#For every collection he should have a structure which we will define in models
-> create models (portfolioModel.js,userModel.js)


#create collections(e.g education) in mongodb compass
    -> click ADD DATA --> Insert document -> add code (written in structure_for_mongodb.js) e.g
    [
        {
            "companyname":"Dexpert System",
            "companyimage":"https://dexpertsystems.in/assets/logo/web_icon.png",
            "period":"May 2024 - Current",
            "role":"FullStack web developer intern works on MERN stack, MySQL, PostgreSQL"
        }
    ]

#Create portfolioRoutes.js (create apis to fetch data from mongodb);
-> create get,post,put,delete apis
-> use router created in this file in server.js

flow -> server.js --> portfolioRoutes.js


#In package.json add proxy like this ->      "proxy":"http://localhost:5674/"
Install packages in frontend ->     npm i axios redux react-redux @reduxjs/toolkit

#after apis work successfully in backend(portfolioRoutes.js) write code/api in frontend(App.js) to connect to backend  

#Get data in App.js from api    (crete -> getPortfolioData())

#Create rootSlice.js in client/src/redux
#Create store.js in client/src/redux   and import in index.js
modify app.js - for loading and getPortfolioData
update home.jsx, intro.jsx for displaying data

