import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';
import { dockItems } from '../../../shared/config/dock-items';
import { LAUNCHPAD } from '../../../shared/config/applications';
import { Store } from '../../../shared/store/store';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockComponent implements OnInit {
  @Output() launchpadOpened = new EventEmitter

  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  };

  constructor(private cd: ChangeDetectorRef,
              private store: Store
  ) { }

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
        command: () => {
          if (dockItem === LAUNCHPAD) {
            this.launchpadOpened.emit();
          }

          this.store.setActiveApplication(dockItem);
        }
      };
    })
  }

}
