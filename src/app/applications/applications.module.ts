import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsRoutingModule } from './applications-routing.module';

import { DockComponent } from './components';
import { DialogControlsComponent } from './components';
import { MenuComponent } from './components';
import { DesktopComponent } from './containers';
import { LaunchpadComponent } from './containers';
import { TerminalComponent } from './containers';
import { FoldersComponent } from './containers';
import { FolderIconComponent } from './components';

const components = [
  DesktopComponent,
  DockComponent,
  LaunchpadComponent,
  MenuComponent,
  TerminalComponent,
  DialogControlsComponent,
  FoldersComponent,
  FolderIconComponent
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
