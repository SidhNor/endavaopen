## Description
Endava Open is a website that exposes REST Api, as well as provides an isomorphic responsive front end for the 2015 tennis event organized by Endava Chisinau

## Project structure
[Sails](sailsjs.org) is used as an MVC framework backed up by [Waterline](https://github.com/balderdashy/waterline) ORM communicating with MongoDB

Front end part of the app is driven by [ReactJS](https://facebook.github.io/react/), [Material-UI for react](https://github.com/callemall/material-ui)

- assets : Directory with React SPA 
 - js
 - styles
- views : Directory with server-side views and layouts
- config: Configuration directory
- api   : Rest API blueprints, Models, controllers, etc
 
## Installation &nbsp;

**With [node](http://nodejs.org) [installed](http://sailsjs.org/#!documentation/new-to-nodejs):**
```sh
# Get the latest stable release of Sails
$ npm install sails -g

# Install local dependencies
$ npm install
```

**Start up the server**
```sh
$ sails lift
```
> In case you did not install sails globally, you can run node as default
> ```sh
> $ node start
> ```


## OpenShift specific Repo layout
| Directory name| Description |
| ------------- | ----------- |
|  node_modules/                       | Any Node modules packaged with the app |
|  deplist.txt                         | Deprecated. |
|  package.json                        | npm package descriptor. |
|  .openshift/                         | Location for openshift specific files |
|  .openshift/action_hooks/pre_build   | Script that gets run every git push before the build |
|  .openshift/action_hooks/build       | Script that gets run every git push as part of the build process (on the CI system if available) |
|  .openshift/action_hooks/deploy      | Script that gets run every git push after build but before the app is restarted |
|  .openshift/action_hooks/post_deploy | Script that gets run every git push after the app is restarted |
