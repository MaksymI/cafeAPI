import { Component, OnInit, EventEmitter } from "@angular/core";
// import { Cafe } from "../cafe";

@Component({
  selector: 'cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css'],
  inputs: ['cafe'],
  outputs: ['updateCafeEvent', 'deleteCafeEvent']
})
export class CafeDetailComponent implements OnInit {
  cafe: any;
  private editName: boolean = false;
  private updateCafeEvent = new EventEmitter();
  private deleteCafeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editName = false;
  }

  onNameClick() {
    this.editName = true;
  }

  updateCafe() {
    this.updateCafeEvent.emit(this.cafe);
  }

  deleteCafe() {
    this.deleteCafeEvent.emit(this.cafe);
  }

}
