import { AppointmentContainer } from '../styledComponent/index'

function Appointment( props ) {
    

    return (
      <AppointmentContainer>
        {props.Name} - Time: {props.Time}: 00
      </AppointmentContainer>
    );
  }
  
  export default Appointment;
  