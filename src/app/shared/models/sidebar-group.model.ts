import { SidebarItem } from './sidebar-item.model';

export interface SidebarGroup {
  category: string;
  items: SidebarItem[];
}
