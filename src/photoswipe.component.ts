import {Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {PhotoSwipe, Options, Item, UI} from '@types/photoswipe';
import {PhotoswipeService} from 'photoswipe.service';

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
    // encapsulation: ViewEncapsulation.None,
})

export class PhotoswipeComponent implements OnDestroy {


    @Input() items: Item[];
    @Input() pswpElement: HTMLElement;
    @Input() open: boolean;
    @Input() options: Options;

    item: Item;

    @Output() onClose: EventEmitter<any> = new EventEmitter();

    gallery: PhotoSwipe;

    constructor(private uiConstructor: UI<Options>,) {

        this.gallery = new PhotoSwipe(this.pswpElement, false, this.items, this.options);

    }
    noop()  {};

    startGallery() {
        let pswpElement = document.querySelectorAll('.pswp')[0];

        if ((this.options.getThumbBoundsFn == null) &&
            !(this.pswpElement == null)) {

            this.options = angular.merge({}, {

                getThumbBoundsFn: function (index) {
                    let thumbnail = document.querySelectorAll(this.slideSelector)[index];
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    let rect = thumbnail.getBoundingClientRect();
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                }

            }, this.options);
        }

        this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default || false, this.items, this.options);
        this.gallery.init();
        this.item = this.gallery.currItem;

        this.gallery.listen('destroy', function () {
            this.safeApply(function () {
                (this.onClose || this.noop)();
            });
        });

        this.gallery.listen('afterChange', function () {
            this.safeApply(function () {
                this.item = this.gallery.currItem;
            });
        });
    };

    start() {
        this.open = true;
        this.startGallery();
    };

    safeApply(fn: Function) {
        let phase = this.$root.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    linkFn(scope, iElement, iAttrs) {


        this.$watch('open', function (nVal, oVal) {
            if (nVal != oVal) {
                if (nVal) {
                    this.startGallery();
                }
            } else if (!nVal && this.gallery) {
                this.gallery.close();
                this.gallery = null;
            }
        });


    }

    ngOnDestroy() {

        if (this.gallery) {
            this.gallery.destroy();
        }
    }

    closeWasClicked(clickedEntry: any): void {
        this.open = false;
        this.onClose.emit([clickedEntry, this.open]);
    }

}

