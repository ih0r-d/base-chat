import {Routes} from '@angular/router';
import {SignupFormComponent} from './app/signup-form/signup-form.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {ChatRoomComponent} from './app/chat-room/chat-room.component';

export const routes: Routes = [
  {path: 'sign', component: SignupFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'chat', component: ChatRoomComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];
