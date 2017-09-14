import { Component, OnInit } from '@angular/core';
import { Cafe } from "../cafe";
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-view',
  templateUrl: './cafe-view.component.html',
  styleUrls: ['./cafe-view.component.css'],
  providers: [CafeService]
})
export class CafeViewComponent implements OnInit {

  cafes: Cafe[];

  selectedCafe: Cafe;
  private hidenewCafe: boolean = true;


  constructor(private _cafeService: CafeService) { }

  ngOnInit() {
    this._cafeService.getCafes()
      .subscribe(resCafeData => this.cafes = resCafeData)
  }

  onSelectCafe(cafe:any) {
    this.selectedCafe = cafe;
    this.hidenewCafe = true;
    console.log(this.selectedCafe);
  }

  onSubmitAddCafe(cafe: Cafe) {
    this._cafeService.addCafe(cafe)
      .subscribe(resNewCafe => {
        this.cafes.push(resNewCafe);
        this.hidenewCafe = true;
        this.selectedCafe = resNewCafe;
      });
  }

  onUpdateCafeEvent(cafe: any) {
    this._cafeService.updateCafe(cafe)
      .subscribe(resUpdatedCafe => cafe = resUpdatedCafe);
    this.selectedCafe = null;
  };

  onDeleteVideoEvent(cafe: any) {
    let cafeArray = this.cafes;
    this._cafeService.deleteCafe(cafe)
      .subscribe(resDeletedCafe => {
        for (let i = 0; i < cafeArray.length; i++) {
          if (cafeArray[i]._id === cafe._id) {
            cafeArray.splice(i, 1);
          }
        }
      });
    this.selectedCafe = null;
  };
  

  newCafe() {
    this.hidenewCafe = false;
  }

}
