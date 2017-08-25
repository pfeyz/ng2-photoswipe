import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample Component Change</h1>`,
    styleUrls: [
        '../node_modules/photoswipe/dist/photoswipe.css',
        '../node_modules/photoswipe/dist/default-skin/default-skin.css',
        'sample.component.css'
    ],
})
export class SampleComponent {

  constructor() {
  }

}
