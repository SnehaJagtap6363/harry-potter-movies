import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
    movies: Movie[] = [];
    filteredMovies: Movie[] = []; 
    searchTitle: string = '';
    searchYear: string = '';  
  
    constructor(private movieService: MovieService) {}
  
    ngOnInit(): void {
      this.movieService.getMovieList().subscribe(movies => {
        this.movies = movies;
        this.searchByFilter();
      });
    }
  
  
    searchByFilter(): void {
      this.filteredMovies = this.movies.filter((movie: Movie) =>
        movie?.title?.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
        this.filterByRealeaseYear(movie?.release_date)
      );
    }
  
    filterByRealeaseYear(releaseDate?: string): boolean {
      if (!this.searchYear || !releaseDate) {
        return true; 
      }
  
      const releaseDateYear = new Date(releaseDate).getFullYear().toString();
      return releaseDateYear.includes(this.searchYear);
    }
  
  
}
