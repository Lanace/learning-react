import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

import './App.css';

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      {id: 0, text: '리엑트 한다111', checked: false},
      {id: 1, text: '리엑트 한다22', checked: false},
      {id: 2, text: '리엑트 한다3', checked: false}
    ]
  }

  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;
