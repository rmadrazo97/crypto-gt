# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

## Components Documentation
### AboutUs Component
This component displays information about the website or organization. It shows different content depending on whether it is viewed on a desktop or mobile device.

#### Props
This component does not receive any props.

#### Usage
Import the AboutUs component and include it in your JSX code:
`import AboutUs from './path/to/AboutUs';`

```
function App() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
```

#### Structure
The AboutUs component is structured as follows:

```
<div className="aboutUs">
  <div className="aboutUs-pc">
    <img className="aboutusImgPc" src={aboutUsImgpc} alt="aboutusImg" />
    <div>
      <p className="aboutUs-text1">Sobre nosotros</p>
      <p className="aboutUs-text2">
        Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
        debitis id. Ea error audiam alienum eos, an vel quas docendi
        disputando.
      </p>
    </div>
  </div>
  <div className="aboutUs-mobile">
    <p className="aboutUs-text1">Sobre nosotros</p>
    <p className="aboutUs-text2">
      Lorem ipsum dolor sit amet, est vero delicatissimi id, usu aliquid
      debitis id. Ea error audiam alienum eos, an vel quas docendi
      disputando.
    </p>
    <img className="aboutusImgMobile" src={aboutusImg} alt="aboutusImg" />
  </div>
</div>
```
On desktop, the aboutUsImgpc image is displayed to the left of the text. On mobile, the aboutusImg image is displayed below the text.

#### Styling
The AboutUs component has its own styles in a separate CSS file, which is imported at the top of the component file:

`import './aboutUs.css';`
You can customize the appearance of the component by modifying the styles in this file.
