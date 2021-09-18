import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RecipeModule } from './recipe/recipe.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppStore } from './app.store';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    RouterModule.forRoot(appRoutes),
    SearchBarModule
  ],
  providers:[
    AppStore,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
