import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  disabled = false;
  Card: any = [];

  constructor(
    public restApi: CardService
  ) {}

  ngOnInit() {
    this.loadCards();
  }

  // Get employees list
  loadCards() {
    return this.restApi.getHome().subscribe((data) => {
      // let items = data.
      console.log(data.data[0]);
      this.Card = data.data;
      // console.log(this.Card);
    });
  }


}
