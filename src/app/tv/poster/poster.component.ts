import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Show } from '../tv.models';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  imageUrl: string;
  private readonly placeholderUrl = 'https://fillmurray.com/210/295';

  ngOnInit() {
    this.imageUrl = this.show.image
      ? this.show.image.medium
      : this.placeholderUrl;
  }

}
