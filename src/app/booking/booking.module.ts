import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class BookingModule { }
