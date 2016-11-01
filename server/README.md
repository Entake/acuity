<p align="center">
    <a href="https://thatimagetagging.site">
        <img src="https://cloud.githubusercontent.com/assets/3519438/19272712/d96cc6e8-8fc9-11e6-90f2-00e7a4156fff.png" alt="Acuity" height="200" />
    </a>
</p>
<h3 align="center">Acuity Server</h3>
<p align="center">Backend API for the Acuity project</p>
<p align="center">
    <a href="https://gitter.im/acuity-project/Lobby">
        <img src="https://img.shields.io/gitter/room/entake/acuity.svg">
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
    <a href="https://codecov.io/gh/Entake/acuity">
        <img src="https://codecov.io/gh/Entake/acuity/branch/master/graph/badge.svg" alt="Codecov" />
    </a>
    <a href="https://david-dm.org/Entake/acuity?path=server" title="dependencies status">
        <img src="https://david-dm.org/Entake/acuity/status.svg?path=server"/>
    </a>
    <a href="https://david-dm.org/Entake/acuity?path=server&type=dev" title="devDependencies status">
        <img src="https://david-dm.org/Entake/acuity/dev-status.svg?path=server"/>
    </a>
</p>

---


This is a REST API server, that provides CRUD capabilities, as well as user authentication, for the Acuity image sharing platform.  
The server is built using [Koa](http://koajs.com/) as the server backbone, and [Passport](http://passportjs.org/) as authentication middleware. The code is being compiled from ES2015+ by [Babel](https://babeljs.io/).  
It uses [RethinkDB](https://rethinkdb.com/) as the database, for storing data.

## Usage

Acuity server will be able to be launched in two ways - using docker, or using node.  
However for now, Node is the only option.  

### Using Node

Running the server using Node requires that you have Node.js v6 or later installed.  
To run the server locally, do the following:  
1. Clone this repository  
2. Enter the `./server` folder  
3. Install dependencies with `npm install` or `yarn`  
4. Make sure you have a local RethinkDB server running (or start one using `npm run db:create`, requires docker)  
5. Start the server using `npm start`  
6. Navigate to [http://localhost:8080](http://localhost:8080) in your browser  

## Development

Development requires that you have Node.js v6 or later installed.  
To run the server for development, just follow the instuctions from the [Using Node](#using-node) section.  
To run the test suite simply execute `npm test`.  
To see all available commands, see package.json.  

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
