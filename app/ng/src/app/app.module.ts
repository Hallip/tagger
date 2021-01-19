import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './components/tags/tags.component';
import { DocInfoComponent } from './components/doc-info/doc-info.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    PreloaderComponent,
    TopBarComponent,
    TagsComponent,
    DocInfoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
