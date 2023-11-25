import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { VilleComponent } from './components/ville/ville.component';
import { HttpClientModule } from '@angular/common/http';
import { ListboxModule } from 'primeng/listbox';
import { Panel, PanelModule } from 'primeng/panel';
import { PanelComponent } from './components/panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListcinemaComponent } from './components/listcinema/listcinema.component';

const routes:Routes=[
  { path:"panel",component:PanelComponent },
  { path:"ville",component:VilleComponent },
  { path:"pannel/:id",component:PanelComponent },
  { path:"cinemaid/:id",component:ListcinemaComponent},
]

  

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VilleComponent,
    PanelComponent,
    ListcinemaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    RadioButtonModule,
    SelectButtonModule,
    HttpClientModule,
    PanelModule,
    ListboxModule,
    FormsModule,
    TabMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
