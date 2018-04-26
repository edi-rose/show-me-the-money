
export function addAttendee (attendee) {
  return {
    type:'ADD_ATTENDEE',
    attendee
  }
}

export function addTitle (title) {
  return {
    type:'ADD_TITLE',
    title
  }
}

export function removeAttendee (i) {
  return {
    type:'REMOVE_ATTENDEE',
    index
  }
}

export function getAttendees() {
  return {
    type:'GET_ATTENDEES'
  }
}
