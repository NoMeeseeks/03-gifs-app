import { Component, ElementRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(newTag: string): void {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}
