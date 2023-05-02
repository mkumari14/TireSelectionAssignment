import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TireComponent } from './tire/tire.component';
import { TireService } from './tire.service';
import { MatButtonModule } from '@angular/material/button';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    TireComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,
    ScrollingModule
  ],
  exports:[TireComponent],
  providers: [TireService]

})
export class TireSelectionModule { }
