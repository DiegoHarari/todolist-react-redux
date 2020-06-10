import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "./store";
import Home from "./components/home/";

class App extends React.Component {
  state = {
    todo: "",
    id: 1,
  };

  handleChange(e) {
    const todo = e.target.value;
    this.setState({
      todo: todo,
    });
  }

  handleClick() {
    const { dispatch } = this.props;
    const { id, todo } = this.state;
    this.setState({ id: id + 1 });
    dispatch(addToDo(todo, id));
  }

  render() {
    return (
      <div className='main-container'>
        <div className='second-container'>
          <h1 className='title'>
            Add <span className='span-title'>Task</span>
          </h1>
          <input
            className='input'
            type='text'
            placeholder='add your task'
            onChange={(e) => this.handleChange(e)}
          />
          <button className='btn-submit' onClick={() => this.handleClick()}>
            Submit
          </button>
        </div>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(App);
