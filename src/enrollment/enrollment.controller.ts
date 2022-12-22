import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Enrollment } from 'src/schemas/enrollment.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { EnrollmentService } from './enrollment.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('enrollment')
export class EnrollmentController {
  constructor(private enrollmentService: EnrollmentService) { }

  @ApiBody({ type: Enrollment })
  @ApiOperation({ summary: 'Add new Enrollment', operationId: 'AddEnrollment' })
  @ApiResponse({ status: 200, type: Enrollment })
  @Post('/create')
  create(@Body() students: Enrollment) {
    return this.enrollmentService.create(students);
  }

  @ApiOperation({ summary: 'Get all Enrollment', operationId: 'GetEnrollments' })
  @ApiResponse({ status: 200, type: [Enrollment] })
  @Get('/all')
  async findAll() {
    return this.enrollmentService.findAll();
  }

  @ApiOperation({ summary: 'Get Enrollment by id', operationId: 'GetEnrollment' })
  @ApiResponse({ status: 200, type: Enrollment })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.enrollmentService.findById(id);
  }

  @ApiOperation({ summary: 'Update Enrollment by id', operationId: 'UpdateEnrollment' })
  @ApiResponse({ status: 200, type: Enrollment })
  @Put('/update')
  async update(@Query('id') id: string, @Body() student: Enrollment) {
    return await this.enrollmentService.update(id, student);
  }

  @ApiOperation({ summary: 'Delete Enrollment by id', operationId: 'DeleteEnrollment' })
  @ApiResponse({ status: 200, type: Enrollment })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.enrollmentService.delete(id);
  }

  @ApiOperation({ summary: 'Delete All Enrollment', operationId: 'deleteAllEnrollments' })
  @ApiResponse({ status: 200, type: Enrollment })
  @Delete('/deleteAll')
  async deleteAll() {
    return await this.enrollmentService.deleteAll();
  }
}
