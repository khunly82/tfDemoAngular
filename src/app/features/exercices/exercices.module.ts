import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './pages/imc/imc.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Ex4Component } from './pages/ex4/ex4.component';
import { countryResolver } from './resolvers/country.resolver';
import { isLoggedGuard } from '../../core/guards/is-logged.guard';

const routes: Routes = [
  { path: 'chrono', component: ChronoComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'todo', component: TodoListComponent, canActivate: [isLoggedGuard] },
  { path: 'ex4', component: Ex4Component, resolve: { countries: countryResolver } },
]

@NgModule({
  declarations: [
    ChronoComponent,
    ImcComponent,
    TodoListComponent,
    Ex4Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    FloatLabelModule,
    CardModule,
    FormsModule,
    CheckboxModule,
  ]
})
export class ExercicesModule { }
