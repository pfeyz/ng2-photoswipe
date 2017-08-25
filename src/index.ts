import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoswipeComponent } from './photoswipe.component';
import { PhotoswipeDirective } from './photoswipe.directive';
import { PhotoswipePipe } from './photoswipe.pipe';
import { PhotoswipeService } from './photoswipe.service';

export * from './photoswipe.component';
export * from './photoswipe.directive';
export * from './photoswipe.pipe';
export * from './photoswipe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoswipeComponent,
    PhotoswipeDirective,
    PhotoswipePipe
  ],
  exports: [
    PhotoswipeComponent,
    PhotoswipeDirective,
    PhotoswipePipe
  ]
})
export class PhotoswipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PhotoswipeModule,
      providers: [PhotoswipeService]
    };
  }
}
