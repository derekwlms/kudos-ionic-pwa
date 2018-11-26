import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
