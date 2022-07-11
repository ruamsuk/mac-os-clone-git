import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SidebarGroup } from '../../../shared/models/sidebar-group.model';

@Component({
  selector: 'app-sidebar-group',
  templateUrl: './sidebar-group.component.html',
  styleUrls: ['./sidebar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarGroupComponent {

  @Input() sidebarGroup!: SidebarGroup;

}
