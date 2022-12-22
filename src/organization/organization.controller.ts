import { Body, Controller, Get, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Organization } from 'src/schemas/organization.schema';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
import { OrganizationService } from './organization.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) { }

  @ApiBody({ type: Organization })
  @ApiOperation({ summary: 'Add new Organization', operationId: 'AddOrganization' })
  @ApiResponse({ status: 200, type: Organization })
  @Post('/create')
  create(@Body() students: Organization) {
    return this.organizationService.create(students);
  }

  @ApiOperation({ summary: 'Get all Organizations', operationId: 'GetOrganizations' })
  @ApiResponse({ status: 200, type: [Organization] })
  @Get('/all')
  async findAll() {
    return this.organizationService.findAll();
  }

  @ApiOperation({ summary: 'Get Organization by id', operationId: 'GetOrganization' })
  @ApiResponse({ status: 200, type: Organization })
  @Get('id')
  async findById(@Query('id') id: string) {
    return await this.organizationService.findById(id);
  }

  @ApiOperation({ summary: 'Update Organization by id', operationId: 'UpdateOrganization' })
  @ApiResponse({ status: 200, type: Organization })
  @Put('/update')
  async update(@Query('id') id: string, @Body() student: Organization) {
    return await this.organizationService.update(id, student);
  }

  @ApiOperation({ summary: 'Delete Organization by id', operationId: 'DeleteOrganization' })
  @ApiResponse({ status: 200, type: Organization })
  @Delete('/delete')
  async delete(@Query('id') id: string) {
    return await this.organizationService.delete(id);
  }

  @ApiOperation({ summary: 'Delete All Organization', operationId: 'deleteAllOrganizations' })
  @ApiResponse({ status: 200, type: Organization })
  @Delete('/deleteAll')
  async deleteAll() {
    return await this.organizationService.deleteAll();
  }
}
