import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarModule,
    InputTextModule
  ]
})
export class SharedUiModule { }
