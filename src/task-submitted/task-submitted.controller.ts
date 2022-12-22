import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TaskSubmitted } from 'src/schemas/task-submitted.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { TaskSubmittedService } from './task-submitted.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('taskSubmitted')
export class TaskSubmittedController {
  constructor(private taskSubmittedService: TaskSubmittedService) { }

  @ApiBody({ type: TaskSubmitted })
  @ApiOperation({ summary: 'Add new Task Submitted', operationId: 'AddTaskSubmitted' })
  @ApiResponse({ status: 200, type: TaskSubmitted })
  @Post('/create')
  create(@Body() task: TaskSubmitted) {
    return this.taskSubmittedService.create(task);
  }

  @ApiOperation({ summary: 'Get all Tasks Submitted', operationId: 'GetTasksSubmitted' })
  @ApiResponse({ status: 200, type: [TaskSubmitted] })
  @Get('/all')
  async findAll() {
    return this.taskSubmittedService.findAll();
  }

  @ApiOperation({ summary: 'Get Task Submitted by id', operationId: 'GetTaskSubmitted' })
  @ApiResponse({ status: 200, type: TaskSubmitted })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.taskSubmittedService.findById(id);
  }

  @ApiOperation({ summary: 'Update Task Submitted by id', operationId: 'UpdateTaskSubmitted' })
  @ApiResponse({ status: 200, type: TaskSubmitted })
  @Put('/update')
  async update(@Query('id') id: string, @Body() task: TaskSubmitted) {
    return await this.taskSubmittedService.update(id, task);
  }

  @ApiOperation({ summary: 'Delete Task Submitted by id', operationId: 'DeleteTaskSubmitted' })
  @ApiResponse({ status: 200, type: TaskSubmitted })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.taskSubmittedService.delete(id);
  }

  @ApiOperation({ summary: 'Delete All Submitted Task', operationId: 'deleteAllTasks' })
  @ApiResponse({ status: 200, type: TaskSubmitted })
  @Delete('/deleteAll')
  async deleteAll() {
    return await this.taskSubmittedService.deleteAll();
  }
}
