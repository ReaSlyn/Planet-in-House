# Boilerplate React JS / App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Material UI](https://material-ui.com/)

## Installation

### Copy .env file :

```
cp .env.example .env
```

### Set node version

```
nvm use
```

### Install dependencies

```
yarn install
```

## Run project

### Start

`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

`yarn run build`

Builds the app for production to the `build` folder.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Storybook

`yarn run storybook`

# Exercice

En se basant sur l'api https://api.le-systeme-solaire.net :

1. Afficher la liste des planètes du système solaire (image, nom).
2. Avoir la possibilité de filtrer par un champs text sur le nom de la planète.
3. Au clique afficher une page détail (avec une route) pour afficher les détailles de la planète. Libre à vous d'afficher ce que vous voulez.

En option utiliser les composants material UI qui sont déjà inclut dans le projet.
