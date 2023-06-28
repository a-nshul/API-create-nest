import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { student } from 'src/db/entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}
    @Get()
      async index(): Promise<student[]> {
       return await this.studentService.findAll();
       
       }
       @Get('/:id')
       async findStudentById(@Param('id') id: number,): Promise<student> {
          return  await this.studentService.findStudentById(id);
        }
        
     @Post()
        async create(@Body() studentData: student): Promise<any> {
          return  await this.studentService.create(studentData);
        }  

        @Post('upload')
        @UseInterceptors(FileInterceptor('file',{
            storage:diskStorage({
                destination:'./uploads',
                filename:(req,file,callback)=>{
                    const uniqueSuffix=
                    Date.now() + '-' + Math.round(Math.random() * 1e9);
              const ext = extname(file.originalname);
              const filename = `${uniqueSuffix}${ext}`;
              callback(null, filename);
                },
            }),
        }),
        )
        uploadFile(@UploadedFile() file: Express.Multer.File,@Body()body) {
          // console.log('file',file);
          // return 'file upload successfully';
          console.log(file);
          console.log(body.FirstName);
          console.log(body.LastName);
          console.log(body.DOB);
          console.log(body.Email);
          console.log(body.RollNo);
          console.log(body.Age);
          console.log(body.City);
          console.log(body.PinCode);
          console.log(body.Country);
          console.log(body.Mobile);
          return 'uploaded file and body successfully';
        }
        
        @Put(':id')
        async update(@Param('id') id, @Body() studentData: student): Promise<any> {
            studentData.Id = Number(id);
            console.log('Update #' + studentData.Id)
            return await this.studentService.update(studentData);
        }  
    
    
        @Delete(':id')
        async delete(@Param('id') id): Promise<any> {
          return await this.studentService.delete(id);
        }  
}
