import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Swal from "sweetalert2";

const CustomModal = ({ open, setOpen, children }) => {
  const handleUpdate = () => {
    Swal.fire({
      icon: 'question',
      title: 'Kaydı silmek istediğinize emin misiniz?',
      showCancelButton: true,
      cancelButtonText: 'Vazgeç',
      confirmButtonText: 'Evet',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Kayıt Başarıyla Silindi!', '', 'success')
      }
    })
  }
  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
      <ModalHeader toggle={() => setOpen(false)}>Düzenle</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button style={{ background: 'rgba(17, 205, 239, 1)', border: 'none' }} onClick={() => handleUpdate()}>
          Güncelle
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
