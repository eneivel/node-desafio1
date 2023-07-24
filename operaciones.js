const fs = require('fs')

const appointmentsList = fs.existsSync('./citas.json')
  ? fs.readFileSync('./citas.json', 'utf-8')
  : null

const getAppointments = () => {
  const data = JSON.parse(appointmentsList)
  return data
}

const createAppointment = (appointment) => {
  if (!appointmentsList) {
    fs.writeFileSync('./citas.json', JSON.stringify([appointment]), 'utf-8')
  } else {
    const appointments = JSON.parse(appointmentsList)
    appointments.push(appointment)
    fs.writeFileSync('./citas.json', JSON.stringify(appointments), 'utf-8')
  }
}

module.exports = {
  getAppointments,
  createAppointment
}
