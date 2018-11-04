import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      state: 'home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      state: 'about'
    }
  },
  {
    path: 'skills',
    component: SkillComponent,
    data: {
      state: 'skills'
    }
  },
  {
    path: 'work',
    component: WorkComponent,
    data: {
      state: 'work'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      state: 'contact'
    }
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
