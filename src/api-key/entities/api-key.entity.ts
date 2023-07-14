import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('apiKey')
export class ApiKeyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  apiKey: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => UserEntity, (user) => user.apiKeys)
  user: UserEntity;
}
