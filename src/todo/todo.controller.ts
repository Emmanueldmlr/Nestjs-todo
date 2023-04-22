import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Get(':id')
    getTodoById(@Param('id')id: number) {
        return this.todoService.getTodoById(id);
    }

    @Patch(':id')
    updateTodoById(@Param('id')id: number, @Body()todo: TodoDto) {
        return this.todoService.updateTodoById(id, todo);
    }

    @Delete(':id')
    deleteTodoById(@Param('id')id: number) {
        return this.todoService.deleteTodoById(id);
    }

    @Post()
    addToDo(@Body()todo: TodoDto) {
        return this.todoService.addToDo(todo);
    }
}
