// src/app/post-section/post-section.component.ts
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section-main.component.html',
  styleUrls: ['./post-section-main.component.css'],
})
export class PostSectionMainComponent implements OnInit {
  posts: Post[] = [];
  newPostContent: string = '';
  newCommentContent: string = '';
  editCommentContent: Comment = {
    commentId: null || undefined,
    text: '',
    createdDate: null || undefined,
    post: null || undefined,
    user: null || undefined,
  };

  constructor(private postService: PostService) {}
  currentUser = JSON.parse(localStorage.getItem('user')!);
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost(): void {
    const newPost: Post = {
      postId: null || undefined, // Assuming postId is auto-generated by the backend
      postName: this.newPostContent,
      url: '',
      description: '',
      voteCount: 0,
      user: JSON.parse(localStorage.getItem('user')!), // Adjust this if user information is required
      createdDate: new Date(),
      comments: [],
    };
    this.postService.createPost(newPost).subscribe(() => {
      this.loadPosts();
      this.newPostContent = '';
    });
  }

  deletePost(postId: number): void {
    this.postService.deletePost(postId).subscribe(() => {
      this.loadPosts();
    });
  }

  addComment(postId: number): void {
    const newComment: Comment = {
      commentId: null || undefined, // Assuming commentId is auto-generated by the backend
      text: this.newCommentContent,
      createdDate: new Date(),
      post: { postId: postId } as Post, // Create a minimal Post object with only the postId
      user: JSON.parse(localStorage.getItem('user')!), // Adjust this if user information is required
    };
    this.postService.addComment(postId, newComment).subscribe(() => {
      this.loadPosts();
      this.newCommentContent = '';
    });
  }

  deleteComment(commentId: number): void {
    this.postService.deleteComment(commentId).subscribe(() => {
      this.loadPosts();
    });
  }

  editComment(comment: Comment): void {
    this.editCommentContent = { ...comment };
  }

  updateComment(commentId: number): void {
    this.postService
      .updateComment(commentId, this.editCommentContent)
      .subscribe(() => {
        this.loadPosts();
        this.cancelEditComment();
      });
  }

  cancelEditComment(): void {
    this.editCommentContent = {
      commentId: null || undefined,
      text: '',
      createdDate: null || undefined,
      post: null || undefined,
      user: JSON.parse(localStorage.getItem('user')!),
    };
  }
}
