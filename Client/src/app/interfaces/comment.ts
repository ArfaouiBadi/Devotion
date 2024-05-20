import { Post } from './post';
import { User } from './user';

export interface Comment {
  commentId?: number;
  text: string;
  createdDate?: Date;
  post?: Post;
  user?: User;
}
