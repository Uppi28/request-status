import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-topfilter',
  templateUrl: './topfilter.component.html',
  styleUrls: ['./topfilter.component.css']
})
export class TopfilterComponent implements OnInit {

  @Input() filters: {key: number, name: string}[];
  @Input() userProfile: [{key: number, name: string}];
  @Input() title: string;


  searchUserForm: FormGroup;
  selected: number[];
  initialFilters: {key: number, name: string}[];

  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(private fb: FormBuilder){}

  onKey(value) {
    if(value === ''){
      this.search('')
    } else {
      this.filters = this.search(value);
    }
  }
    
  search(value: string) {
      this.filters = [...this.initialFilters];
      let filter = value.toLowerCase();      
      return this.initialFilters.filter(option => option.name.toLowerCase().includes(filter));
  }

  ngOnInit() {
    this.initialFilters = [...this.filters];
    
    this.selected = this.userProfile.map((d)=>d.key);

    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });
  }
  compareWithFunc(a, b) {
    return a.name === b.name;
  }
  togglePerOne(all){ 
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
