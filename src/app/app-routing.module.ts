import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paginaPrincipalComponent } from './pages/kardex/paginaPrincipal/paginaPrincipal.component';

const routes: Routes = [
  {
    path: 'procedimientos/maestro',
    component: paginaPrincipalComponent,
  },
  {
    path: '**',
    redirectTo: 'procedimientos/maestro',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
