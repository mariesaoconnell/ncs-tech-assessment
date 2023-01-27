# VIN FINDER

## APP DESCRIPTION
  VIN Finder is a web app that allows users to search VINs and returns general information about the vehicle, including the year, make, model, class, photos, etc.

## TECHNOLOGIES USED

VIN Finder is a REACTJS Web APP that utilizes:
 - Bootstrap - used for building and styling multiple components.
 - Firebase - used for Authentication.
 - React Router - used for routing endpoints and protecting paths that require user authorization.
 - React Switch - used to create the UI which users can use to toggle 'dark' and 'light' mode.
 - React Chatbot Kit - used to create the FAQ Bot, which users can interact with and ask specific questions. 
 - Programmable Search Engine API - used for the rendering of vehicle photos, based on the VIN input by the user. 
 - Auto Dev API - used for the rendering of vehicle information, based on the VIN input by the user.

## INSTALLATION

This application utilizes Google's Programmable Search Engine API, which means it is necessary to have an API KEY and Project ID in order to make this project work.

1. In the root folder, create a '.env' file and the variables should look as follows:

    ```
    REACT_APP_API_KEY=<YOUR API KEY HERE>

    REACT_APP_PROJECT_ID=<YOUR API KEY HERE>
    ```
    Be sure there are no spaces between the variable name, equal sign, and your API Key.
2. Download the following dependencies.
    ```
    npm i react-bootstrap bootstrap dotenv firebase react-chatbot-kit react-router-dom react-switch
    ```
3. Now in your console run the command
    ```
    npm start
    ```


## WEB-BASED APP

Prefer to use the web-based application and not worry about environment variables, downloading dependencies or simply having the space?

You can access VIN Finder by clicking [HERE](https://vinfinder.netlify.app).


## Test User


If you wish to test this app without signing up, you can use the following credentials:
> <b>email:</b> test@email.com <br/>
> <b>password:</b> 123456789
