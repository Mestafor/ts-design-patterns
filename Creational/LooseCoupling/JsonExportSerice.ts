import { Post } from './Post';
import { IExportPostService } from './IExportPostService';
export class JsonExportSerice implements IExportPostService {
  export(posts: Post[]): string {
    return JSON.stringify(posts);
  }
}
