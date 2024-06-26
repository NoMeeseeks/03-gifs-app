import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {

  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  buscarTag(tag: string) {
    this.gifsService.searchTag(tag);
  }

  borrarHistorial() {
    this.gifsService.clearList();
  }
}
