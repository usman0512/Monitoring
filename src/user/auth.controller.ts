import { JwtRefreshGuard } from './jwt.refresh.guard';
import { IValidate } from 'src/interfaces/validateUser.interface';
import { UserService } from './user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import {
  LoginUserDto,
  RefreshDto,
  AccessTokenDto,
} from './user.dto';
import { User } from 'src/schemas/user.schema';
import { ValidateUser } from 'src/schemas/validateUser.schema';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @ApiBody({ type: User })
  @ApiOperation({ summary: 'Register User', operationId: 'register' })
  @ApiResponse({ status: 200, type: User })
  @Post('/register')
  create(@Body() user: User) {
    if (user.refreshToken == "LNAC") {
      return this.authService.register({
        ...user, refreshToken: undefined
      });
    }
  }

  @ApiOperation({
    summary: 'Login User',
    operationId: 'login',
  })
  @ApiParam({
    name: 'user',
    type: LoginUserDto,
  })
  @UseGuards(LocalAuthGuard)
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @Post('login')
  async login(@Request() req) {
    const { refreshToken, accessToken, userId } = await this.authService.login(
      req.user,
    );
    await this.userService.setCurrentRefreshToken(refreshToken, userId);
    return { refreshToken, accessToken };
  }

  @ApiOperation({
    summary: 'Refresh Token',
    operationId: 'refreshToken',
  })
  @ApiBody({
    type: RefreshDto,
  })
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @ApiBearerAuth()
  @Post('refresh_token')
  async refreshToken(@Request() req) {
    const accessToken = this.authService.getAccessToken(req.user);
    return { accessToken };
  }

  @ApiOperation({
    summary: 'logout given user',
    operationId: 'logout',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logOut(@Request() req) {
    await this.authService.removeRefreshToken(req.user.userId);
  }

  @ApiOperation({
    summary: 'get profile info',
    operationId: 'getProfile',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findById(req.user.userId);
    return {
      ...user,
      id: undefined,
      password: undefined,
      refreshToken: undefined,
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'validate user',
    operationId: 'validateUser',
  })
  @ApiParam({
    name: 'password',
    required: true, type: 'string'
  })
  @ApiParam({
    name: 'username',
    required: true, type: 'string'
  })
  @Get([':username,:password'])
  async validateUser(@Param() params: IValidate) {
    const user = await this.authService.validateUser(params.username, params.password);
    if (user) {
    return true
    }
    return false
  }
}
