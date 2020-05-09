import { Component, OnInit } from '@angular/core';
 
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'request-status';
  ngOnInit() {
    // $(document).ready(function() {
    //   $('#discModal').modal({
    //     show: true
    //   });
    // })
  }
}
