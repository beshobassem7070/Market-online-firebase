import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CardComponent } from './components/card/card.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './services/guards/auth.guard';


// tslint:disable-next-line: max-line-length
const routes: Routes = [{path: '', component: HomeComponent , data: {index: 0}}, // data ===  ده معناها انه بيمرر داتا معينه اثناء عمليه الراوتنج
{path: 'login', component: LoginComponent, data: {index: 1}},
{path: 'singup' , component: SignupComponent, data: {index: 2}},
{path: 'cart' , component: CardComponent , canActivate: [AuthGuard] , data: {index: 3}},
{path: 'admin' , component: GoodsComponent},
{path: '**' , component: NotfoundComponent, data: {index: 4}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
