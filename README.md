# React project: Listify - Fullstack project from scratch
The app is hosted via Netlify : https://listifyapp.netlify.app/

 Technologies used in this project:
* React
* NodeJS
* MongoDB
* Express
* Bcrypt
* JWT


<img src="https://cdn.discordapp.com/attachments/923936691906043965/935545098635206726/unknown.png" height="500px"/> 

## Summary
A shoppinglist application where you can create and share shoppinglists with friends and family!



This project is a fullstack project that I've been working on during my free time.
I use MongoDB as my database, which is connected to my NodeJS Express server. The server handles all communication between my DB and my front-end.
For security measures, I've decided to encrypt the passwords and authenticate users. The password is encrypted using Bcrypt. Authentication is being taken care of by sending JWT tokens through HTTPonly cookies. In the future I might change from JWT tokens to using sessions, as they give the server the ability to revoke sessions, whereas JWT cannot be revoked.





## API/Server
The server handles all communication between the client and the DB. It also takes care of encryption and authentication. It can be found here
https://github.com/metinmayi/Node-API


## Features:
* Create/delete shoppinglists that are bound to your account.
* Ability to share shoppinglists to friends/family, opening the lists up to their accounts aswell.
* Add/remove items from your shoppinglist.
* Check/Uncheck items to show that you've bought or haven't bought them yet.
* If you accidentally remove a list, don't worry, they're available and able to be restored through the "Old Lists" section.
