import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarItem } from '../../../shared/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
  ,changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemComponent {

  @Input() sidebarItem!: SidebarItem;

}
