import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { Page404Component } from './pages/404/404.component';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { Demo3Component } from './pages/demo3/demo3.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo1', pathMatch: 'full' },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'chrono', component: ChronoComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
