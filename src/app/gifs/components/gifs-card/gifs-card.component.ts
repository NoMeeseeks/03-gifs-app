import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Metodo gif requerido');
    }
  }

  downloadImage() {
    const link = document.createElement('a');

    link.setAttribute('href', this.gif.embed_url);
    // link.setAttribute('download', );
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
  }

}
