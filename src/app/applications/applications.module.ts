import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsRoutingModule } from './applications-routing.module';

import {
  DesktopComponent,
  LaunchpadComponent,
  TerminalComponent,
  FoldersComponent,
  FinderComponent,
  TrashComponent
} from './containers';

import {
  DockComponent,
  DialogControlsComponent,
  FolderIconComponent,
  MenuComponent,
  FinderSidebarComponent,
  SidebarItemComponent,
  SidebarGroupComponent
} from './components';

const components = [
  DesktopComponent,
  DockComponent,
  LaunchpadComponent,
  MenuComponent,
  TerminalComponent,
  DialogControlsComponent,
  FoldersComponent,
  FolderIconComponent,
  FinderComponent,
  TrashComponent,
  FinderSidebarComponent,
  SidebarItemComponent,
  SidebarGroupComponent,
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
