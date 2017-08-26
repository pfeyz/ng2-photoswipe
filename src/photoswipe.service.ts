import {Injectable} from '@angular/core';
import {Item} from '@types/photoswipe';

// this all seems unnecessary, the service should be fetching gallery data for the component or nothing.


@Injectable()
export class PhotoswipeService {


    gallery: { [key: string]: Item[] } = {};

    constructor() {

    }

    public createGallery(key: string) {
        this.gallery[key] = [];
    }

    public setItems(key: string, images: Item[]) {
        this.gallery[key] = images;
    }

    public addItem(key: string, image: Item) {
        if (key in this.gallery) {
            this.gallery[key].push(image);
        } else {
            throw new Error(`gallery '${key}' does not exist`);
        }
    }

    public getItems(key: string): Item[] {
        return this.gallery[key];
    }

    public removeItem(key: string, id: number) {
        this.gallery[key].forEach((img, index) => {
            if (img.id === id) {
                this.gallery[key].splice(index, 1);
            }
        });
    }

}