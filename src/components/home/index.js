import React, { Component } from "react";
import { connect } from "react-redux";
import { removeToDo } from "../../store";

class Home extends Component {
  showTodo() {
    const { todo, dispatch } = this.props;
    const listItems = todo.map((item) => {
      return (
        <li
          className='todo-li'
          onClick={() => dispatch(removeToDo(item.id))}
          key={item.id}
        >
          {item.todo}
        </li>
      );
    });
    return <ul>{listItems}</ul>;
  }
  render() {
    return (
      <React.Fragment>
        <h3 className='sub-title'>Todos</h3>
        {this.showTodo()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todos,
  };
}

export default connect(mapStateToProps)(Home);
