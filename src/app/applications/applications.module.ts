import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsRoutingModule } from './applications-routing.module';

import { DesktopComponent } from './containers';
import { DockComponent } from './components';
import { MenuComponent } from './components';
import { LaunchpadComponent } from './containers';
import { TerminalComponent } from './containers';

const components = [
  DesktopComponent,
  DockComponent,
  LaunchpadComponent,
  MenuComponent,
  TerminalComponent,
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
