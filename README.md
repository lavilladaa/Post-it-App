
# Post-it notes App 

This application was developed as a part of the final project of
the bootcamp in Moove it (MooveCamp). 
The project applies all the tools seen in the classes 
like git, Git-Hub, HTML, CSS, JavaScript and
React using Redux, LocalStorage and React-Router-dom. 



## Features

The application allows to do post-it notes with a title and
a body text. 

- The post-it can be saved without the title. 
- If the body text of the post-it is empty, an alert is shown when the save button is clicked.
- The color of the post-it can be changed.
- The post-it created can be edited.
- The post-it can be deleted by sending it to the trash.
- In the trash icon in the home page, it is possible to see how many post-its have been deleted or if there are no post-its deleted.
- If the empty trash icon is clicked when there are no deleted post-its, an alert is shown. 
- The post-it can be restore from the trash to the Home.
- The post-it can be deleted permanently from the Trash.
- In the Trash page there is an icon to redirect to the Home page.

## Code Style

The application follows the airbnb style guide 
using eslint to check the file automatically with the 
eslint-config-airbnb. 

## Technologies

### Dependencies

* [Node.js](https://nodejs.org/es/): v18.2.0
* [React](https://reactjs.org/): v18.1.0
* [React Redux](https://react-redux.js.org): v8.0.2. To use global states.
* [Redux Toolkit](https://redux-toolkit.js.org/): v1.8.2 To create a Slice to have all the actions and the reducers together.
* [React Router](https://reactrouter.com/docs/en/v6): v6.3.0. To link the Home and the Trash pages.
* [PropTypes](https://www.npmjs.com/package/prop-types): v15.8.1. To check the types of the props to fill the ESLint requirements.
* [React Icons](https://react-icons.github.io/react-icons/): v4.3.1. For the save, edit, restore and delete buttons.

### Dev Dependencies

* [ESLint](https://eslint.org/docs/user-guide/getting-started): v8.2.0. To check the code styling with the airbnb guide.
* [Babel](https://www.npmjs.com/package/@babel/core): v7.18.2. To transpile the JS code for the browser.
* [tailwindcss](https://tailwindcss.com/docs/guides/create-react-app): v3.0.24. To make the CSS styling 
* [Prettier](https://prettier.io/docs/en/install.html): v2.6.2. To format the code automatically.
## Run Locally

Clone the project

```bash
  git clone https://github.com/lavilladaa/project-postit-notes.git
```

Go to the project directory

```bash
  cd the-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## App screen
![Algorithm schema](./src/components/assets/screenApp.PNG)

