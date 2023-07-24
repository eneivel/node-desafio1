const { getAppointments, createAppointment } = require('./operaciones.js')

const operation = process.argv.slice(2)[0]
const parameters = process.argv.slice(3)
const [nombre, edad, animal, color, enfermedad] = parameters
const newAppointment = {
  nombre,
  edad,
  animal,
  color,
  enfermedad
}

if (!operation) {
  console.log('Ingrese una operación: leer o registrar')
  return
}

if (operation === 'leer') {
  const appointments = getAppointments()
  if (appointments) {
    for (item of appointments) {
      console.log(item)
    }
  } else {
    console.log('No hay citas registradas')
  }
}

if (operation === 'registrar') {
  if (parameters.length !== 5) {
    console.log('Ingrese todos los datos de la cita')
    return
  }

  createAppointment(newAppointment)
}
