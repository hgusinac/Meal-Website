import { Component, OnInit } from '@angular/core';
import { chefs } from 'src/app/mocks';
@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss'],
})
export class ChefsComponent implements OnInit {
  chefsList = chefs;

  constructor() {}

  ngOnInit(): void {}
}
