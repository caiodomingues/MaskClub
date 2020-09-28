import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ObjectIdColumn,
} from "typeorm";

import Users from "./Users";

@Entity("events")
class Events {
  @ObjectIdColumn({ name: "id" })
  _id!: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "event_creator_id" })
  event_creator: Users;

  @Column()
  event_creator_id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  fileName: string;

  @Column()
  filePath: string;

  @Column()
  likes: number;

  @Column()
  dislikes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Events;
