import { PAGE_ROUTES } from '../../../pages/page-routes';

export interface NavNode {
  fullPath: string;
  title: string;
  children?: NavNode[];
}

export interface NavFlatNode {
  title: string;
  fullPath: string;
  level: number;
  expandable: boolean;
}

export const TREE_DATA: NavNode[] = PAGE_ROUTES;
