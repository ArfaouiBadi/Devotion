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
import { CommentSectionMainComponent } from './commentSection/comment-section-main/comment-section-main.component';
import { PostSectionMainComponent } from './commentSection/post-section-main/post-section-main.component';
import { AddSurahComponent } from './adminDashboard/dataViewer/surah/add-surah/add-surah.component';
import { ListSurahComponent } from './adminDashboard/dataViewer/surah/list-surah/list-surah.component';
import { DeleteSurahComponent } from './adminDashboard/dataViewer/surah/delete-surah/delete-surah.component';
import { UpdateSurahComponent } from './adminDashboard/dataViewer/surah/update-surah/update-surah.component';
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
          { path: 'update', component: UpdateSurahComponent },
          { path: 'delete', component: DeleteSurahComponent },
        ],
      },
      { path: 'dua', component: DuaComponent },
      { path: 'books', component: BooksComponent },
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
