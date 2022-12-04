import { Mutation, Query, Resolver, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver((of) => Post)// Este resolver es de tipo Post
export class PostsResolver {

  // Para consultar desde el cliente lo que se quiere de backend
  // Es decir consultas

  // Las mutaciones para cuando quiera enviar, actualizar o eliminar algo
  constructor(private postService: PostsService) { }

  // Estos metodos retornan al cliente
  @Query((returns) => [Post]) // viene de @nestjs/graphql // () loo que va a dentro es lo que retorna
  posts() {

    return this.postService.findAll()
  }

  @Query((returns) => Post)
  post(@Args('id', { type: () => Int }) id: number) {

    return this.postService.findProductById(id);
  }

  @ResolveField((returns) => Author)
  author(@Parent() post: Post): Promise<Author> {

    return this.postService.getAuthor(post.authorId)
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {

    return this.postService.createPost(postInput);
  }
}
