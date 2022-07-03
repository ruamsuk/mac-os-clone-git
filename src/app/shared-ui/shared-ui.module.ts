import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarModule,
    InputTextModule,
    DockModule,
    MenubarModule
  ]
})
export class SharedUiModule { }
