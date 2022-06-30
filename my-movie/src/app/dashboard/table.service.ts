import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableList:Movie[]=[
    {title: "Titanic",director: "James Cameron", year: 1997,duration: "3h 14m",rating: 7.9},
    {title: "Avengers Endgame",director: "Anthony Russo", year: 2019,duration: "3h 1m",rating: 8.4},
    {title: "Harry Potter and the Sorcerer's Stone",director: "Chris Columbus", year: 2001,duration: "2h 32m",rating: 7.6},
  ];

  constructor() { }

  getTableList ():Movie[]{
    return this.tableList;
  }
  setTableList (tableList:Movie[]){
    this.tableList=tableList;
  }

  public add(movie:Movie){
    this.tableList.push(movie);
    return this.tableList;
  }

  private movieCompareTitle(movie1:Movie,movie2:Movie){
    return movie1.title.localeCompare(movie2.title);
  }

  private movieCompareDirector(movie1:Movie,movie2:Movie){
    return movie1.director.localeCompare(movie2.director);
  }

  private movieCompareYear(movie1:Movie,movie2:Movie){
    return movie1.year-movie2.year;
  }

  private movieCompareDuration(movie1:Movie,movie2:Movie){
    return movie1.duration.localeCompare(movie2.duration,undefined,{numeric:true});
  }

  private movieCompareRating(movie1:Movie,movie2:Movie){
    return movie1.rating-movie2.rating;
  }

  public sortByTitle(){
    //this.tableList.sort((dog1,dog2)=>dog1.price-dog2.price);
    this.tableList.sort(this.movieCompareTitle);
  }

  public sortByDirector(){
    this.tableList.sort(this.movieCompareDirector);
  }

  public sortByYear(){
    this.tableList.sort(this.movieCompareYear);
  }

  public sortByDuration(){
    this.tableList.sort(this.movieCompareDuration);
  }

  public sortByRating(){
    this.tableList.sort(this.movieCompareRating);
  }

  public deleteData(i:number)
  {
    this.tableList.splice(i,1);
  }



  public searchMovie(name:string){
    return this.tableList.filter(movie=>movie.title?.includes(name));
  }

}
