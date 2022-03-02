import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginateComponent } from './paginate/paginate.component';
import { PagerService } from './paginate/pager.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PaginateComponent],
  providers: [PagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
