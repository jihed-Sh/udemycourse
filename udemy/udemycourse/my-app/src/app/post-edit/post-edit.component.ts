import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;

  constructor(private postService:PostService, private router :Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
//Ready with the Object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'ho',
      new Date()
    );
    //Adding the Post to the post-list
    this.postService.addPost(post);
    //Navigate to the post-list
    this.router.navigate(["/post-list"])
  }
}
