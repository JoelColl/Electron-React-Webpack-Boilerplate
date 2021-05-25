# Electron React Webpack Boilerplate

Simple boilerplate to get started with [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/)

## Steps to run the app

- clone the repo with `git clone https://github.com/JoelColl/Electron-React-Webpack-Boilerplate.git`
- run `yarn install`
- run `yarn start`
- Profit!

## All Scripts

### `yarn start`

Runs the app in the development mode.\
It serves the app in [http://localhost:8080](http://localhost:8080) and will automatically inject it into the electron app wrapper.

You can also open the above url in the browser if you wish to do so.

### `yarn start:electron`

Will only serve the electron wrapper, without any React content.

### `yarn start:react`

Will only serve the React app, without the Electron wrapper.

### `yarn format`

Uses Prettier to format the whole repo, useful if you don't have the `formatOnSave` option toggled on.

### `yarn bundle:react`

It creates the minified version of the react app and will output it in the public folder with the `App.js` name without electron

### `yarn dist`

Creates the installer for the electron app, It first minifies the the react app and then it bundles it with electron.
