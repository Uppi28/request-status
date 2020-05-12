import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Chips {
  name: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  mktSeln = [{key: 1, name: 'US'}, {key: 2, name: 'Export'}, {key: 3, name: 'Canada'}];
  mktSelnSltd = [{key: 1, name: 'US'}];

  division = [{key: 1, name: '001-Chevrolet (US)'}, {key: 2, name: '004-Buick (US)'}, {key: 3, name: '006-Cadillac (US)'}, {key: 4, name: '012-GMC (US)'}];
  divisionSltd = [{key: 1, name: '001-Chevrolet (US)'}, {key: 2, name: '004-Buick (US)'}];

  region = [{key: 1, name: '10 WESTERN REGION'}, {key: 2, name: '20 SOUTH CENTRAL REGION'}, {key: 3, name: '30 SOUTHEAST REGION'}, 
    {key: 4, name: '40 NORTHEAST REGION'}, {key: 5, name: '50 NORTH CENTRAL REGION'}];
  regionSltd = [{key: 1, name: '10 WESTERN REGION'}, {key: 2, name: '20 SOUTH CENTRAL REGION'}];

  zone = [{key: 1, name: '1111 CHV DENVER/ROCKY MT'}, {key: 2, name: '1112 CHV SEATTLE/PAC NW'}, {key: 3, name: '1113 CHV NO CAL'}, 
    {key: 4, name: '1114 CHV SO CAL'}, {key: 5, name: '1115 CHV PHOENIX/DESERT'}, {key: 6, name: '1116 CHV NORTHWEST'}];
  zoneSltd = [{key: 1, name: '1111 CHV DENVER/ROCKY MT'}, {key: 2, name: '1112 CHV SEATTLE/PAC NW'}];
  
  area = [{key: 1, name: '1111 CHV ALBQ/COLO SPG'}, {key: 2, name: '1112 CHV N DENVER'}, {key: 3, name: '1113 CHV C DENVER'}, 
    {key: 4, name: '1114 CHV S DENVER'}, {key: 5, name: '1121 CHV S SEATTLE'}, {key: 6, name: '1122 CHV N SEATTLE/AK'}];
  areaSltd = [{key: 1, name: '1111 CHV ALBQ/COLO SPG'}, {key: 2, name: '1112 CHV N DENVER'}];

  gmma = [{key: 1, name: '0500 PORTLAND-AUBURN'}, {key: 2, name: '0501 NEW YORK'}, {key: 3, name: '0502 BINGHAMTON'}, {key: 4, name: '0503 MACON'},
  {key: 5, name: '0504 PHILADELPHIA'}];
  gmmaSltd = [];

  lma = [{key: 1, name: '0001 BRITISH COLUMBIA'},{key: 2, name: '0002 CALGARY/LATHBRIDGE/MEDICINE HAT/RED DEER'},
    {key: 3, name: '0003 EDMONTON/LLOYDMINISTER/DAWSON CREEK'},{key: 4, name: '0004 SASKATCHEWAN'},{key: 5, name: '0005 MANITOBA'},
    {key: 6, name: '0006 THUNDER BAY/KENORA'},{key: 7, name: '0007 SUDBURY/SAULT STE.MARIE/TIMMINS/NORTH BAY'}];
  lmaSltd = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  bacs: Chips[] = [];
  fans: Chips[] = [];

  addBac(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.bacs.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  addFan(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fans.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  removeBac(bac: Chips): void {
    const index = this.bacs.indexOf(bac);

    if (index >= 0) {
      this.bacs.splice(index, 1);
    }
  }
  removeFan(fan: Chips): void {
    const index = this.fans.indexOf(fan);

    if (index >= 0) {
      this.fans.splice(index, 1);
    }
  }

  ngOnInit(): void {
   
  }

}
