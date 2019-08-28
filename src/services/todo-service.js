import axios from 'axios';

class TodoService {
  constructor () {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    });
  }

  toDo() {
    return this.todo.get('/todos')
      .then(({ data }) => data);
  }
}

const todoService = new TodoService();
export default todoService;