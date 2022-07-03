import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';
import { dockItems } from '../../../shared/config/dock-items';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockComponent implements OnInit {

  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  };

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dockItems = this.getDockItems();
  }

  getDockItems() {
    return dockItems.map(dockItem => {
      return {
        label: dockItem,
        icon: dockItem,
        tooltipOptions: {
          tooltipLabel: dockItem,
          ...this.defaultTooltipOptions
        },
        command: () => { }
      };
    })
  }

}
