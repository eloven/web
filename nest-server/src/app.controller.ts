import {
  Body,
  Controller,
  Param,
  Query,
  Get,
  Headers,
  Post,
  Put,
  Delete, Res, HttpStatus, UseInterceptors, UploadedFiles, UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import json5 = require('json5');
import { Response } from 'express';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { IUploadFile } from './config/IUploadFile';
import { saveFile, saveFiles } from './shared/utils/save';

@Controller('root')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addData(@Body() body: any, @Res() response: Response) {
    const time = new Date().toLocaleDateString();
    const res = {
      date: time,
      update: body
    };
    response.status(HttpStatus.OK).json(res);
  }

  @Get()
  findAll(@Query() query: any, @Headers() header: any, @Headers('cookie') cookie: any, @Res() response: Response) {
    response.status(HttpStatus.OK)
      .cookie('user', 'admin888', {domain: '.material.com', path: '/', secure: true})
      .json(header);
  }

  @Get(':id')
  findById(@Param('id') id: string, @Headers() header: any, @Res() response: Response) {
    const res = {
      msg: `查找到id为${id}`,
      header: json5.stringify(header)
    };
    response.status(HttpStatus.OK).json(res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return JSON.stringify({
      Id: id,
      Data: json5.stringify(body)
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id}`;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: IUploadFile) {
    saveFile(file);
    return 'UploadedFile: ';
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  uploadBigFiles(@UploadedFiles() fileList) {
    return 'UploadedFiles: ';
  }

  @Post('uploadFiles')
  @UseInterceptors(FileFieldsInterceptor([
    {name: 'avatar', maxCount: 5},
    {name: 'background', maxCount: 5}
  ]))
  uploadFiles(@UploadedFiles() fileList) {
    saveFiles(fileList.avatar);
    saveFiles(fileList.background);
    return 'UploadedFiles: ';
  }
}
