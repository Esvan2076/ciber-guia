import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    template: `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class LayoutComponent { }
