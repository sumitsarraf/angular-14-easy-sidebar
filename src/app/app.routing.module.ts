import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './views/default.component';
import { DashboardComponent } from './views/dashboard.component';
import { HTML_n_CSSComponent } from './views/category/html-n-css.component';
import { JavascriptComponent } from './views/category/javascript.component';
import { PHP_n_MySQLComponent } from './views/category/php-n-mysql.component';
import { WebDesignComponent } from './views/posts/web-design.component';
import { LoginFormComponent } from './views/posts/login-form.component';
import { CardDesignComponent } from './views/posts/card-design.component';
import { AnalyticsComponent } from './views/analytics.component';
import { ChartComponent } from './views/chart.component';
import { UIFaceComponent } from './views/plugins/ui-face.component';
import { PigmentsComponent } from './views/plugins/pigments.component';
import { BoxIconsComponent } from './views/plugins/box-icons.component';
import { ExploreComponent } from './views/explore.component';
import { HistoryComponent } from './views/history.component';
import { SettingComponent } from './views/setting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'html-n-css', component: HTML_n_CSSComponent, canActivate: [AuthGuard] },
  { path: 'javascript', component: JavascriptComponent, canActivate: [AuthGuard] },
  { path: 'php-n-mysql', component: PHP_n_MySQLComponent, canActivate: [AuthGuard] },
  { path: 'posts/web-design', component: WebDesignComponent, canActivate: [AuthGuard] },
  { path: 'posts/login-form', component: LoginFormComponent, canActivate: [AuthGuard] },
  { path: 'posts/card-design', component: CardDesignComponent, canActivate: [AuthGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
  { path: 'ui-face', component: UIFaceComponent, canActivate: [AuthGuard] },
  { path: 'pigments', component: PigmentsComponent, canActivate: [AuthGuard] },
  { path: 'box-icons', component: BoxIconsComponent, canActivate: [AuthGuard] },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }