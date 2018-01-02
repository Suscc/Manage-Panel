import {
  Component, ElementRef, ViewChild, SimpleChanges, Input, NgModule, NgZone, Injectable,
  OnInit, AfterViewInit, AfterContentInit, OnChanges, HostBinding, HostListener,
  Pipe, PipeTransform, EventEmitter, forwardRef, Directive
} from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';

import { SearchService } from '@framework/Component/Search/search.component';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { LoadingComponent, LoadingService } from '@framework/Component/Loading/loading.component';
import { NavigationService } from '@framework/Component/Navigation/navigation.component';
import { TabsComponent, TabsHooks } from '@framework/Component/Tabs/tabs.component';
import { FormSelectorComponent } from '@framework/Component/FormSelector/selector.component';
import { SearchPanelHooks } from '@framework/Component/SearchPanel/search.component';

import { ReloadService, LogOutService } from '@framework/Service/control.service.ts';
import { TokenService } from '@framework/Service/token.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

import swal from 'sweetalert2';
import { environment } from 'environments/environment';
import { EventQueue } from '@framework/Utils/EventQueue';
import AdminUsers from '@app/models/adminUsers';
import Advertise from '@app/models/advertise';



@Injectable()
export class GTabServer {
  obj;

  init(tar) {
    this.obj = tar;
  }
}

@Directive({
  selector: '[test]',
})
export class Test {
  @Input() offset: any;

  private originalHig: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.originalHig = this.el.nativeElement.offsetHeight;
  }

  ngOnChanges(ev) {
    if (!ev.offset.currentValue && ev.offset.currentValue !== 0)
      return;

    this.el.nativeElement.style.height = this.originalHig - +ev.offset.currentValue + 'px';
  }
}

@Component({
  selector: 'index',
  templateUrl: './index.html',
  styleUrls: ['./index.less'],
})
export class Index implements OnInit, AfterViewInit {
  @ViewChild('gTabs') gTabs;
  @ViewChild('gSearchPanel') gSearchPanel;

  private userName: string;
  private yqwv: TabsComponent;
  private viewMainHig: number;
  private viewHig: number;
  private url: string;
  private navControl: boolean;
  private navMini = false; // 导航栏缩小模式
  private isExtend = false; // 子导航栏是否为展开模式
  // 导航栏数据结构
  private fuck = [
    {
      'navName': '大佬',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' }
      ]
    },
    {
      'navName': '带带我',
      'href': '/index/header'
    },
    {
      'navName': '牛逼',
      'sub': [
        {
          'subName': '子导航栏1',
          'href': '/index/header'
        },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Shit',
      'href': '/index'
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
    {
      'navName': 'Fuck',
      'sub': [
        { 'subName': '子导航栏1' },
        { 'subName': '子导航栏2' },
        { 'subName': '子导航栏3' },
        { 'subName': '子导航栏4' },
        { 'subName': '子导航栏5' },
        { 'subName': '子导航栏6' },
        { 'subName': '子导航栏7' },
        { 'subName': '子导航栏8' },
        { 'subName': '子导航栏9' }
      ]
    },
  ];

  sha() {
    return this.gTabs;
  }

  gTabsHooks: TabsHooks = {
    // 切换时
    switch: (tar) => {
      // 如果切换的目标标签的 href 属性为 fuck 切换后不将其记录为来源标签
      if (tar.href === 'fuck') {
        return null;
      }
    },
    // 创建时
    create: (tar) => {
      // 如果要创建的标签 title 属性为 loli 阻止创建
      if (tar.title === 'loli') {
        return false;
      }

      // 如果要创建的标签 title 属性为 白又白 创建后不自动跳转过去
      if (tar.title === '白又白') {
        return null;
      }
    },
    // 关闭时
    close: (tar) => {
      // 如果要关闭的标签 title 属性为 耳朵 阻止关闭
      if (tar.title === '耳朵') {
        return false;
      }

      // 如果要创建的标签 title 属性为 竖起来 关闭后不自动跳转标签
      if (tar.title === '竖起来') {
        return null;
      }
    }
  };
  test: any;
  gSearchPanelHooks: SearchPanelHooks = {
    open: () => {
      var el = this.elementRef.nativeElement;

      this.test = (window.innerHeight - el.querySelector('.c-header').offsetHeight - el.querySelector('.c-tabBar').offsetHeight) * 0.5;
    },

    close: () => {
      this.test = 0;
    }
  };

  constructor(
    private searchService: SearchService,
    private router: Router,
    private elementRef: ElementRef,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone,
    private loadingService: LoadingService,
    private navigationService: NavigationService,
    private reloadService: ReloadService,
    private logOutService: LogOutService,
    private eventQueue: EventQueue,
    private gTab: GTabServer
  ) {
    this.eventQueue.push(environment.handlerAPI,
      AdminUsers.detail({ "d_Token": localStorage.getItem('userToken') }),
      'post',
      (res) => {
                          this.userName = environment.user.Aname = res.result[0].detail.Aname;
                          environment.user.Auid = res.result[0].detail.Auid;
                          environment.user.Aulid = res.result[0].detail.Aulid;
                          console.log('第一个回调函数执行了');
                        });
  }

  ngAfterViewInit() {
    // this.loadingService.show.emit(null);
    // 实现子导航栏点击逻辑
    this.navigationService.hasSub.subscribe((result?: boolean) => {
      result === true ? this.isExtend = true : this.isExtend = false;
      if (result === true) {
        this.navMini = false;
      }
    });
  }

  ngOnInit() {
    // swal({
    //   title: '可爱',
    //   text: '想太阳',
    //   type: 'success'
    // });
    //
    // this.navigationService.navigationClick.subscribe((str?: any) => {
    //
    //   this.router.navigate([str], { replaceUrl: true });
    // });

    // this.formSelectorService.formSelected.subscribe((res) => console.log(res));
    this.gTab.init(this.gTabs);

    console.error(this.gTab, '是不是已经附上了');

    this.navigationService.resetHeight.subscribe((iscroll) => {
      iscroll.refresh();
    });
  }

  signOut() {
    this.logOutService.logOut.emit(null);
  }

  reloadPage() {

    this.url = this.router.url;

    this.reloadService.routerReload.emit(this.url);
  }

  searchShow() {
    this.searchService.searchShow.emit(null);
  }

  private choseDom(dom: string): any {
    const selectedDom = this.elementRef.nativeElement.querySelector(dom);
    return selectedDom;
  }

  private match(tar, id) {
    let result;
    tar.forEach((v?: any) => {
      const identityMark = v.name.split('-');

      if (identityMark.length === 1 && identityMark[0] === id) {
        result = v;
      }
    });

    return result;
  }

  openSearchPanel() {
    alert('open');
  }
  closeSearchPanel() {
    alert('close');
  }
}

@Component({
  selector: 'form-demo',
  templateUrl: './formDemo.html'
})
export class FromDemoComponent implements OnInit {

  // 表单选择列表数据结构
  private formList = [{ 'fuck1': '测试1' }, '测试2', 3, { 'fuck4': '测试4' }, '测试5', 66];

  // 表单的placeholder
  private placeholder = "我是placeholder";
  private anotherPlaceholder = "另一个palceholder";

  // 默认selected值
  private shit = '下拉默认值';

  // private test = new TabsComponent();

  // 编辑器
  editorContent = "编辑器初始化";
  elementId = "test";
  // 编辑器配置
  private option = {

  };

  constructor(private gTab: GTabServer) {
    this.gTab = this.gTab.obj;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.editorContent, this.shit, this.gTab);
    }, 5000);
  }

  testfuc1(event) {
    console.log(event, 'fuc1');
  }

  testfuc2(event) {
    console.log(event, 'fuc2');
  }

  editorFun(data) {
    console.log(data);
  }
}

@Component({
  selector: 'list-demo',
  templateUrl: './listDemo.html'
})
export class ListDemoComponent implements OnInit {
  pageNum = 3;
  totalPageNum: number;

  constructor(private parentIndex: Index) { }

  listTest(num, callback) {
    console.warn(num, callback);


    callback();
  }

  ngOnInit() {
    setTimeout(() => this.totalPageNum = 5, 1000);

    // setTimeout(() => this.pageNum = 4, 2500);
  }
}
