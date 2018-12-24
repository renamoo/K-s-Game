import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Advanced30PageComponent } from './pages/advanced30-page/advanced30-page.component';
import { Classic25PageComponent } from './pages/classic25-page/classic25-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';

@NgModule({
  declarations: [AppComponent, Classic25PageComponent, Advanced30PageComponent, TopPageComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
