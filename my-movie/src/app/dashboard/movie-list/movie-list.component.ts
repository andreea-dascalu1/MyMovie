import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.get_movies();
  }

  movies: Movie[]=[];

    get_movies(){
        this.httpClient.get('http://localhost:3000/movies').subscribe((res : any)=>{
        console.log(res);
        this.movies = res;
        });
    }

    goToMovies(){
      this.router.navigateByUrl("/movie-list");
    }

    goToAccount(){
      this.router.navigateByUrl("");
    }

    goToLogIn(){
      this.router.navigateByUrl("");
    }

  



}
