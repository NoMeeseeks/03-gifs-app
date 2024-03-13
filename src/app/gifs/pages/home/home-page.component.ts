import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private gifsServices: GifsService) {

  }

  get gifs(): Gif[] {
    return this.gifsServices.gifsList;
  }
}
