import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';
import { dockItems } from '../../../shared/config/dock-items';
import { LAUNCHPAD } from '../../../shared/config/applications';
import { Store } from '../../../shared/store/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockComponent implements OnInit, OnDestroy {
  @Output() launchpadOpened = new EventEmitter;

  onDestroy$ = new Subject();
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
    this.store.trashItemsCount$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(count => this.updateTrashIcon(count))
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
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

  private updateTrashIcon(trashItemCount: number) {
    this.dockItems = this.dockItems
      .map(docItem => {
        const icon = trashItemCount > 0 && docItem.label === 'trash'
          ? 'trash-full'
          : docItem.icon

        return {
          ...docItem,
          icon
        };
      });
    this.cd.markForCheck();
  }
}
