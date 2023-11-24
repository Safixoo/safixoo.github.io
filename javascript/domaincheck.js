var currentDomain = window.location.hostname;
  
// Checkea que el código se este ejecutando de forma local o en el dominio
// Mejora los checkeos de href, simplifica el código y mejora la cantidad de archivos        
if (currentDomain === 'safixoo.github.io') {
    // Setea los archivos sobre el dominio
    document.write('<base href="https://safixoo.github.io/">');
} else {
    // Setea los archivos para la unidad local (cambiar dependiendo de la zona de trabajo)
     document.write('<base href="file:///C:/Users/Santiago%20Cámera/Desktop/Projecto%20WEV/safixoo.github.io/">');
}