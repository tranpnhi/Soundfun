import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';


import { FormsModule } from '@angular/forms';

import { BannersComponent } from './banners/banners.component';
import { BannersAdminComponent } from './banners-admin/banners-admin.component';
import { BannerNewComponent } from './banner-new/banner-new.component';
import { AdminComponent } from './admin/admin.component';
import { SoundsAdminComponent } from './sounds-admin/sounds-admin.component';
import { SoundNewComponent } from './sound-new/sound-new.component';
import { SoundUpdateComponent } from './sound-update/sound-update.component';
import { SoundSearchComponent } from './sound-search-id-admin/sound-search.component';
import { SoundSearchGenreComponent } from './sound-search-genre/sound-search-genre.component';
import { PayComponent } from './pay/pay.component';
import { SoundSearchIdComponent } from './sound-search-id/sound-search-id.component';

@NgModule({
  declarations: [
    
    AppComponent,
    BannersComponent,
    BannersAdminComponent,
    BannerNewComponent,
    AdminComponent,
    SoundsAdminComponent,
    SoundNewComponent,
    SoundUpdateComponent,
    SoundSearchComponent,
    SoundSearchGenreComponent,

    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PayComponent,
    SoundSearchIdComponent
  ],
  imports: [
    FormsModule,
    GooglePayButtonModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

