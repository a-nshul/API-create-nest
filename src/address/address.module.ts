import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { address } from 'src/db/entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[ TypeOrmModule.forFeature([address])],
  exports:[AddressService],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
