// entidad

// sirve para decirle como GQL
// generar tabla en la base de datos
// que datos se pueden consultar
// validar datos
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Author } from "src/authors/entities/author.entity";
// Field indica que tipo sera para GQL
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";

@Entity()
@ObjectType() // Decorador
export class Post {

  @PrimaryGeneratedColumn()
  @Field((type) => Int) // GQL
  id: number // TS

  @Column()
  @Field()
  title: string

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string
  
  @Column()
  @Field(() => Int)
  authorId: number

  @ManyToOne(() => Author, (author) => author.posts)
  @Field(() => Author)
  author: Author
}