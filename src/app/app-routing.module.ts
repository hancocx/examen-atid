import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { BookingModule } from './booking/booking.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { QueryapiComponent } from './queryapi/queryapi.component';
import { ShortterlinkComponent } from './shortterlink/shortterlink.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'queryapi', component: QueryapiComponent},
  {path: 'booking', component: PagesComponent},
  {path: 'shortterlink', component: ShortterlinkComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
