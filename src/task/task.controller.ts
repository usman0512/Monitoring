import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Task } from 'src/schemas/task.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { TaskService } from './task.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TaskController {
  constructor(private organizationService: TaskService) { }

  @ApiBody({ type: Task })
  @ApiOperation({ summary: 'Add new Task', operationId: 'AddTask' })
  @ApiResponse({ status: 200, type: Task })
  @Post('/create')
  create(@Body() task: Task) {
    return this.organizationService.create(task);
  }

  @ApiOperation({ summary: 'Get all Tasks', operationId: 'GetTasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get('/all')
  async findAll() {
    return this.organizationService.findAll();
  }

  @ApiOperation({ summary: 'Get Task by id', operationId: 'GetTask' })
  @ApiResponse({ status: 200, type: Task })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.organizationService.findById(id);
  }

  @ApiOperation({ summary: 'Update Task by id', operationId: 'UpdateTask' })
  @ApiResponse({ status: 200, type: Task })
  @Put('/update')
  async update(@Query('id') id: string, @Body() task: Task) {
    return await this.organizationService.update(id, task);
  }

  @ApiOperation({ summary: 'Delete Task by id', operationId: 'DeleteTask' })
  @ApiResponse({ status: 200, type: Task })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.organizationService.delete(id);
  }

  @ApiOperation({ summary: 'Delete All Task', operationId: 'deleteAllTasks' })
  @ApiResponse({ status: 200, type: Task })
  @Delete('/deleteAll')
  async deleteAll() {
    return await this.organizationService.deleteAll();
  }
}
