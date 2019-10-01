import { IPostsService } from './IPostsService';
import { Post } from './Post';
export class NewsFeed {
  constructor(private _service: IPostsService) {
  }
  show() {
    this._service.getAll()
      .then((posts: Post[]) => {
        posts.forEach((post: Post) => {
          console.log(`${post.title} - ${post.body}`);
          console.log(`Author - ${post.postedBy} \n`);
        });
      });
  }
}
