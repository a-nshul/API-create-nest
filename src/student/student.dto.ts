import { ApiProperty } from '@nestjs/swagger';
export class StudentReqDto {


    public constructor(init?: Partial<StudentReqDto>) {
        Object.assign(this, init);
    }

    @ApiProperty()
    Id: number;

    @ApiProperty()
    FirstName: string;

    @ApiProperty()
    LastName: string;

    @ApiProperty()
    DOB:string;

    @ApiProperty()
    Email: string;

    @ApiProperty()
    RollNo:string;

    @ApiProperty()
    Age:number;

    @ApiProperty()
    City: string;

    @ApiProperty()
    PinCode:string;

    @ApiProperty()
    Country: string;

    @ApiProperty()
    Mobile: string;
    @ApiProperty({
     description: 'Attachments',
         type: 'array',
         items: {
           type: 'file',
         },
     })
    image:any;
}


export class SignUpResDto {

    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


