import {Component, OnInit} from '@angular/core';
import {StarRatingColor} from '../star-rating/star-rating.component';

@Component({
    selector: 'app-contact-developers',
    templateUrl: './contact-developers.component.html',
    styleUrls: ['./contact-developers.component.scss']
})
export class ContactDevelopersComponent implements OnInit {
    rating = 3;
    starCount = 5;
    starColor: StarRatingColor = StarRatingColor.accent;
    starColorP: StarRatingColor = StarRatingColor.primary;
    starColorW: StarRatingColor = StarRatingColor.warn;

    constructor() {
    }

    ngOnInit() {
    }

    onRatingChanged(rating) {
        console.log(rating);
        this.rating = rating;
    }
}
