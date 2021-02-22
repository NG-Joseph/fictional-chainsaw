import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('shoes')
  @Render('index.html')
  getHome(): string {
    return this.appService.getHome();
  }

  @Get()
  @Render('shoes.html')
  getShoePage(): string {
    return this.appService.getShoePage()
  }

}
