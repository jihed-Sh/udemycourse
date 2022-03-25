import { Injectable } from "@angular/core";
import { Post } from "./post.model";


@Injectable ({providedIn : 'root'})
export class PostService{
    listOfPost: Post[] = [
        new Post(
          'Fight Club',
          'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.',
          'https://s26162.pcdn.co/wp-content/uploads/2019/07/fightclub_1.jpg',
          'Dir.David Fincher',
          new Date()
        ),
        new Post(
          'Shawshank redemption',
          'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
          'https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg',
          'Dir. Frank Darabont',
          new Date()
        ),
        new Post(
          'Lion',
          'Saroo gets separated from his family at the age of five and ends up being adopted by an Australian couple. However, 25 years later, he returns to India to search for his birth parents.',
          'https://cdn.tuftsdaily.com/2018/04/Lion.jpg',
          'Dir.Garth Davis',
          new Date()
        ),
      ];



addPost(post:Post){
    this.listOfPost.push(post);

}


getPost(){
    return this.listOfPost;
}



deletePost(index: number){
    this.listOfPost.splice(index,1);
}


updatePost(index:number,post:Post){
    this.listOfPost[index]=post;
}
}