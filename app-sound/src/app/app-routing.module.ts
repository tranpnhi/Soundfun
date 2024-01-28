import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { BannersAdminComponent } from './banners-admin/banners-admin.component';
import { BannerNewComponent } from './banner-new/banner-new.component';
import { BannersComponent } from './banners/banners.component';
import { AdminComponent } from './admin/admin.component';
import { SoundsAdminComponent } from './sounds-admin/sounds-admin.component';
import { SoundNewComponent } from './sound-new/sound-new.component';
import { SoundUpdateComponent } from './sound-update/sound-update.component';
import { SoundSearchComponent } from './sound-search-id-admin/sound-search.component';
import { SoundSearchIdComponent } from './sound-search-id/sound-search-id.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  {path: 'admin', component: AdminComponent},
  {path: 'soundadmin', component: SoundsAdminComponent},
  {path: 'soundsadmin/:id',component:SoundSearchComponent},
  {path: 'soundnew', component: SoundNewComponent},
  {path: 'soundupdate', component: SoundUpdateComponent},

  {path: 'banneradmin', component: BannersAdminComponent},
  {path: 'bannernew', component: BannerNewComponent},
  {path: 'banners/', component: BannersComponent},

  {path: 'home/searchid', component: SoundSearchIdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
