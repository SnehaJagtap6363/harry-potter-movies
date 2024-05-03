import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MovieService } from './service/movie.service';
import { DurationPipe } from './pipes/duration.pipe';
import { BudgetPipe } from './pipes/budget.pipe';

@NgModule({
    declarations: [ MoviesDetailsComponent, MoviesListComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
