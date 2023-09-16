import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogClassicComponent } from './pages/blog-classic/blog-classic.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    PublicComponent,
    AboutUsComponent,
    BlogClassicComponent,
    BlogDetailsComponent,
    ContactComponent,
    FaqComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ServiceDetailsComponent,
    ServiceComponent,
    TeamDetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
