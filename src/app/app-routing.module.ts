import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewElementComponent } from './components/new-element/new-element.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path: '', component: NewElementComponent},
  {path: 'edit/:id',component: NewElementComponent},
  {path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
