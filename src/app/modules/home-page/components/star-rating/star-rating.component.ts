import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

export enum StarRatingColor {
    primary = 'primary',
    accent = 'accent',
    warn = 'warn'
}

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent implements OnInit {
    @Input() rating = 3;
    @Input() starCount = 5;
    @Input() color = 'accent';
    @Output() ratingUpdated = new EventEmitter();

    snackBarDuration = 2000;
    ratingArr = [];

    ngOnInit() {
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    }

    onClick(rating: number) {
        this.ratingUpdated.emit(rating);
        return false;
    }

    showIcon(index: number) {
        if (this.rating >= index + 1) {
            return 'star';
        } else {
            return 'star_border';
        }
    }

}
