import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PhotoComponent } from './components/photo/photo.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PhotoService } from './service/photoservice/photo.service';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'home',component:PhotoComponent},
  {path:'registration', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[PhotoService]
})
export class AppRoutingModule { }
