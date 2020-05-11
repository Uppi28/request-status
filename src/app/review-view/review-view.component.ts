import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  styleUrls: ['./review-view.component.css']
})
export class ReviewViewComponent implements OnInit {

  constructor() { }

  reqDate:string = '11-May-2020';
  reqNumber: Number = 3671;
  repTitle: string = 'New Report'

  ngOnInit(): void {
  }

}
