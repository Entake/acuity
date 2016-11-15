<p align="center">
    <a href="https://thatimagetagging.site">
        <img src="https://cloud.githubusercontent.com/assets/3519438/19272712/d96cc6e8-8fc9-11e6-90f2-00e7a4156fff.png" alt="Acuity" height="200" />
    </a>
</p>
<h3 align="center">Acuity Client</h3>
<p align="center">React/Redux/Rx client for the Acuity project</p>
<p align="center">
    <a href="https://gitter.im/acuity-project/Lobby">
        <img src="https://img.shields.io/gitter/room/entake/acuity.svg" />
    </a>
    <a href="https://travis-ci.org/Entake/acuity">
        <img src="https://travis-ci.org/Entake/acuity.svg?branch=master" alt="Build Status">
    </a>
    <a href="https://raw.githubusercontent.com/Entake/acuity/master/LICENSE">
        <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="License">
    </a>
    <a href="http://standardjs.com/">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Code Style">
    </a>
    <a href="https://david-dm.org/Entake/acuity?path=client" title="dependencies status">
        <img src="https://david-dm.org/Entake/acuity/status.svg?path=client" />
    </a>
    <a href="https://david-dm.org/Entake/acuity?path=client&type=dev" title="devDependencies status">
        <img src="https://david-dm.org/Entake/acuity/dev-status.svg?path=client"/>
    </a>
</p>

---

This is a React/Redux/Rx app that provides a rich interface for browsing, tagging and uploading images for everyone to enjoy. 
All code is being compiled from ES2015+ by [Babel 6](https://babeljs.io/) and processed/bundled by [Webpack 2](https://webpack.js.org/).  
The client receives all data from Acuity Server.

## Usage

You can launch Acuity Client in two ways, one way for development and one way for deployment.  
To run it in development mode, follow the [development](#development) section.  
To run it in a deployment friendly setup, see the [production build](#production-build) section.  


## Development

Development requires that you have Node.js LTS (v6.9.1) or later installed.  
To run the client locally, do the following:  
1. Clone this repository  
2. Enter the `./client` directory  
3. Install dependencies with `npm install` or `yarn`  
4. Repeat step 2 and 3 for the `./server` directory  
4. Make sure you have a local RethinkDB server running (or start one using `npm run db:create`, requires docker)  
5. Start the project in development mode using `npm run dev` in the `./client` directory  
6. Navigate to [http://localhost:3000](http://localhost:3000) in your browser  

To run the linter through the client codebase, run `npm run lint`.  
To see all available commands, see package.json.  

## Production Build
In order to package Acuity Client you need to do the following:  
1. `$ npm run build`  
2. `$ docker build -t InsertYourTag .`  

If you want to deploy to a server, proceed to the [Deployment](#deployment) section.  

If you want to run the build locally, do the following:  
3. `docker run -d --name InsertAName -p 80:80 InsertYourTag`  
4. Visit [http://localhost](http://localhost)  

It isn't that useful to do this though, as the client will use `localhost/api` for API requests. So if you need to run the build locally without changes to the API request URL's, you would also need to run the backend and use a reverse proxy in order to filter the `localhost/api` requests to the backend API server.

## Deployment

In order to deploy Acuity Client to a server, simply do this after you have completed step 1 and 2 from the [Production Build](#production-build) section.  
A Linux server with a Docker installation is a prerequisite.  
1. `$ docker push InsertYourTagHere`  
2. `$ ssh user@yourServer`  
3. `$ docker pull InsertYourTagHere`  
4. `$ docker run --restart=always -d --name InsertName -p 80:80 InsertYourTag`  

## Contributing

For bug fixes, documentation changes, and small features:  
1. Fork this repository  
2. Create your feature branch (`git checkout -b my-new-feature`)  
3. Commit your changes (`git commit -am 'Add some feature'`)  
4. Push to the branch (`git push origin my-new-feature`)  
5. Create a new Pull Request  

For larger new features: Do everything as above, but first also make contact with the project maintainers to be sure that your change fits with the project direction, so that you won't be wasting effort going in the wrong direction.

## Help and Discussion
If you need help, feel free to create an issue, or visit the [Acuity Gitter channel](https://gitter.im/acuity-project/Lobby)!  
We are basically always available and ready to help you out, or have a great discussion! :speech_balloon:  

## License

[MIT](https://opensource.org/licenses/mit-license)
