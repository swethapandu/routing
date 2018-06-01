import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes : Routes =[
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', children :[
     {path:'list', component:UserListComponent, children: [
       {path:'details/:name', component:UserComponent}
     ]}
  ]},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path: '**', redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
