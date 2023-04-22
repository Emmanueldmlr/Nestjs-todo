import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
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
}
