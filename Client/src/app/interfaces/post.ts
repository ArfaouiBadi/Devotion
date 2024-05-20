import { Comment } from './comment';
import { User } from './user';

export interface Post {
  postId?: number;
  postName: string;
  url?: string;
  description: string;
  voteCount?: number;
  user?: User;
  createdDate?: Date;
  comments?: Comment[];
}
