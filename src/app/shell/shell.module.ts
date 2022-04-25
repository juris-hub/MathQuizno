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


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, LanguageSelectorComponent],
  exports: [HeaderComponent, SidebarComponent, LanguageSelectorComponent],
  imports: [CommonModule, SidebarModule, ButtonModule, RippleModule, BrowserModule, BrowserAnimationsModule],
})
export class ShellModule {}
