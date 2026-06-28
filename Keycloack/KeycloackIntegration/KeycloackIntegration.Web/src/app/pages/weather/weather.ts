import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { WeatherForecast } from '../../core/models/weather-forecast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  forecasts = signal<WeatherForecast[]>([]);

  private weatherService = inject(WeatherService);

  constructor() {
    this.weatherService.getForecast().subscribe({
      next: (data) => {
        console.log('Received:', data);
        this.forecasts.set(data);
        console.log('Forecasts:', this.forecasts);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
