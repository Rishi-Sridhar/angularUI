import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routerTransition()]
})
export class ListComponent implements OnInit {
  hide = false;
  resp;
  details;

  ponum;
  qty;
  desc;
  up;
  tamt;
  mamt;
  mino;
  umamt;
  lms;
  pos;
  buy;
  sel;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/PurchaseOrder').subscribe(
      res => {
        console.log(res);
        this.resp = res;
        // console.log(JSON.stringify(res));
        console.log(this.resp[1]);
        console.log(this.resp.PONumber);

      },
      err => {
        console.log(err);
      }
    );
  }

  onDetails(i) {
    this.hide = true;
    console.log(this.resp[i]);
    this.details = this.resp[i];
    this.ponum = this.details['PONumber'];
    console.log(this.details['PONumber']);
    this.qty = this.details['OrderedQuantity'];
    this.desc = this.details['Description'];
    this.up = this.details['UnitPrice'];
    this.tamt = this.details['TotalAmount'];
    this.mamt = this.details['MatchedAmount'];
    this.mino = this.details['Matchedinvoicenumbers'];
    this.umamt = this.details['UnmatchedAmount'];
    this.lms = this.details['Lastmatchstatus'];
    this.pos = this.details['POStatus'];
    this.buy = this.details['buyer'];
    this.sel = this.details['seller'];

  }

}
