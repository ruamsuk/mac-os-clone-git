import { Injectable } from '@angular/core';
import { BaseStore } from './base-store';
import { State } from './state.model';
import { DESKTOP } from '../config/applications';
import { Observable } from 'rxjs';
import { FolderSelection } from '../models/folder-selection';
import { Folder } from '../models/folder.model';

const initialState: State = {
  activeApplication: DESKTOP,
  selectedFolderIds: [],
  deletedFolderIds: [],
  folders: [
    {
      id: 0,
      title: 'folder'
    },{
      id: 1,
      title: 'untitled',
      parentFolderId: 0
    },{
      id: 2,
      title: 'tutorials',
      parentFolderId: 0
    },{
      id: 3,
      title: 'assets',
      parentFolderId: 2
    },
  ]
};

@Injectable({ providedIn: 'root'})
export class Store extends BaseStore {

  trashItemsCount$: Observable<number> = this.select((state) => {
    return state.deletedFolderIds.length;
  });

  desktopFolders$: Observable<Folder[]> = this.select((state) => {
    return state.folders
      .filter(f => f.parentFolderId === 0 && !state.deletedFolderIds.includes(f.id))
      .map(f => {
        return {
          ...f,
          selected: state.selectedFolderIds.includes(f.id)
        }
      });
  })

  activeApplication$: Observable<string> = this.select((state) => {
    return state.activeApplication
  });

  constructor() {
    super(initialState);
  }

  setActiveApplication(activeAppId = DESKTOP) {
    this.setState({
      activeApplication: activeAppId
    });
  }

  toggleFolder(folderSelection: FolderSelection) {
    if (folderSelection.selectedMultiple) {
      this.setState({
        selectedFolderIds: [
          ...this.state.selectedFolderIds,
          folderSelection.id
        ]
      });
    } else {
      this.setState({
        selectedFolderIds: [
          folderSelection.id
        ]
      });
    }
  }

  unselectAllFolders() {
    this.setState({
      selectedFolderIds: []
    });
  }

  deleteSelectedFolder() {
    this.setState({
      deletedFolderIds: [
        ...this.state.deletedFolderIds,
        ...this.state.selectedFolderIds
      ]
    });
  }
}
