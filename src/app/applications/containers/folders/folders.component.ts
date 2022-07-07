import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../../shared/models/folder.model';
import { Store } from '../../../shared/store/store';
import { FolderSelection } from '../../../shared/models/folder-selection';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoldersComponent {

  @Input() folders: Folder[] = [];
  @Input() isFinderOpened = false;

  constructor(private store: Store) { }

  onFolderSelected(folderSelection: FolderSelection) {
    this.store.toggleFolder(folderSelection)
  }

}
