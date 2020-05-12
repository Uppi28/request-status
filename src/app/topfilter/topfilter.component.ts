import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-topfilter',
  templateUrl: './topfilter.component.html',
  styleUrls: ['./topfilter.component.css']
})
export class TopfilterComponent implements OnInit {

  @Input() filters: [{key: number, name: string}];
  @Input() userProfile: [{key: number, name: string}];
  @Input() title: string;

  searchUserForm: FormGroup;

  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });
  }
  compareWithFunc(a, b) {
    return a.name === b.name;
  }
  tosslePerOne(all){ 
    if (this.allSelected.selected) {  
      this.allSelected.deselect();
      return false;
  }
  if(this.searchUserForm.controls.userType.value.length==this.filters.length)
    this.allSelected.select();

}
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.userType
        .patchValue([...this.filters.map(item => item.key), 0]);
    } else {
      this.searchUserForm.controls.userType.patchValue([]);
    }
  }

}
