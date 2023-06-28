import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from 'src/db/entities/student.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { StudentReqDto } from './student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(student)
        private StudentRepository: Repository<student>,
        private dataSource: DataSource
    ) { }
    async findAll(): Promise<student[]> {
        return await this.StudentRepository.find();
    }

    async create(student: StudentReqDto): Promise<student> {
        const studentData = await this.StudentRepository.save(student)
        return studentData
    }
    async findStudentById(id) : Promise<student> {
        try{
            const findStudent = await this.StudentRepository.findOne({where: { Id: id }, }) as student;
          
            console.log(findStudent, "8",id)
            return findStudent;
        }
        
        catch(err){
           
            throw err
        }
    }
        async update(student: student): Promise<UpdateResult> {
            return await this.StudentRepository.update(student.Id, student);
        }
        async delete(id): Promise<DeleteResult> {
            return await this.StudentRepository.delete(id);
        }
}
