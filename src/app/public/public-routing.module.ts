import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogClassicComponent } from './pages/blog-classic/blog-classic.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-classic', component: BlogClassicComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'team-details', component: TeamDetailsComponent },
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
