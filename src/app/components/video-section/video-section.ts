import { Component, Input, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-section',
  standalone: true,
  template: `
    <section class="py-12 mb-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">{{ title }}</h2>
          <div class="relative w-full overflow-hidden aspect-video bg-gray-900">
            <iframe 
              [src]="safeUrl" 
              [title]="title"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  `
})
export class VideoSectionComponent implements OnInit {
  @Input({ required: true }) videoId!: string;
  @Input() title: string = 'Video Informativo';

  private sanitizer = inject(DomSanitizer);
  safeUrl!: SafeResourceUrl;

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }
}
