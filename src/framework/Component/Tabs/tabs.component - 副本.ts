import { Component, OnInit, Input, } from '@angular/core';

interface tabs {
  title: string,
  href: string,
  multiple?: boolean
}

@Component({
  selector: 'g-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  private list: Array<tabs> = [{
    title: 'Fuck',
    href: 'fuck'
  }, {
    title: 'Shit',
    href: 'shit'
  }];

  @Input() run;

  private matchID = 'href';
  private current: tabs;

  ngOnInit() {
  }

  setCurrent(tar) {
    this.current = tar;
  }

  isCurrent(tar) {
    return this.current === tar;
  }

  create(obj: tabs) {
    let tar: tabs = this.list.filter((v) => {
      return v[this.matchID] === obj[this.matchID]
    })[0];

    if (tar) {
      if (tar.multiple) {
        obj.multiple = true;

        tar = obj;

        this.list.push(obj);
      }
    } else {
      tar = obj;

      this.list.push(obj);
    }

    this.setCurrent(tar);

    this.run(tar);
  }

  close(tar: string | number[]) {
    let list = this.list,
      index: number;

    tar = list.map((v, i) => {
      console.log(v[this.matchID], tar, v[this.matchID] === tar)
      if (v[this.matchID] === tar) {
        return i;
      }
    }).filter((v) => {
      return v || v === 0;
    });

    if (!tar.length) {
      return;
    }

    if (tar.length === 1) {
      console.log(tar[0])
      list.splice(tar[0], 1);
    }
  }
}
