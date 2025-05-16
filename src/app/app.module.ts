import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SkillsComponent } from './features/pages/skills/skills.component';
import { ExperienceComponent } from './features/pages/experience/experience.component';
import { WorkComponent } from './features/pages/work/work.component';
import { GraphicDesignComponent } from './features/components/graphic-design/graphic-design.component';
import { AppsComponent } from './features/components/apps/apps.component';
import { SoftwareComponent } from './features/components/software/software.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    GraphicDesignComponent,
    AppsComponent,
    SoftwareComponent,
    NavbarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
