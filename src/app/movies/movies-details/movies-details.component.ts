import { Component } from '@angular/core';
import { MovieDetails } from '../models/movie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../service/movie.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {

  movieDetails: MovieDetails | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService,
    private ChangeDetectorRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loading = true;

    const movieId = this.route.snapshot.paramMap.get('id') || '';
    
    this.movieService.getMovieDetails(movieId).subscribe(movie => {
      if (Object.keys(movie ?? {}).length > 0) {
      this.movieDetails = movie;
      this.ChangeDetectorRef.detectChanges();
      this.loading = false;
      }
    });
  }

  backToHomePage(): void{
    this.router.navigate(['/movies']);
  }

}
