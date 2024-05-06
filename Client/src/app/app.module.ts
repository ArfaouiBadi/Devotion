import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './component/test/test.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { CategoryDuasAndZikrComponent } from './component/category-duas-and-zikr/category-duas-and-zikr.component';
import { PrayerTimeComponent } from './component/prayer-time/prayer-time.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BasicOfIslamComponent } from './component/basic-of-islam/basic-of-islam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DuasAndZikrComponent } from './component/duas-and-zikr/duas-and-zikr.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    CategoryDuasAndZikrComponent,
    PrayerTimeComponent,
    HomePageComponent,
    BasicOfIslamComponent,
    DuasAndZikrComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
