import * as fs from 'fs';
import { Post } from './Post';
import { IPostsService } from './IPostsService';
import { IExportPostService } from './IExportPostService';
export class PostService implements IPostsService {
  private _fileName: string = "post.json";
  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._fileName, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }
  save(post: Post): Promise<void> {
    throw new Error("Method not implemented.");
  }
  export(service: IExportPostService): Promise<string> {
    return this.getAll().then(posts => service.export(posts));
  }
}
