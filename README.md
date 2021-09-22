# Github Gist Searcher
This is a minimalistic app that search and list Github users gists with users that forked it

![Demo](/demo.gif)

## Setup

### Prerequisites

* Node.js >= 16
* React.js >= 17


Create a .env and place values of these below variable with appropriate values 
``` 
REACT_APP_GITHUB_API
```
*please see `.env.example` for reference*

Execute the following

```
npm install && npm start

```


## Testing

```
npm run test
```

### Test Coverage
```
npm run test:coverage
```
## Styleguide
This project follows the Airbnb style guides
```
npm run lint     // list out all the warnings/errors
npm run lint:fix // Fix lint warnings/errors automatically
```

# Application Structure
A modular approach to organize the React App.
## Modules

Module are the Smart components which will have following responsibilities
- Route handler 
- State Management (Components/Stateless Components)

## Generic Components (Stateless)
These are the common components that can be used inside a module or component

## Services
Services are responsible for triggering the API requests. They are not tightly coupled with projects.
Currently axios is being used for requests but can be replaced easily with fetch as well.

## Hooks
Extract the common logic into the reuseable/customizable hooks. 
