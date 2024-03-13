import { Component, ElementRef, ViewChild, input } from '@angular/core';
import { GifsService } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) { }

  // searchTag(newTag: string): void {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
