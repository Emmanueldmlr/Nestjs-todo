import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService {
    private todos: TodoDto[] = []
    
    addToDo(todo: TodoDto) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }

    getTodoById(id: number) {
        return this.todos.find(todo => todo.id === id);
    }

    updateTodoById(id: number, todo: TodoDto) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos[index] = todo;
    }

    deleteTodoById(id: number) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index, 1);
    }
}
