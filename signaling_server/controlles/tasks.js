let tasksData = [
  { id: '05ox659oh', name: 'Задание 1', date: '2019-08-21', isComplete: false },
  { id: 'y517lt5w4', name: 'Задание 2', date: '2019-05-01', isComplete: false },
  { id: '6uc7u0t55', name: 'Задание 3', date: '2019-05-28', isComplete: true }
];

const getNewId = function () {
  return Math.random().toString(36).substr(2, 9);
};

function formatDate() {
  const dataNew = new Date();
  const month = dataNew.getMonth() < 10 ? `0${dataNew.getMonth() + 1}` : `${dataNew.getMonth() + 1}`;
  const days = dataNew.getDate() < 10 ? `0${dataNew.getDate()}` : `${dataNew.getDate()}`;

  return `${dataNew.getFullYear()}-${month}-${days}`
}

module.exports.getTasks = function (req, res) {
  let tasks = [...tasksData];

  if (req.query.filterParam === 'filterCompleted') {
    tasks = tasks.filter(item => item.isComplete);

  } else if(req.query.filterParam === 'filterUncompleted'){
    tasks = tasks.filter(item => !item.isComplete)
  } else if(req.query.filterParam === 'filterOverdue'){
    const date = formatDate();      
    tasks = tasks.filter(item => item.date < date)
  } else if(req.query.filterParam === 'filterUpcoming'){
    const date = formatDate();      
    tasks = tasks.filter(item => item.date >= date)
  }

  return res.status(200).json({
    pages: Math.ceil(tasks.length / req.query.count),
    tasks: tasks.splice((req.query.from - 1) * req.query.count, req.query.count)
  });
};

module.exports.addTasks = function (req, res) {
  req.body.id = getNewId();
  tasksData.push(req.body);
  res.status(200).json(req.body.id)
};

module.exports.editTask = function (req, res) {
  tasksData.splice([tasksData.findIndex(item => item.id === req.body.id)], 1, req.body);
  res.status(200).json({ message: true });
};

module.exports.deleteTask = function (req, res) {
  tasksData.splice([tasksData.findIndex(item => item.id === req.query.id)], 1);
  res.status(200).json({ message: true });
};

module.exports.changeTaskStatus = function (req, res) {
  let task = tasksData.find(item => item.id === req.body.id);
  task.isComplete = !task.isComplete;
  res.status(200).json({ message: true });
};
