let app = new Vue({
  el: "#app",
  data: {
    newTask: "",
    checked: false,
    tasks: [
      {
        text: "Learn js",
        isCompleted: false,
      },
      {
        text: "Learn Vue.js",
        isCompleted: false,
      },
      {
        text: "To do the task",
        isCompleted: false,
      },
      {
        text: "Find a job",
        isCompleted: false,
      },
    ],
  },
  methods: {
    addTask: function () {
        if (this.newTask !== '') {
      this.tasks.push({
        text: this.newTask,
        isCompleted: false,
      });
      this.newTask = "";
    }
    },
    removeTask: function (taskText) {
      this.tasks = this.tasks.filter((task) => {
        return task.text !== taskText;
      });
    },
    removeTasks: function() {
        this.tasks = this.tasks.filter((task) => {
            return task !== task;
          });
    }
  },
});
