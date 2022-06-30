import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Movie } from '../movie';
import { TableService } from '../table.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {
  form!: FormGroup;
  constructor(private movieService: TableService, private http:HttpClient,) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup(
      { 
      title: new FormControl('', Validators.required),
      director: new FormControl('', [CustomValidators.humanName,Validators.required]),
      year:new FormControl('', [CustomValidators.year,Validators.required]),
      duration:new FormControl('', [/*CustomValidators.duration,*/Validators.required]),
      rating:new FormControl('', [CustomValidators.rating,Validators.required]),
    }
    );}

    get movieTitle(){
      return this.form.get("title");
    }
    get movieDirector(){
      return this.form.get("director");
    }
    get movieYear(){
      return this.form.get("year");
    }
    get movieDuration(){
      return this.form.get("duration");
    }
    get movieRating(){
      return this.form.get("rating");
    }
  
    addMovie(){
      const movie:Movie ={
        title: this.movieTitle?.value,
        director: this.movieDirector?.value,
        year: this.movieYear?.value,
        duration: this.movieDuration?.value,
        rating: this.movieRating?.value,
        user_id: 8,
        id:19
      }

      this.movieService.add(movie);

      this.http.post("http://localhost:3000/movies", movie).subscribe(
        (res: any) => {
          console.log(res)
        }, (error) => {
          console.error(error)
        }
  
  
      )
      console.log(movie);
      console.log(this.form);
  
     
  
      
    }



}