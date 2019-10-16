import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "Find a job as a front-end developer",
        date: "2019-12-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Do a good deed",
        date: "2020-01-03",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "To buy a flat",
        date: "2020-12-30",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "I will run a marathon",
        date: "2020-09-20",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Get married with K.M.",
        date: "2020-11-12",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "Dubaj",
        date: "2019-11-18",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "Hairdresser!!!",
        date: "2019-10-20",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: "Learn Angular",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: "Learn a new programming language, e.g. Java",
        date: "2020-05-11",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
