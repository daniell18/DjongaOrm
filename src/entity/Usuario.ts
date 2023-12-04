import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column()
    idade:number

}
