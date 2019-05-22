# AppliedVR Coding Challenge

## Installation

Install Redis
Install Node 10.x

## Framework used: Rails on Node

Framework Documentation: https://railsonnode.com

## Challenge

- Fix the Global Component so it supports React components
- Use the Global Component to change state across all React components for global utilities
- On the home page build a form using Redux Forms with Form Validation
- Display the response in a section that allows you to show and hide the response with a toggle button

Must Haves

- Use the flex model for styling and make your page responsive
- You must create a reusable toggle function in the Global Component
- You must create a reusable method in the Global Component that handles all your redux actions
- You must provide form validation for errors
- You must disable the submit button for the form when the form is pending

Like to Sees

- Custom SASS styling without any frameworks like Bootstrap, Material, Bourbon.io, etc.

### Your Home Page

An example of the page looks like this: [Example Form](./docs/form-example.png)

The file `./assets/jsx/pages/component.jsx` is the root React component for the entire page.
The file `./assets/scss/pages/index.scss` is source sass file for styling.
Your Redux is found in the directory ./assets/jsx/redux

Build a Redux Form with form validation

    Side Note:
        All pages with this framework have there our bundles so Redux is stored on the server for persistence.
        This is not an SPA and should NOT be.
        This is done so all pages get their own assets.
        For the fastest speeds, optimization, and security with Server Side React because the server controls the client.
        And the client does not control the server.

### The Form

You will be making a POST request to a mock login endpoint: https://api-dev.appliedvr.io/challenge/mock_login

The inputs are:

- email
- password
- password_confirmation

The back end endpoint is providing your error messages. In the format:

    {
        "error": "status_code_meaning",
        "messages": [
            "Form error"
        ]
    }

### To Run the Server with Hot Reloading

    // Run running Redis on port 6379

    npm install
    npm run build:dev
    npm run dev

## Submitting the project

Delete the node_modules
Zip the project and label it: `(your-name)-react-challenge.zip`
