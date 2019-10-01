import { Post } from './Post';
import { IExportPostService } from "./IExportPostService";
export interface IPostsService {
  getAll(): Promise<Post[]>;
  save(post: Post): Promise<void>;
  export(service: IExportPostService): Promise<string>;
}
