import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { ClockComponent } from './components/clock/clock.component';


@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    SharedUiModule,
    ClockComponent
  ]
})
export class SharedModule { }
