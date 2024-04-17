import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  firebase_uid: string;

  @Column({ type: 'timestamptz', nullable: true })
  last_login: Date;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
  })
  deleted_at: Date;
}
