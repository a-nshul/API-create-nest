import { ApiProperty } from '@nestjs/swagger';
export class AddressReqDto {


    public constructor(init?: Partial<AddressReqDto>) {
        Object.assign(this, init);
    }

    @ApiProperty()
    Id: number;

    @ApiProperty()
    CustomerId: number;

    @ApiProperty()
    AddressLine1: string;

    @ApiProperty()
    AddressLine2: string;
    @ApiProperty()
    City: string;
    @ApiProperty()
    PinCode: string;
    @ApiProperty()
    Country: string;
    @ApiProperty()
    Mobile: string;
}


export class SignUpResDto {

    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


