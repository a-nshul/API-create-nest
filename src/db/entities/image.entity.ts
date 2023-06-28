import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class image {
  static path(id: any, path: any) {
      throw new Error('Method not implemented.');
  }
  static Id(Id: any, image: image): any {
      throw new Error('Method not implemented.');
  }
  public constructor(init?: Partial<image>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  

  @Column({nullable:true})
  Name:string; 

  @Column({nullable:true})
  Image: string;



}




