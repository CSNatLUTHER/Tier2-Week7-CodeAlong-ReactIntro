REACT INTO APP
===

PHASE 1: CREATE AND SETUP
---
 - run ```npx create-react-app APP-NAME``` in terminal
 - empty README.md (update with project decription)
 - cd into project folder and run ```npm start```
 - go into src/App.js and update the initial DOM content
 - create _template folder and _template.jsx
 - add following code to _template.jsx"
        ```
            // importing just "useState from the 'react' package"
            import { useState } from 'react';
            function _template() {
                // const [name, setName] = useState( null );
                return(
                    <div>
                        <h1>_template</h1>
                    </div>
                )
            }       
            export default _template
        ```

 - duplicate _template folder and rename to "Body"
 - rename jsx file to "Body" too
 - in Body.jsx, find and replate _template with "Body"
 - same for "Footer"
 - import body and footer on App.js file
        ```
            import Body from './Body/Body';
            import Footer from './Footer/Footer';
        ```

 - Mount Body and Footer to the DOM on the App.js file below the ```<header>```
        ```
            <Body />
            <Footer />
        ```
 - create clicks variable and it's setter (copy from template comment);
        ```
            function Body() {
                // const [name, setName] = useState( null );
                const [clicks, setClicks] = useState( 0 ); // replace name(s) and set initial Value
                const handleClick = ()=>{
                    console.log( 'in handleClick');
                    setClicks( clicks + 1);
                }
                return(
                    <div>
                        <h1>THIS IS THE BODY</h1>
                        <p>Hello World from the Body Components</p>
                        <button onClick={ handleClick }>Clicker</button>
                        <p>Clicks: { clicks }</p>
                    </div>
                )
            }

        ```

PHASE 3: TEXT IN FOOTER
---




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
