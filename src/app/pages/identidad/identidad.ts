import { Component } from '@angular/core';
@Component({
  selector: 'app-identidad',
  standalone: true,
  template: `
    <section class="bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-500 py-16 md:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div class="flex items-center gap-6">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </div>
          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-2">Identidad y Hackeo</h1>
            <p class="text-xl text-white/80">Protege tus cuentas y datos personales</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8 mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Fortalece tu seguridad digital</h2>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Usa contraseñas seguras tipo frase</h3>
                <p class="text-gray-600 mb-4">En lugar de palabras simples, usa frases largas que sean fáciles de recordar pero difíciles de adivinar.</p>
                <div class="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p class="text-sm text-gray-500 mb-2">Ejemplo de contraseña segura:</p>
                  <p class="font-mono text-purple-700 font-medium">"MiPerroCorri0EnElParque2024!"</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Activa la verificación en dos pasos (2FA)</h3>
                <p class="text-gray-600">Agrega una capa extra de seguridad. Aunque alguien obtenga tu contraseña, necesitará tu teléfono para acceder.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Verifica identidad en WhatsApp</h3>
                <p class="text-gray-600">Si alguien te pide dinero por WhatsApp (aunque parezca un familiar), llámalo directamente para confirmar.</p>
              </div>
            </div>
          </div>

          <!-- QR Alert -->
          <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-red-800 mb-3">⚠️ Alerta: Códigos QR</h3>
                <p class="text-gray-700">Antes de escanear un código QR, verifica que no haya sido pegado sobre otro. Los estafadores colocan QR falsos en lugares públicos.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-100">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">¿Tu cuenta fue comprometida?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <span class="text-3xl font-extrabold text-gray-900 block">089</span>
              <p class="text-gray-600 font-medium mt-2">Denuncia Anónima</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <span class="text-xl font-extrabold text-gray-900 block">33 3837 6000</span>
              <p class="text-gray-600 font-medium mt-2">Policía Cibernética</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class IdentidadComponent { }
