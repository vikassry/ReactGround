var fs = require("fs");
var taskFile = "./data/tasks.json";

module.exports  = function(req, res, next){
  var tasksContent = fs.readFileSync(taskFile).toString();
  var tasks = JSON.parse(tasksContent);
  res.render('todo', { tasks : tasks, title : "TODO" });
};
