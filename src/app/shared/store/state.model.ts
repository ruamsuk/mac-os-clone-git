import { Folder } from '../models/folder.model';

export interface State {
  folders: Folder[];
  selectedFolderIds: number[];
  deletedFolderIds: number[];
  activeApplication: string;
}
