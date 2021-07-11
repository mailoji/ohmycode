import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Todo/add/add.component';
import { EditComponent } from './Todo/edit/edit.component';
import { ListarComponent } from './Todo/listar/listar.component';
import { LoginComponent } from './Todo/login/login.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
