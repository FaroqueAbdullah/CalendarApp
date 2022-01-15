import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles
} from '../styledComponent/index';

function FormModal( props ) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    if ( data.Name && data.Date && data.Time ) {
      props.onModalSubmit( data )
      props.openModal()
    }
  }

    return (
        <Modal
          isOpen={ props.modalState }
          ariaHideApp={false}
          onRequestClose={props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalHeader>Create Appointment</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            
            <InputContainer>
              <InputSpan>Name:</InputSpan>
              <InputField {...register("Name")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Gender:</InputSpan>
              <InputField {...register("Gender")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Age:</InputSpan>
              <InputField {...register("Age")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Date:</InputSpan>
              <InputField {...register("Date")} type="number" min="1" max="31" placeholder="Type a number 1 - 31"></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Time:</InputSpan>
              <InputField {...register("Time")} type="number" min="1" max="12" placeholder="Type a number 1 - 12"></InputField>
            </InputContainer>
          </ModalBody>
          <ModalFooter>
              <ModalSubmit>Submit</ModalSubmit>
              <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
          </ModalFooter>
          </form>
        </Modal>
    );
  }
  
  export default FormModal;