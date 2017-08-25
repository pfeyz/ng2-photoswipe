import { Component } from '@angular/core';

@Component({
  selector: 'photoswipe-component',
  template: `<h1>Sample Component Change</h1>`,
    styleUrls: [
        '../node_modules/photoswipe/dist/photoswipe.css',
        '../node_modules/photoswipe/dist/default-skin/default-skin.css',
        'photoswipe.component.css'
    ],
})
export class PhotoswipeComponent {

  constructor() {
  }

}
