# Objective
Show Gist of searched user

## How to run project


Create a .env and place values of theses below variable with appropriate values 
``` 
REACT_APP_API_URL
REACT_APP_GITHUB_TOKEN
```
## Setup a gist account
Create a personal gist key from [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

copy and paste it in .env
where 
```
REACT_APP_GITHUB_TOKEN 
```

## Install node dependencies
Node version must be greater then 16.
Run following command
```
npm install
```

## Run the project
You can run the project
```
npm start
```

## Run the test
You can run the test
```
npm run test
```

## Check test coverage
You can check the test coverage by running the command
```
npm run test:cov
```
## Format your code as
You can formate the project with
```
npm run format
```

# Project Demo

![Demo](/demo.gif)

# Project Structure
A modular approach to organize the React APP.
## Modules
Module are the Smart components which will have following responsibilities
- Managing all the components scoped in that module.
- Managing all the state management that are of APP level like API responses.
- Management of routes should also happen here.
- All the basic styling that is shared in the module will be implemented her.

## Components
Components are mainly dump. But components in module can sometime call access the App state.
We have two types of components in our project hierarchy.

- Part of module which is only used by that module.
- Common Generic Components that can be used anywhere in the project. They must be pure components.

## Services
Services are responsible for triggering the API requests. They are not tightly coupled with projects.
Currently axios is being used for requests but can be replaced easily with fetch as well.

## Hooks
All the custom hooks will be in this hierarchy.