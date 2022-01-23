# React project: Listify (under development)
https://listifyapp.netlify.app/

A shoppinglist application where you can create and share shoppinglists with friends and family!


Technologies used in this project:
* React
* NodeJS
* MongoDB
* Express

## Authentication
Authentication is being handled throught my selfmade API, with JWT tokens stored in HTTP-only cookies.
Passwords are encrypted using the bcryptjs library.

## API
I created my own API that I've hosted through Heroku. It can be found here:
https://github.com/metinmayi/Node-API


## Features:
* Create/delete shoppinglists that are bound to your account.
* Ability to share shoppinglists to friends/family, opening the lists up to their accounts aswell.
* Add/remove items from your shoppinglist.
* Check/Uncheck items to show that you've bought or haven't bought them yet.
* If you accidentally remove a list, don't worry, they're available and able to be restored through the "Old Lists" section.


## Wireframe
https://www.figma.com/file/upRcLiZ0UgUmq3n62pXXVk/React-Listify?node-id=0%3A1
