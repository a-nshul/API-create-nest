import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { address } from './address.entity';


@Entity()
export class student {
  static Id(Id: any, student: student): any {
      throw new Error('Method not implemented.');
  }
  public constructor(init?: Partial<student>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  FirstName: string;

  @Column({nullable:true})
  LastName: string;

  @Column({nullable:true})
  DOB:string;

  @Column({nullable:true})
  Email: string;

  @Column({nullable:true})
  RollNo:string;

  @Column({nullable:true})
  Age:number;

  @Column({nullable:true})
  City: string;

  @Column({nullable:true})
  PinCode: string;

  @Column({nullable:true})
  Country: string;


  @Column({nullable:true})
  Mobile: string;

    @Column({nullable:true})
   image:string;

  @ManyToOne(type => address, address => address.CustomerId)
  @JoinColumn({ name: "CustomerId" })
  address: address;



}




