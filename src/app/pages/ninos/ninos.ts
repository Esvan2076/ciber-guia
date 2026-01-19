import { Component } from '@angular/core';
@Component({
  selector: 'app-ninos',
  standalone: true,
  template: `
    <section class="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 py-16 md:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div class="flex items-center gap-6">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </div>
          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-2">Niños y Videojuegos</h1>
            <p class="text-xl text-white/80">Guía para padres sobre seguridad digital infantil</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Age Classifications -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Clasificaciones de Videojuegos</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-green-100 rounded-2xl p-6 text-center border-2 border-green-300 hover:scale-105 transition-transform duration-300">
              <span class="text-4xl font-extrabold text-green-700">A</span>
              <p class="text-green-800 font-medium mt-2">Todas las edades</p>
            </div>
            <div class="bg-yellow-100 rounded-2xl p-6 text-center border-2 border-yellow-300 hover:scale-105 transition-transform duration-300">
              <span class="text-4xl font-extrabold text-yellow-700">B12</span>
              <p class="text-yellow-800 font-medium mt-2">Mayores de 12 años</p>
            </div>
            <div class="bg-orange-100 rounded-2xl p-6 text-center border-2 border-orange-300 hover:scale-105 transition-transform duration-300">
              <span class="text-4xl font-extrabold text-orange-700">C</span>
              <p class="text-orange-800 font-medium mt-2">Mayores de 15 años</p>
            </div>
            <div class="bg-red-100 rounded-2xl p-6 text-center border-2 border-red-300 hover:scale-105 transition-transform duration-300">
              <span class="text-4xl font-extrabold text-red-700">D</span>
              <p class="text-red-800 font-medium mt-2">Solo adultos (18+)</p>
            </div>
          </div>
        </div>

        <div class="space-y-8 mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Consejos de seguridad</h2>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">No compartan datos personales en juegos</h3>
                <p class="text-gray-600">Enseña a tus hijos a nunca revelar su nombre real, escuela, dirección o fotos en juegos online.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Supervisa sus contactos</h3>
                <p class="text-gray-600">Revisa con quién juegan y chatean. Los depredadores buscan ganarse la confianza de menores.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Seguridad en clases virtuales</h3>
                <p class="text-gray-600">Verifica que las plataformas de videollamadas sean las oficiales de la escuela. Mantén la cámara solo encendida cuando sea necesario.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Establece límites de tiempo</h3>
                <p class="text-gray-600">Usa controles parentales para limitar el tiempo de juego y acceso a contenido inapropiado.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">¿Tu hijo está en riesgo?</h2>
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
            <span class="text-3xl font-extrabold text-gray-900 block">911</span>
            <p class="text-gray-600 font-medium mt-2">Emergencias</p>
            <p class="text-gray-400 text-sm mt-1">Si sospechas de acoso o explotación</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class NinosComponent { }
