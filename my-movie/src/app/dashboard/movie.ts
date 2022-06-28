export class Movie{
    id:number;
    title:string;
    director: string;
    year:number;
    duration:string;
    rating:number;
    user_id: number;

    constructor(id: number,title: string,director: string,year: number,duration: string,rating: number,user_id: number){
        this.id=id;
        this.title=title;
        this.director=director;
        this.year=year;
        this.duration=duration;
        this.rating=rating;
        this.user_id=user_id;
    }
}

