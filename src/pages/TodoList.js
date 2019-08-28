import React, { Component } from 'react'
import todoService from '../services/todo-service'

class TodoList extends Component {
  state = {
    data:[],
  }

  componentDidMount() {
    todoService.toDo()
    .then( data => {
      console.log('тут', data)
      this.setState({
        data,
      })
    })

  }
  render() {
    const {data} = this.state
    return (
      <div>
        <h1>Тута</h1>
        { data.length > 0 ? data.map((toDo, index) => {
          console.log('2',data)
          return <p key={index}>{toDo.title}</p>
        }) : null
        }
        
      </div>
    )
  }
}

export default TodoList;
