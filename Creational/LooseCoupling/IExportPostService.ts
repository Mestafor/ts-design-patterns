import { Post } from './Post';
export interface IExportPostService {
  export(post: Post[]): string;
}
