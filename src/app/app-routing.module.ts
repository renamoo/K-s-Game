import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Advanced30PageComponent } from './pages/advanced30-page/advanced30-page.component';
import { Classic25PageComponent } from './pages/classic25-page/classic25-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'classic25', pathMatch: 'full' },
  { path: 'classic25', component: Classic25PageComponent },
  { path: 'advanced30', component: Advanced30PageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
