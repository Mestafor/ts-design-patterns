import { PostService } from './PostService';
import { JsonExportSerice } from './JsonExportSerice';
import { MockPostsService } from './MockPostsService';
// import { NewsFeed } from './NewsFeed';

const postService = new PostService();
postService.export(new JsonExportSerice()).then(console.log);

const mockService = new MockPostsService();
mockService.export(new JsonExportSerice()).then(console.log);