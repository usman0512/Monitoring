import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Coordinator } from 'src/schemas/coordinator.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { CoordinatorService } from './coordinators.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('coordinators')
export class CoordinatorController {
  constructor(private coordinatorService: CoordinatorService) { }

  @ApiBody({ type: Coordinator })
  @ApiOperation({ summary: 'Add new Coordinator', operationId: 'AddCoordinator' })
  @ApiResponse({ status: 200, type: Coordinator })
  @Post('/create')
  Add(@Body() coordinator: Coordinator) {
    return this.coordinatorService.create(coordinator);
  }

  @ApiOperation({ summary: 'Get all Coordinators', operationId: 'GetCoordinators' })
  @ApiResponse({ status: 200, type: [Coordinator] })
  @Get('/all')
  async findAll() {
    return this.coordinatorService.findAll();
  }

  @ApiOperation({ summary: 'Get Coordinator by id', operationId: 'GetCoordinator' })
  @ApiResponse({ status: 200, type: Coordinator })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.coordinatorService.findById(id);
  }

  @ApiOperation({ summary: 'Update Coordinator by id', operationId: 'UpdateCoordinator' })
  @ApiResponse({ status: 200, type: Coordinator })
  @Put('/update')
  async update(@Query('id') id: string, @Body() coordinator: Coordinator) {
    return await this.coordinatorService.update(id, coordinator);
  }

  @ApiOperation({ summary: 'Delete Coordinator by id', operationId: 'DeleteCoordinator' })
  @ApiResponse({ status: 200, type: Coordinator })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.coordinatorService.delete(id);
  }

  @ApiOperation({ summary: 'Delete All Coordinators', operationId: 'deleteAllCoordinators' })
  @ApiResponse({ status: 200, type: Coordinator })
  @Delete('/deleteAll')
  async deleteAll() {
    return await this.coordinatorService.deleteAll();
  }
}
