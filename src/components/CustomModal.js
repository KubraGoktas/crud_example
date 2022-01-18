import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CustomModal = ({open,setOpen,children}) => {
  return (
    <Modal isOpen={open} toggle={()=>setOpen(false)}>
      <ModalHeader toggle={()=>setOpen(false)}>Düzenle</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button style={{background: 'rgba(17, 205, 239, 1)',border:'none'}} onClick={function noRefCheck() {}}>
          Güncelle
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
