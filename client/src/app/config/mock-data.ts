export interface ISideNavData {
  name: string;
  text: string;
  icon: string;
  path: string;
  isActive?: boolean;
  isOpen?: boolean;
  children?: ISideNavData[];
}

export const SIDE_NAV_DATA: ISideNavData[] = [
  {name: 'dashboard', text: '仪表盘', icon: 'home', path: 'home/dashboard', isOpen: false, isActive: false, children: [
      {name: 'analyze', text: '分析页', icon: '', path: 'home/dashboard/analyze', isActive: false},
      {name: 'moment', text: '监控页', icon: '', path: 'home/dashboard/moment', isActive: false},
      {name: 'charts', text: '图表页', icon: '', path: 'home/dashboard/charts', isActive: false},
      {name: 'work', text: '工作台', icon: '', path: 'home/dashboard/work', isActive: false},
    ]},
  {name: 'admin', text: '表单页', icon: 'email', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: 'basic-form', text: '基础表单', icon: '', path: 'home/admin/basic-form', isActive: false},
      {name: 'step-form', text: '分步表单', icon: '', path: 'home/admin/step-form', isActive: false},
      {name: 'reactive-form', text: '高级表单', icon: '', path: 'home/admin/reactive-form', isActive: false},
    ]},
  {name: 'admin', text: '列表页', icon: 'comment', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: 'table-list', text: '查询表格', icon: '', path: 'home/admin/table-list', isActive: false},
      {name: 'write-table', text: '高级表格', icon: '', path: 'home/admin/write-table', isActive: false},
      {name: 'list', text: '标准列表', icon: '', path: 'home/admin/list', isActive: false},
      {name: 'card-list', text: '卡片列表', icon: '', path: 'home/admin/card-list', isActive: false},
      {name: 'search-list', text: '搜索列表', icon: '', path: 'home/admin/search-list', isActive: false},
    ]},
  {name: 'admin', text: '详情页', icon: 'table', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: 'basic-detail', text: '基础详情页', icon: '', path: 'home/admin/basic-detail', isActive: false},
      {name: 'info-detail', text: '高级详情页', icon: '', path: 'home/admin/info-detail', isActive: false}
    ]},
  {name: 'admin', text: '结果页', icon: 'thumb_up', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: 'success', text: '成功页', icon: '', path: 'home/admin/success', isActive: false},
      {name: 'error', text: '失败页', icon: '', path: 'home/admin/error', isActive: false}
    ]},
  {name: 'admin', text: '异常页', icon: 'error', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: '404', text: '404', icon: '', path: 'home/admin/400', isActive: false},
      {name: '500', text: '500', icon: '', path: 'home/admin/500', isActive: false}
    ]},
  {name: 'admin', text: '个人页', icon: 'people', path: 'home/admin', isOpen: false, isActive: false, children: [
      {name: 'center', text: '个人中心', icon: '', path: 'home/admin/center', isActive: false},
      {name: 'setting', text: '个人设置', icon: '', path: 'home/admin/setting', isActive: false}
    ]},
  {name: 'directive', text: '自定义', icon: 'computer', path: 'home/directive', isOpen: false, isActive: false, children: [
      {name: 'drag', text: '原生拖拽', icon: '', path: 'home/directive/render', isActive: false},
    ]},
  {name: 'material', text: '工具包', icon: 'star', path: 'home/material', isOpen: false, isActive: false, children: [
      {name: 'tree', text: '树结构', icon: '', path: 'home/material/tree', isActive: false},
      {name: 'table', text: '表格', icon: '', path: 'home/material/table', isActive: false},
      {name: 'drag', text: '拖拽', icon: '', path: 'home/material/drag', isActive: false},
      {name: 'dialog', text: '弹窗', icon: '', path: 'home/material/dialog', isActive: false},
    ]},
];
