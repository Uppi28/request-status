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
  mktSeln = [{name: 'US'}, {name: 'Export'}, {name: 'Canada'}];
  mktSelnSltd = [{name: 'US'}];

  division = [{name: '001-Chevorlet (US)'}, {name: '004-Buick (US)'}, {name: '006-Cadillac (US)'}, {name: '012-GMC (US)'}];
  divisionSltd = [{name: '001-Chevorlet (US)'}, {name: '004-Buick (US)'}];

  region = [{name: '10 WESTERN REGION'}, {name: '20 SOUTH CENTRAL REGION'}, {name: '30 SOUTHEAST REGION'}, {name: '40 NORTHEAST REGION'}, {name: '50 NORTH CENTRAL REGION'}];
  regionSltd = [{name: '10 WESTERN REGION'}, {name: '20 SOUTH CENTRAL REGION'}];

  zone = [{name: '1111 CHV DENVER/ROCKY MT'}, {name: '1112 CHV SEATTLE/PAC NW'}, {name: '1113 CHV NO CAL'}, {name: '1114 CHV SO CAL'}, {name: '1115 CHV PHOENIX/DESERT'}, {name: '1116 CHV NORTHWEST'}];
  zoneSltd = [{name: '1111 CHV DENVER/ROCKY MT'}, {name: '1112 CHV SEATTLE/PAC NW'}];
  
  area = [{name: '1111 CHV ALBQ/COLO SPG'}, {name: '1112 CHV N DENVER'}, {name: '1113 CHV C DENVER'}, {name: '1114 CHV S DENVER'}, {name: '1121 CHV S SEATTLE'}, {name: '1122 CHV N SEATTLE/AK'}];
  areaSltd = [{name: '1111 CHV ALBQ/COLO SPG'}, {name: '1112 CHV N DENVER'}];

  gmma = [{name: '0500 PORTLAND-AUBURN'}, {name: '0501 NEW YORK'}, {name: '0502 BINGHAMTON'}, {name: '0503 MACON'}, {name: '0504 PHILADELPHIA'}];
  gmmaSltd = [];

  lma = [{name: '0001 BRITISH COLUMBIA'},{name: '0002 CALGARY/LATHBRIDGE/MEDICINE HAT/RED DEER'},{name: '0003 EDMONTON/LLOYDMINISTER/DAWSON CREEK'},{name: '0004 SASKETCHEWAN'},{name: '0005 MANITOBA'},{name: '0006 THUNDER BAY/KENORA'},{name: '0007 SUDBURY/SAULT STE MARIE/TIMMINS/NORTH BAY'}];
  lmaSltd = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  disabled = true;
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

  review() {
    console.log(this.disabled);
    
    this.disabled = false;
  }


}
