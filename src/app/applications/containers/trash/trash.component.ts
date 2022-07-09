import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '../../../shared/store/store';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrashComponent {

  folders$ = this.store.trashFolders$;

  constructor(private store: Store) { }


}
