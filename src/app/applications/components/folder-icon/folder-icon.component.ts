import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Folder } from '../../../shared/models/folder.model';

@Component({
  selector: 'app-folder-icon',
  templateUrl: './folder-icon.component.html',
  styleUrls: ['./folder-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderIconComponent {

  @Input() folder!: Folder;
  @Input() isFinderOpened = false;

  @Output() click = new EventEmitter();

  constructor() { }

  onToggleSelection(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit({
      id: this.folder.id,
      selected: !this.folder.selected,
      selectedMultiple: event.metaKey || event.ctrlKey
    });
  }
}
