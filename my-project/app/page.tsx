'use client';

import { useState } from 'react';

export default function Page() {        // Renderizado condicional basado en la página actual
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'recursos' | 'sobre nosotros' | 'faq' | 'notFound'>('home'); 

  /*╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼*/
  /*╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼*/
  
  if (currentPage === 'home') {  // Página principal 
    
    return ( 
      
      <div className="overflow-hidden bg-white min-h-screen  dark:bg-gray-950"> 

        <div className="fixed inset-x-0 top-0 z-10 border-b font-serif border-black dark:border-gray-800">
          <div className="bg-white dark:bg-gray-950">
            <div className="flex h-13 items-center justify-between gap-8 px-4 sm:px-6"> 
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">☼</span> <span></span>
                <span className="text-2xl font-bold"> La Escuelita</span>
              </div>
              <div className="flex items-center gap-3 max-md:hidden text-1xl">
                <div className="pl-4 relative" onClick={() => setCurrentPage('home')}>
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block">Inicio</div>
                </div>
                <div className="border-l border-black dark:border-gray-800 pl-3 relative" onClick={() => setCurrentPage('blog')}> 
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block"> Blog</div>
                </div>
                <div className="border-l border-black dark:border-gray-800 pl-3 relative" onClick={() => setCurrentPage('blog')}> {/* cambiar por recursos */}
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block"> Recursos</div>
                </div>
                <div className="border-l border-black dark:border-gray-800 pl-3 relative" onClick={() => setCurrentPage('blog')}> {/* cambiar por sobre nosotros */}
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block"> Sobre Nosotros</div>
                </div>
                <div className="border-l border-black dark:border-gray-800 pl-3 relative" onClick={() => setCurrentPage('blog')}> {/* cambiar por faq */}
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block"> FAQ</div>
                </div>
                <div className="border-l border-black dark:border-gray-800 pl-3 relative" onClick={() => setCurrentPage('blog')}> 
                  <div className="rounded-lg hover:cursor-pointer active:inset-shadow-[0_0px_40px_rgba(0,230,200,0.4)] hover:inset-shadow-[0_0px_40px_rgba(0,180,150,0.4)] transition px-3 py-1 inline-block"> Usuario</div>
                
                  <div> </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-22 mx-80 rounded-4xl min-h-10 dark:bg-gray-950 inset-shadow-[0_0px_100px_rgba(0,255,150,0.15)]">
          <div className="text-7xl font-serif text-emerald-100  text-center p-20">
            Un lugar de encuentro para el bienestar de todas las personas.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10 mx-35 mb-10">
          <div className="min-h-70 rounded-4xl p-4 inset-shadow-[0_0px_100px_rgba(0,180,120,0.15)]"></div>
          <div className="min-h-70 rounded-4xl p-4 inset-shadow-[0_0px_100px_rgba(0,180,120,0.15)]"></div>
          <div className="min-h-70 rounded-4xl p-4 inset-shadow-[0_0px_100px_rgba(0,180,120,0.15)]"></div>
        </div>


        <div>
          <div className="mt-10 ml-80 mr-80 mb-10 min-h-70 rounded-4xl dark:bg-gray-950 p-4 inset-shadow-[0_0px_100px_rgba(0,180,120,0.15)]">

          </div>
        </div>

        <footer className="bg-gray-800 text-white text-center py-4 min-h-15 w-full relative bottom-0 text-xs">
          <p> &copy; {new Date().getFullYear()} La Escuelita. Todos los derechos compartidos.</p>
          <p className="mt-1">Creciendo juntos, pasito a pasito.</p>
        </footer>

      </div>    
            
      /*<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">Inicio</h1>
        <button
          onClick={() => setCurrentPage('blog')}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Ir a Contacto
        </button>
      </div>*/
    );

    /*╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼*/

  } else if (currentPage === 'blog') {
    // Blog
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-semibold text-green-600">Me llamo Juan</h1>
        <button
          onClick={() => setCurrentPage('home')}
          className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg text-lg hover:bg-gray-700 transition"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

/*╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼*/

  // Página no encontrada
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold text-red-600">Página no encontrada</h1>
      <button
        onClick={() => setCurrentPage('home')}
        className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg text-lg hover:bg-gray-700 transition"
      >
        Volver al Inicio
      </button>
    </div>
  );
}