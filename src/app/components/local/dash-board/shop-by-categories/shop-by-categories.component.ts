import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-by-categories',
  templateUrl: './shop-by-categories.component.html',
  styleUrls: ['./shop-by-categories.component.scss']
})
export class ShopByCategoriesComponent implements OnInit {

  @Input() categoryCardData :any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
