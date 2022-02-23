# Fullstack Blog App using MERN-Stack

This is about me learning:
* building a full stack app using MERN Stack with MySQL (MySQL / ExpressJS / React / Nginx)
* reactjs and bootstrap (frontend)
* using expressjs for the backend & API
* dockerizing that app
* how to deploy with docker for development and production
* testing remote deployment with docker contexts
* Project idea: Building a simple blog app

Disclaimer:
* to get an initial grasp on how to structure things this repo helped me as a starting point: https://github.com/mosesreigns/Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy
* the structure, content and code of the project have changed a lot since then.

Usage:
In fullstack_blog_react_express folder type:
* for development: ./dev.sh up -d --build
* for production: ./prod.sh up -d --build
* logs: ./dev.sh logs -f

* Open localhost:3050 to see the blog


![Blog pic](https://sicktechtips.com/blog1.png)

* Open localhost:3050/backend to add blog entries or pages into the navigation

![Blog pic 2](https://sicktechtips.com/blog2.png)
![Blog pic 3](https://sicktechtips.com/blog3.png)
