import {Inject, Controller, Get, Provide, Query, Post, Validate, Body, ALL} from '@midwayjs/decorator';
import {Context} from '@midwayjs/koa';
import { UserService } from '../../service/user';
import {UserDTO} from '../../dto/user';

@Provide()
@Controller('/user')
export class UserController {
    @Inject()
    ctx: Context;

    @Inject()
    userService: UserService;


    // @Get 、 @Post 、 @Put() 、 @Del() 、 @Patch() 、 @Options() 、 @Head()  和  @All() ，表示各自的  HTTP 请求方法
    @Get('/list')
    async list() {  // uid = 1
        // async home(@Query() id) {
        // this.ctx.query.id === id

        return {
            data: [],
            code: 0,
            message: ''
        }
    }

    @Get('/')
    async getUser(@Query('id') uid) {
        const user = await this.userService.getUser(uid);
        return { success: true, message: 'OK', data: user };
    }

    // @Get('/api/user/:uid')
    // async findUser(@Param() uid: string): Promise<User> {
    //     // uid 从路由参数中获取
    // }
    @Get('/post')
    async post(@Query(ALL) queryObject: object) {
        // this.ctx.query.id === id
        return {
            ip: queryObject,
            path: '/post'
        }
    }

    @Post('/')
    @Validate()
    async updateUser(@Body(ALL) user: UserDTO) {
        // user.id
    }
}
