import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-addreq-modal',
  templateUrl: './addreq-modal.component.html',
  styleUrls: ['./addreq-modal.component.css']
})
export class AddreqModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openReview() {
    console.log('Hi');
    $('#reviewView').modal('show');
  }

}
