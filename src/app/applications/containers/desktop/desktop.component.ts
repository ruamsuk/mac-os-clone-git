import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { filter, mergeMap, Subject, takeUntil } from 'rxjs';
import { Store } from '../../../shared/store/store';
import { WindowService } from '../../../shared/services/window.service';
import { DESKTOP } from '../../../shared/config/applications';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject();
  folders$ = this.store.desktopFolders$;
  launchpadOpened = false;

  constructor(
    private store: Store,
    private windowService: WindowService
  ) { }

  ngOnInit(): void {
    this.store.activeApplication$
      .pipe(
        takeUntil(this.onDestroy$),
        filter(app => app !== DESKTOP),
        mergeMap(app => this.windowService.open(app))
      )
      .subscribe(_ => this.store.setActiveApplication())
  }

  @HostListener('document: keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.store.deleteSelectedFolder()
  }

  unselectFolders() {
    this.store.unselectAllFolders();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
