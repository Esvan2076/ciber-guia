import { Component } from '@angular/core';
import { VideoSectionComponent } from '../../components/video-section/video-section';

@Component({
  selector: 'app-extorsion',
  standalone: true,
  imports: [VideoSectionComponent],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;1&quot; fill=&quot;white&quot;/></svg>'); background-size: 50px 50px;"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        
        <div class="flex items-center gap-6">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-2">Extorsión y Acoso Digital</h1>
            <p class="text-xl text-white/80">Protégete de amenazas y solicitudes de dinero</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Tips Cards -->
        <div class="space-y-8 mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo protegerte?</h2>
          
          <!-- Tip 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">No proporciones información personal</h3>
                <p class="text-gray-600 leading-relaxed">
                  Nunca compartas datos personales, financieros o de ubicación con personas desconocidas. 
                  Los delincuentes pueden usar esta información para extorsionarte o amenazarte más adelante.
                </p>
              </div>
            </div>
          </div>

          <!-- Tip 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Desconfía de encuestas y sorteos</h3>
                <p class="text-gray-600 leading-relaxed">
                  Las "encuestas" o "premios" que solicitan datos personales suelen ser trampas. 
                  Las empresas legítimas nunca piden información sensible por teléfono, SMS o redes sociales.
                </p>
              </div>
            </div>
          </div>

          <!-- Tip 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Confirma emergencias familiares</h3>
                <p class="text-gray-600 leading-relaxed">
                  Si recibes una llamada alegando que un familiar está en problemas y necesita dinero urgente, 
                  <span class="font-semibold text-red-600">cuelga y llama directamente a esa persona</span> para verificar. 
                  Esta es una táctica común de extorsión.
                </p>
              </div>
            </div>
          </div>

          <!-- Tip 4 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Mantén la calma y no actúes bajo presión</h3>
                <p class="text-gray-600 leading-relaxed">
                  Los extorsionadores buscan generar pánico para que actúes sin pensar. 
                  Si recibes amenazas, no respondas ni hagas pagos. Reporta inmediatamente a las autoridades.
                </p>
              </div>
            </div>
          </div>
        </div>

        <app-video-section videoId="ZqhCvKTK98U" title="Extorsión o fraude telefónico: No entregues tus claves" />

        <!-- Emergency Contacts -->
        <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-red-100">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">¿Necesitas ayuda inmediata?</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 089 -->
            <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span class="text-4xl font-extrabold text-gray-900 block">089</span>
              <p class="text-gray-600 font-medium mt-2">Denuncia Anónima</p>
              <p class="text-gray-400 text-sm mt-1">Reporta sin revelar tu identidad</p>
            </div>

            <!-- Fiscalía -->
            <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <span class="text-2xl font-extrabold text-gray-900 block">33 3662 2368</span>
              <p class="text-gray-600 font-medium mt-2">Fiscalía del Estado de Jalisco</p>
              <p class="text-gray-400 text-sm mt-1">Denuncia formal de delitos</p>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="text-gray-600">
              <span class="font-semibold text-red-600">Recuerda:</span> Toda extorsión es un delito. 
              No estás solo/a, las autoridades están para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExtorsionComponent { }
