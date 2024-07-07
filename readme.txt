Portfolio --> MERN

inetialize portfolio folder : npm init, npm install express mongoose dotenv

FRONTEND :
    - npx create-react-app client
    - npm install react-router-dom

BACKEND :
    - create server.js
    - npm init      (inetialize folder)
    - npm install express mongoose dotenv


Create db and get connection string 
    mongodb.com => google account login
    Mongodb atlas cluster1:
        - username : ds095536          password :  PRhPtmoKYoJnC9Dt

        - connection string
        mongodb+srv://ds095536:PRhPtmoKYoJnC9Dt@cluster1.coujszi.mongodb.net/portfolio

    Database access credentials :
            mongodb+srv://ds095536:ds095536_dbaccesspassword@cluster1.coujszi.mongodb.net/portfolio
        - db name : portfolio      collection name :  users
        - username : ds095536@admin    password : ds095536   :  pL0Ys3rsz7hBeDgy : ds095536_dbaccesspassword

    open db in mongodb compass   using conn string and atlas cluster credentials

create .env and dbConfig.js(code for db conn to nodejs/backend server)

restart server
update server.js


