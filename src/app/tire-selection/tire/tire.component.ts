import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { TireStore } from '../tire.store';
@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.css']
})
export class TireComponent implements OnInit {
  buttonclicked = false;
   yearTab=true;
   yearsData$:Observable<[]> | any;
   makesData$:Observable<[]>|any;
   modelsData$:Observable<[]>|any;
   stylesData$: Observable<[]> |any;
   selectInstruction:String | any;
   makeTab=false;
   modelTab=false;
   styleTab=false;
   selectedYear='';
   selectedMake= '';
   selectedModel='';
   selectedStyle='';
  constructor(private tireStore:TireStore,
     public dialogRef: MatDialogRef<TireComponent>) { }

  getVehiclesData() {
    this.buttonclicked=true;
    this.yearsData$=this.tireStore.grtYears();
  }
  ngOnInit() {
    }
  onTabChange(tabName:any, selectedVal:any, reqestingDataVal:any){
    switch(tabName) {
      case 'year':
        this.selectedYear=selectedVal;
        this.makeTab=true;
        this.yearTab=false;
        this.modelTab=false;
        this.styleTab=false
        this.makesData$=this.tireStore.getMakes();
        this.selectInstruction=reqestingDataVal
        // console.log("makes======>", this.makesData$)
        break;
      case 'make':
        this.selectedMake=selectedVal;
        this.makeTab=false;
        this.yearTab=false;
        this.modelTab=true;
        this.styleTab=false
        this.modelsData$= this.tireStore.getModels();
      //   console.log("models======>", this.modelsData$);
        this.selectInstruction=reqestingDataVal
        break;
      case 'model':
        this.selectedModel=selectedVal;
        this.makeTab=false;
        this.yearTab=false;
        this.modelTab=false;
        this.styleTab=true;
        this.stylesData$= this.tireStore.getTrims();
      //   console.log("styles======>", this.stylesData$)
        this.selectInstruction=reqestingDataVal
        break;
      case 'style':
        this.selectedStyle=selectedVal;
        this.makeTab=false;
        this.yearTab=false;
        this.modelTab=false;
        this.styleTab=true
        break;
      default:
        return
    }
  }
  startOver (){
    console.log("hello")
    this.buttonclicked = false;
    this.yearTab=true;
    this.makeTab=false;
    this.modelTab=false;
    this.styleTab=false
    this.selectedYear='';
    this.selectedMake= '';
    this.selectedModel='';
    this.selectedStyle='';
  }

}
