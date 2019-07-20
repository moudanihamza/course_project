import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeService } from './recipes/recipe.service';
import { RoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
