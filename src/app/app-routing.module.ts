import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Classic25PageComponent } from './pages/classic25-page/classic25-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'classic25', pathMatch: 'full' },
  { path: 'classic25', component: Classic25PageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
