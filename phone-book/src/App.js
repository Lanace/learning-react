import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './App.css';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '사람1',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '사람2',
        phone: '010-1234-5678'
      }
    ]
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    })
  }

  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={information}></PhoneInfoList>
      </div>
    );
  }
}

export default App;
