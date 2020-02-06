import { USER_ROUTES } from './user/user-routing.module'
import { NavNode } from '../core/components/side-bar/build-nav';

export const PAGE_ROUTES: NavNode[] = [
  {
    fullPath: 'home',
    title: '仪表盘',
  },
  {
    title: '用户模块',
    fullPath: '',
    children: USER_ROUTES
  }
];
