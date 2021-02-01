/*
 * @Description: 
 * @Date: 2020-11-26 10:23:13
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

}

export default User