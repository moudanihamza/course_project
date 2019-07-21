import { LogginInterceptor } from './../shared/loggin.interceptor';
import { AuthInterceptor } from './../shared/auth.interceptor';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from '../app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    RoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]

})
export class CoreModule { }
