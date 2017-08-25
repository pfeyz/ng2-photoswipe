import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Options, Item} from '@types/photoswipe';

@Component({
    selector: 'photoswipe-component',
    template: `<div>
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--share" title="Share"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    styleUrls: [
        '../node_modules/photoswipe/dist/photoswipe.css',
        '../node_modules/photoswipe/dist/default-skin/default-skin.css',
        'photoswipe.component.css'
    ],
    //encapsulation: ViewEncapsulation.None,
})
export class PhotoswipeComponent {


    @Input() slides: Item;
    @Input() slideSelector: string;
    @Input() open: boolean;
    @Input() options: Options;

    @Output() onClose: EventEmitter<any> = new EventEmitter();


    constructor() {

    }



    cloaseWasClicked(clickedEntry: any): void {
        this.onClose.emit([clickedEntry, this.open]);
    }
}
