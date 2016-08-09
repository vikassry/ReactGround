var fs = require("fs");
var taskFile = "./data/todoList.json";

module.exports  = function(req, res, next){
  var tasksContent = fs.readFileSync(taskFile).toString();
  var tasks = JSON.parse(tasksContent);
  console.log(tasks);
  res.render('todo', { tasks : tasks, title : "TODO" });
};
