import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TerminalModule } from 'primeng/terminal';
import { ContextMenuModule } from 'primeng/contextmenu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarModule,
    InputTextModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TerminalModule,
    ContextMenuModule
  ]
})
export class SharedUiModule { }
