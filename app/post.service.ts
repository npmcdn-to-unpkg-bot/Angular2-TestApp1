import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
    getPosts(){
        return Promise.resolve(POSTS);
    }
}