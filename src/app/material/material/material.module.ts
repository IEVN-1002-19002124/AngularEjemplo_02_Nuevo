import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {
  
}
