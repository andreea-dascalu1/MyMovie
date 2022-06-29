import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableList:Movie[]=[];

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

  private movieCompare(movie1:Movie,movie2:Movie){
    return movie1.rating-movie2.rating;
  }

  public sortByRating(){
    //this.tableList.sort((dog1,dog2)=>dog1.price-dog2.price);
    this.tableList.sort(this.movieCompare);
  }

  public searchMovie(name:string){
    return this.tableList.filter(movie=>movie.title?.includes(name));
  }

}
