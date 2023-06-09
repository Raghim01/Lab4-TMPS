import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from 'auth/dto/auth-credentials.dto';
import { AuthService } from 'auth/services/auth.service';
import { SignUpCommand } from 'auth/services/sing.up.command';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    // return this.authService.signUp(authCredentialsDto);
    const command = new SignUpCommand(this.authService, authCredentialsDto);
    return await command.execute();
  }

  @Post('/signin')
  async signIn(
    @Body('mail') mail: string,
    @Body('password') password: string,
  ): Promise<{ accessToken }> {
    return await this.authService.signIn(mail, password);
  }
}
