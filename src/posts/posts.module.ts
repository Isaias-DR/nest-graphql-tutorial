import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from './post.entity';
import { AuthorsModule } from 'src/authors/authors.module';

// Esport es para que otras clases la utilicen
@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
  providers: [PostsService, PostsResolver]
})
export class PostsModule { }
