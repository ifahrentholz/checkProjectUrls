var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var projectSchema = new mongoose.Schema({
  projectName: String,
  url: String,
  created_by: String,
  project_leader: String
});


module.exports = restful.model('Projects', projectSchema);