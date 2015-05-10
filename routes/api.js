// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Project = require('../models/project');

// Routes
Project.methods(['get', 'put', 'post', 'delete']);
Project.register(router, '/projects');

// export
module.exports = router;