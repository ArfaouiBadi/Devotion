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

import { DuasAndZikrComponent } from './component/duas-and-zikr/duas-and-zikr.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThumbnailComponent } from './component/thumbnail/thumbnail.component';
import { HadithComponent } from './component/hadith/hadith.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SurahComponent } from './adminDashboard/dataViewer/surah/surah.component';
import { DuaComponent } from './adminDashboard/dataViewer/dua/dua.component';
import { BooksComponent } from './adminDashboard/dataViewer/books/books.component';
import { MessageService, SelectItem } from 'primeng/api';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { VerseDisplayComponent } from './verse-display/verse-display.component';
import { VerseNavigationComponent } from './verse-navigation/verse-navigation.component';
import { VerseHeaderComponent } from './verse-header/verse-header.component';
import { VersePageComponent } from './verse-page/verse-page.component';
import { CommentSectionMainComponent } from './commentSection/comment-section-main/comment-section-main.component';
import { PostSectionMainComponent } from './commentSection/post-section-main/post-section-main.component';
import { AddSurahComponent } from './adminDashboard/dataViewer/surah/add-surah/add-surah.component';
import { UpdateSurahComponent } from './adminDashboard/dataViewer/surah/update-surah/update-surah.component';
import { ListSurahComponent } from './adminDashboard/dataViewer/surah/list-surah/list-surah.component';
import { AddHadithComponent } from './adminDashboard/dataViewer/hadith/add-hadith/add-hadith.component';
import { UpdateHadithComponent } from './adminDashboard/dataViewer/hadith/update-hadith/update-hadith.component';
import { HadithCRUDComponent } from './adminDashboard/dataViewer/hadith-crud/hadith-crud.component';
import { ListHadithComponent } from './adminDashboard/dataViewer/hadith/list-hadith/list-hadith.component';
import { ListDuaComponent } from './adminDashboard/dataViewer/dua/list-dua/list-dua.component';
import { UpdateDuaComponent } from './adminDashboard/dataViewer/dua/update-dua/update-dua.component';
import { AddDuaComponent } from './adminDashboard/dataViewer/dua/add-dua/add-dua.component';

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
    ThumbnailComponent,
    AdminDashboardComponent,
    SurahComponent,
    DuaComponent,
    BooksComponent,
    VerseDisplayComponent,
    VerseNavigationComponent,
    VerseHeaderComponent,
    VersePageComponent,
    CommentSectionMainComponent,
    PostSectionMainComponent,
    AddSurahComponent,
    UpdateSurahComponent,
    ListSurahComponent,
    AddHadithComponent,
    UpdateHadithComponent,
    HadithComponent,
    HadithCRUDComponent,
    ListHadithComponent,
    ListDuaComponent,
    UpdateDuaComponent,
    AddDuaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    ToastModule,
    TableModule,
    TagModule,
    DropdownModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
