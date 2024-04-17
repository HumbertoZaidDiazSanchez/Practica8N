function calcularPromedio() {
  // Obtener los valores de las calificaciones y otros datos
  const nombre = document.getElementById('nombre').value;
  const matricula = document.getElementById('matricula').value;
  const taller = parseFloat(document.getElementById('taller').value);
  const programacion = parseFloat(document.getElementById('programacion').value);
  const sistemas = parseFloat(document.getElementById('sistemas').value);
  const tecnologias = parseFloat(document.getElementById('tecnologias').value);

  // Calcular el promedio general
  const promedioGeneral = (taller + programacion + sistemas + tecnologias) / 4;

  // Mostrar las calificaciones en la tabla
  document.getElementById('taller-calificacion').textContent = taller.toFixed(1);
  document.getElementById('programacion-calificacion').textContent = programacion.toFixed(1);
  document.getElementById('sistemas-calificacion').textContent = sistemas.toFixed(1);
  document.getElementById('tecnologias-calificacion').textContent = tecnologias.toFixed(1);
  document.getElementById('promedio-general').textContent = promedioGeneral.toFixed(2);
  document.getElementById('nombre-alumno').textContent = `Nombre del alumno: ${nombre}`;
  document.getElementById('matricula-alumno').textContent = `Matrícula: ${matricula}`;
}