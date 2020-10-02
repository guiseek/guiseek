import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { TodosService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todosService: TodosService
  ) {}

  @Get('api')
  getData() {
    return this.todosService.getTodos();
  }

  @Get()
  @Render('index')
  root() {
    return {
      todos: this.getData(),
    };
  }

  @Get('name')
  @Render('name')
  name() {
    return {
      name: this.appService.getName()
    };
  }
}
