export const addAppointment = ( appointmentData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "ADD_APPOINTMENT",
            payload: appointmentData
        })
    }
}

