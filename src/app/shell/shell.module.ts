import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, LanguageSelectorComponent],
  exports: [HeaderComponent, SidebarComponent, LanguageSelectorComponent],
  imports: [CommonModule, SidebarModule, ButtonModule, RippleModule, BrowserModule, BrowserAnimationsModule, MenuModule],
})
export class ShellModule {}
