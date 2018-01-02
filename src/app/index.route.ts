import { Routes, RouterModule } from '@angular/router';
import { Index } from './index';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { AuthService } from '@framework/Service/auth.service';
import { FromDemoComponent, ListDemoComponent } from './index';

export const ROUTES: Routes = [
  {
    path: '',
    component: Index,
    children: [
      { path: 'header', component: CommHeaderComponent },
      { path: 'formDemo', component: FromDemoComponent },
      { path: 'listDemo', component: ListDemoComponent }
    ],
    canActivate: [AuthService]
  }
];
