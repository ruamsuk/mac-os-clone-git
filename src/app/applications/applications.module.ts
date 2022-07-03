import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsRoutingModule } from './applications-routing.module';

import { DesktopComponent } from './containers';
import { DockComponent } from './components';
import { MenuComponent } from './components';

const components = [
  DesktopComponent,
  DockComponent,
  MenuComponent
];


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
