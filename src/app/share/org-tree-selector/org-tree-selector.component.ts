import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNodeOptions} from 'ng-zorro-antd';
import {OrgService} from '../service/org.service';

@Component({
  selector: 'app-org-tree-selector',
  templateUrl: './org-tree-selector.component.html',
  styleUrls: ['./org-tree-selector.component.scss']
})
export class OrgTreeSelectorComponent implements OnInit {

  treeData: NzTreeNodeOptions[] = [];

  @Output() checkOrg: EventEmitter<string> = new EventEmitter<string>();

  constructor(private orgService: OrgService) {
  }

  ngOnInit(): void {
    this.treeData = [this.orgService.getRootOrg()];
  }

  // TODO: need optimize
  mouseAction(event: NzFormatEmitEvent) {
    const node = event.node;
    if (event.eventName === 'expand') {
      if (node && node.getChildren().length === 0 && node.isExpanded) {
        this.orgService.loadChildren(node.key).subscribe(child => {
          node.addChildren(child);
          if (!child || child.length === 0) {
            node.isLeaf = true;
          }
        });
      }
    }
    if (event.eventName === 'click') {
      this.checkOrg.emit(node.key);
    }
  }
}
