import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="hello"/>
        <TodoItem text="text"/>
        <TodoItem text="This is nara!"/>
      </div>
    );
  }
}

export default TodoItemList;
