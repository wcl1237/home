import { Configuration, App } from '@midwayjs/decorator';
import bodyParser from 'koa-bodyparser';

@Configuration()
export class ContainerConfiguration {
  @App()
  app;

  async onReady() {
    this.app.use(bodyParser());
  }
}
