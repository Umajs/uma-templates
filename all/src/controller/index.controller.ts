import * as fs from 'fs';
import * as path from 'path';
import { BaseController, Path, RequestMethod, Around, Service, Result } from '@umajs/core';
import { Query, Param, Body } from '@umajs/arg-decorator';

import TestService from '../service/test.service';
import { AgeCheck } from '../decorator/AgeCheck';
import UserService from '../service/user.service';
import { method } from '../aspect/test.aspect';

export default class Index extends BaseController {
    @Service(TestService)
    testService: TestService

    @Service(UserService)
    userService: UserService;

    @Path('/')
    index() {
        console.log(this.userService.getDefaultUserAge());

        return Result.view('index.html', {
            frameName: this.testService.returnFrameName(),
        });
    }

    @Path('/reg/:name*')
    @Around(method)
    reg(@AgeCheck('age') age: number, @Param('name') name: string) {
        return Result.send(`this is reg router. ${name} ${age}`);
    }

    @Path({
        value: ['/submit', '/yu/:id'],
        method: RequestMethod.POST,
    })
    submit(@Body() body:{username:string, passwords:string}) {
        // this.ctx.request.body
        // this.ctx.request.files
        console.log(body);

        return Result.send('submit success');
    }

    @Path('/test', '/static/test2')
    test() {
        return Result.send('this is static router');
    }

    @Path({
        method: RequestMethod.POST,
    })
    onlyGet() {
        return Result.send('this method only can post');
    }

    @Path('/home/:name')
    params(@Param('name') name: string, @Query('title') title: string) {
        return Result.send(`name=${name}, title=${title}`);
    }

    @Path('/download')
    downFile() {
        return Result.download('/src/controller/template.controller.ts');
    }

    @Path('/stream')
    donwStream() {
        const rs = fs.createReadStream(path.resolve(__dirname, './template.controller.ts'));

        return Result.stream(rs, 'controller.ts');
    }
}
