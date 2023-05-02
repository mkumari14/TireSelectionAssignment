import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TireComponent } from './tire-selection/tire/tire.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';
  constructor(public dialog: MatDialog) { }


  openDialog(): void {
    let dialogRef: MatDialogRef< TireComponent>;
    dialogRef = this.dialog.open( TireComponent);
  }
}
