// Lib
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Index, FromDemoComponent, ListDemoComponent, GTabServer } from './index';
import { ROUTES } from './index.route';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 组件
import { SearchService } from '@framework/Component/Search/search.component';
import { SearchComponent } from '@framework/Component/Search/search.component';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { TimeComponent } from '@framework/Component/Timer/time.component';
import { FormSelectorComponent, ValuePipe } from '@framework/Component/FormSelector/selector.component';
import {
  NavigationComponent,
  NavigationService,
  NavigationPipe
} from '@framework/Component/Navigation/navigation.component';
import {
  LoadingComponent,
  LoadingService
} from '@framework/Component/Loading/loading.component';
import { TabsComponent } from '@framework/Component/Tabs/tabs.component';
import { PageNumComponent } from '@framework/Component/PageNum/pageNum.component';
import { UploadImgComponent } from '@framework/Component/UploadImg/uploadImg.component';
import { EditorComponent } from '@framework/Component/Editor/editor.component';
import { SelectComponent } from '@framework/Component/Select/select.component';

// 指令
import { ScrollDirective } from '@framework/Directive/scroll.directive';

// 服务
import { AuthService } from '@framework/Service/auth.service';
import { TokenService } from '@framework/Service/token.service';
import { ReloadService, LogOutService } from '@framework/Service/control.service.ts';
import { EventQueue } from '@framework/Utils/EventQueue';
import { DebugService } from '@framework/Service/debug.service';



@NgModule({
  declarations: [
    Index,
    CommHeaderComponent,
    TimeComponent,
    SearchComponent,
    LoadingComponent,
    NavigationComponent, NavigationPipe,
    TabsComponent,
    PageNumComponent,
    FormSelectorComponent,
    ScrollDirective,
    ValuePipe,
    UploadImgComponent,
    EditorComponent,
    SelectComponent,
    FromDemoComponent,
    ListDemoComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    SearchService,
    LoadingService,
    NavigationService,
    AuthService,
    ReloadService,
    LogOutService,
    TokenService,
    EventQueue,
    LogOutService,
    GTabServer,
    DebugService
  ],
  exports: [
    LoadingComponent,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class IndexModule {
}
