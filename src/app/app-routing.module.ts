import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AboutComponent } from './features/pages/about/about.component';
import { GraphicDesignComponent } from './features/components/graphic-design/graphic-design.component';
import { AppsComponent } from './features/components/apps/apps.component';
import { SoftwareComponent } from './features/components/software/software.component';
import { SkillsComponent } from './features/pages/skills/skills.component';
import { ExperienceComponent } from './features/pages/experience/experience.component';
import { WorkComponent } from './features/pages/work/work.component';

const routes: Routes = [
      {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'home page'},
    {path:'about', component:AboutComponent, title:'about page'},
    {path:'skills', component:SkillsComponent, title:'skills page'},
    {path:'experience', component:ExperienceComponent, title:'experience page'},
    {path:'work', component:WorkComponent, title:'work page', children:
      [
      {path:'',redirectTo:'graphicDesign',pathMatch:'full'},
        {path:'graphicDesign',component:GraphicDesignComponent},
        {path:'apps',component:AppsComponent},
        {path:'software',component:SoftwareComponent},
      ]
    },
    {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
