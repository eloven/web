import { Component, OnInit } from '@angular/core';
import { NavFlatNode, NavNode, TREE_DATA } from './build-nav';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  private transformer = (node: NavNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      fullPath: node.fullPath,
      level
    };
  }

  treeControl = new FlatTreeControl<NavFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {}

  hasChild = (_: number, node: NavFlatNode) => node.expandable;

  push(path: string) {
    this.router.navigateByUrl(path).then().catch(() => window.location.href = window.location.origin);
  }
}
