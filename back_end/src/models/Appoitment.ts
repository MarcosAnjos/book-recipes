import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appoitments')
class Appoitment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appoitment;
