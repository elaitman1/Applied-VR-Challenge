# AppliedVR Coding Challenge

# Introduction

This challenge consists of the following segments, each meant to demonstrate particular skills:
 1. Build a simple React/Redux application to demonstrate fundamentals in those frameworks
 1. Build standard UI elements to demonstrate HTML and CSS fundamentals
 1. Fix some intentionally but only slightly broken code (i.e. fill in the blank), to demonstrate some Javascript skills and the ability to read and understand a moderately complex project structure

# Setup instructions

## Installation

1. `git clone <repo url>`
1. Ensure Redis is installed and that you can run `redis-server` (this project was developed with v3.2.11)
1. Ensure you have Node 10.x installed (this project was developed on 10.15.3)
1. `npm install` (or `yarn`)

## Run the server (with hot-reload enabled)

    `redis-server` (backgrounded or in another terminal)
    `npm run build:dev` - will run some build and cleaning scripts
    `npm run dev` - will start a server at localhost:8080
      * Note: the first time you try to load localhost:8080, you will see an error appear in the console. More on that below.

# Challenge Instructions

Your task is to build a simple web application that consists of a single page. The page and its features should meet the following specifications:
- The page should feature a single form, evenly centered within the page both horizontally and vertically
- The form inputs should be stacked vertically (as in the example image /docs/form-example.png)
- The submit button should be below the last input
- The page should be responsive / mobile-friendly (i.e. a user should be able to resize the browser from mobile dimensions to full desktop and have it display cleanly at every point between)
  Note: the styling need not change drastically between mobile and desktop versions. Just make it usable.
- The form should be built using `redux-form` (already in `package.json`)
- The form submission should be a POST to `https://api-dev.appliedvr.io/dev_challenge/mock_login`, with the parameters `email`, `password`, and `password_confirmation`.
- The page should show validation errors as delivered from the backend. The backend will supply validation error messages with a `messages` array. These may be displayed together, rather than next to their respective inputs.
- Show a loading indicator (spinner or other) while form submission is in progress. The indicator must block at least the submit button from being clicked.
- Below the form, add a toggle button and container. 
- The container should contain the response from the API, and should by default be hidden. The toggle is always visible and toggles visibility of the response from the API.

Additionally:
- We've left one error in the project. This is the one that will appear in the console the first time you try to load the main page in a browser. You'll have to fix it in order to start the challenge.
- Implement your toggle and form submission methods in the GlobalComponent class such that they could both be reused in other pages/components. (e.g. the toggle method should be written such that you could toggle any arbitrary item in Redux state between true and false)

Nice to haves
- SASS without any frameworks like Bootstrap, Material, Bourbon.io, etc.
- Hover states on interactive elements, and other user-interaction cues or animations

### Notes

The file `./assets/jsx/pages/component.jsx` is the main React component for the root page (with path `'/'`).
The file `./assets/scss/pages/index.scss` is the main stylesheet for the root page.
The Redux root directory is ./assets/jsx/redux and includes a standard Redux file structure.

The response from the mock endpoint will follow this format:
```
Success
  {
    "email": <String>
    "password": <String>
    "password_confirmation": <String>
    "created_at": <String date>
    "updated_at": <String date>
    "deleted_at": <String date or null>
  }

Error
  {
      "error": "Bad Request",
      "messages": [
          "<String validation message>"
      ]
  }
```

# Submitting the project

Delete `node_modules`
Zip the project and label it: `<your name>-react-challenge.zip`

# Resources

`redux-form`: https://github.com/erikras/redux-form  

Framework used: Rails on Node
Framework Documentation: https://railsonnode.com

Finally, write in if the assignment is not clear or you have other questions. It is not meant to be mysterious.
