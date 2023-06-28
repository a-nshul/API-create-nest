import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { student } from 'src/db/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[ TypeOrmModule.forFeature([student])],
  exports:[StudentService],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
