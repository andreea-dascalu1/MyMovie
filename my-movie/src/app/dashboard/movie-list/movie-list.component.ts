import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.interface';
import { Router } from '@angular/router';
import { TableService } from '../table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNewMovieComponent } from '../add-new-movie/add-new-movie.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[]=[];
  public searchValue:string='';
  public selected: string='';
  displayedColumns: string[] = [ 'title', 'director', 'year','duration','rating'];

  showFiller = false;

  constructor(private router: Router,private httpClient: HttpClient,private tableService:TableService,public dialog: MatDialog/*, public sideNav:MatSidenav*/) { }

  ngOnInit(): void {
   this.getTableData();
   
  }

    get_movies(){
        this.httpClient.get('http://localhost:3000/movies').subscribe((res : any)=>{
        console.log(res);
        this.movies=res;;
        this.tableService.setTableList=res;
       // this.movies=this.tableService.getTableList();
        });
    }
    getTableData(){
      this.movies=this.tableService.getTableList();
    }

    goToMovies(){
      this.router.navigateByUrl("/dashboard/movie-list");
    }

    goToAccount(){
      this.router.navigateByUrl("");
    }

    goToLogIn(){
      this.router.navigateByUrl("");
    }

    openModal(){
      this.dialog.open(AddNewMovieComponent);
      console.log(this.searchValue);
    }

    sort(){
      console.log(this.selected);
      switch(this.selected){
        case "title":{
          this.sortByTitle();
          break;}
        case "director":{
          this.sortByDirector();
          break;}
        case "year":{
          this.sortByYear();
          break;}
        case "duration":{
          this.sortByDuration();
          break;}
        case "rating":{
          this.sortByRating();
          break;}         
        default: 
          break; 
          
      }

    }

    sortByTitle(){
      this.tableService.sortByTitle();
    }
    sortByDirector(){
      this.tableService.sortByDirector();
    }

    sortByYear(){
      this.tableService.sortByYear();
    }

    sortByDuration(){
      this.tableService.sortByDuration();
    }

    sortByRating(){
      this.tableService.sortByRating();
    }
  
    search(){
     
      this.movies=this.tableService.searchMovie(this.searchValue);
    }

    deleteMovie(i:number){

      this.tableService.deleteData(i);
      this.movies=this.tableService.getTableList();
    }

}
