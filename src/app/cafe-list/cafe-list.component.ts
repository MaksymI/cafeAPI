import { Component, OnInit, EventEmitter } from '@angular/core';
import { Cafe } from "../cafe";

@Component({
  selector: 'cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
  inputs: ['cafes'],
  outputs: ['SelectCafe']
})
export class CafeListComponent implements OnInit {
  public SelectCafe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(cafe: Cafe) {
    this.SelectCafe.emit(cafe);
  }

}
