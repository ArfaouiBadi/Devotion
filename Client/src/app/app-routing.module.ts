import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { userGuard } from './guard/user.guard';
import { adminGuard } from './guard/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurahComponent } from './adminDashboard/dataViewer/surah/surah.component';
import { DuaComponent } from './adminDashboard/dataViewer/dua/dua.component';
import { BooksComponent } from './adminDashboard/dataViewer/books/books.component';
import { VersePageComponent } from './verse-page/verse-page.component';
import { PostSectionMainComponent } from './commentSection/post-section-main/post-section-main.component';
import { AddSurahComponent } from './adminDashboard/dataViewer/surah/add-surah/add-surah.component';
import { UpdateSurahComponent } from './adminDashboard/dataViewer/surah/update-surah/update-surah.component';
import { ListSurahComponent } from './adminDashboard/dataViewer/surah/list-surah/list-surah.component';
import { HadithComponent } from './component/hadith/hadith.component';
import { AddHadithComponent } from './adminDashboard/dataViewer/hadith/add-hadith/add-hadith.component';
import { UpdateHadithComponent } from './adminDashboard/dataViewer/hadith/update-hadith/update-hadith.component';
import { HadithCRUDComponent } from './adminDashboard/dataViewer/hadith-crud/hadith-crud.component';
import { ListHadithComponent } from './adminDashboard/dataViewer/hadith/list-hadith/list-hadith.component';
import { AddDuaComponent } from './adminDashboard/dataViewer/dua/add-dua/add-dua.component';
import { UpdateDuaComponent } from './adminDashboard/dataViewer/dua/update-dua/update-dua.component';
import { ListDuaComponent } from './adminDashboard/dataViewer/dua/list-dua/list-dua.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'posts',
    component: PostSectionMainComponent,
  },

  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'surah',
        component: SurahComponent,
        children: [
          { path: '', component: ListSurahComponent },
          { path: 'add', component: AddSurahComponent },
          { path: 'update/:id', component: UpdateSurahComponent },
        ],
      },
      {
        path: 'dua',
        component: DuaComponent,
        children: [
          { path: '', component: ListDuaComponent },
          { path: 'add', component: AddDuaComponent },
          { path: 'update/:id', component: UpdateDuaComponent },
        ],
      },

      { path: 'books', component: BooksComponent },
      {
        path: 'hadith',
        component: HadithCRUDComponent,
        children: [
          { path: '', component: ListHadithComponent },
          { path: 'add', component: AddHadithComponent },
          { path: 'update/:id', component: UpdateHadithComponent },
        ],
      },
    ],
  },
  {
    path: 'Quran',
    component: VersePageComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
