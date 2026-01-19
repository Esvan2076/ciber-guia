import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 shadow-xl sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span class="text-white font-bold text-lg tracking-tight hidden sm:block">
              Ciber-Guía <span class="text-cyan-300">Zapopan</span>
            </span>
          </a>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="bg-white/20" [routerLinkActiveOptions]="{exact: true}" 
               class="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium">
              Inicio
            </a>
            <a routerLink="/extorsion" routerLinkActive="bg-white/20"
               class="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium">
              Extorsión
            </a>
            <a routerLink="/fraude" routerLinkActive="bg-white/20"
               class="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium">
              Fraude
            </a>
            <a routerLink="/identidad" routerLinkActive="bg-white/20"
               class="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium">
              Identidad
            </a>
            <a routerLink="/ninos" routerLinkActive="bg-white/20"
               class="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm font-medium">
              Niños
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMenu()" class="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              @if (!isMenuOpen) {
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              }
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (isMenuOpen) {
          <div class="md:hidden py-4 space-y-1 border-t border-white/10">
            <a routerLink="/" (click)="toggleMenu()" routerLinkActive="bg-white/20" [routerLinkActiveOptions]="{exact: true}"
               class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
              Inicio
            </a>
            <a routerLink="/extorsion" (click)="toggleMenu()" routerLinkActive="bg-white/20"
               class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
              Extorsión
            </a>
            <a routerLink="/fraude" (click)="toggleMenu()" routerLinkActive="bg-white/20"
               class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
              Fraude
            </a>
            <a routerLink="/identidad" (click)="toggleMenu()" routerLinkActive="bg-white/20"
               class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
              Identidad
            </a>
            <a routerLink="/ninos" (click)="toggleMenu()" routerLinkActive="bg-white/20"
               class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
              Niños
            </a>
          </div>
        }
      </nav>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
