/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function(state, appointments, id) {
  let index;
  let appointmentIDs;
  let spots = 0;

  // Declare a copy (not reference) of the days array from states.
  const days = [...state.days];
  const selectedDay = state.day;

  // Get the appointment IDs for the selected day.
  days.forEach(day => {
    if (day.name === selectedDay) {
      index = day.id - 1;
      appointmentIDs = day.appointments;
    }
  })

  // Increment spots when the interview key-value for the selected appointment id is falsey (null).
  appointmentIDs.forEach(id => !appointments[id].interview ? spots++ : null);

  // Update the remaining spots for the selected day.
  days[index] = {...days[index], spots};

  // return an updated days array 
  return days;
};

module.exports = updateSpots;
