import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      taskList: [],
      activeItem: {
        title: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("api/tasks/")
      .then((res) => this.setState({ taskList: res.data }))
      .catch((err) => console.log(err));
  };

  // 1 SUCCESS
  displayCompleted = (status) => {
    if (status) return this.setState({ viewCompleted: true });
    return this.setState({ viewCompleted: false });
  };

  // 2 SUCCESS
  renderTabList = () => {
    return (
      <div className="tab-list m-3 text-center">
        <span
          className={this.state.viewCompleted ? "active" : ""}
          onClick={() => this.displayCompleted(true)}
        >
          Completed
        </span>
        <span
          className={this.state.viewCompleted ? "" : "active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incompleted
        </span>
      </div>
    );
  };

  // 3 SUCCESS
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      (item) => item.completed === viewCompleted
    );
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.title}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-info mx-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  // 4 SUCCESS
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = (item) => {
    this.toggle();
    // Check if it is edit item or create item
    console.log(item.id);
    if (item.id) {
      axios
        .put(`api/tasks/${item.id}/`, item)
        .then((res) => this.refreshList());
    } else {
      axios.post("api/tasks/", item).then((res) => this.refreshList());
    }
  };
  handleDelete = (item) => {
    axios.delete(`api/tasks/${item.id}`).then((res) => this.refreshList());
  };
  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // 5 SUCCESS
  createItem = () => {
    const item = { title: "", completed: false, modal: !this.state.modal };
    this.setState({
      activeItem: item,
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <main className="content p-3 bg-info">
        <h1 className="text-center my-4 text-light">TASK MANAGER</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <button className="btn btn-success m-3" onClick={this.createItem}>
                Add Task
              </button>
              {this.renderTabList()}
              <ul className="list-group list-group-flush"></ul>
              {this.renderItems()}
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
