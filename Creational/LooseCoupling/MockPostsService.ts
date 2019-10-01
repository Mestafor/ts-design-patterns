import { IExportPostService } from "./IExportPostService";
import { Post } from './Post';
import { IPostsService } from './IPostsService';
export class MockPostsService implements IPostsService {
  posts: Post[] = [];
  constructor() {
    this.posts = [
      { "id": 1, "title": "Test 1", "body": "Test 1", "postedBy": "ggilardone0" },
      { "id": 2, "title": "Test 2", "body": "Test 2", "postedBy": "jjakucewicz1" },
      { "id": 3, "title": "Test 3", "body": "Test 3", "postedBy": "rsynke2" },
    ];
  }
  getAll(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  save(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }

  export(service: IExportPostService): Promise<string> {
    return this.getAll().then(posts => service.export(posts));
  }
}
