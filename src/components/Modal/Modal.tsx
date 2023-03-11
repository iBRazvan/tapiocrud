import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form/Form";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  currentId?: number | null;
  setCurrentId: React.Dispatch<React.SetStateAction< number | null >>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction< boolean >>;
}

const ModalComponent = ({ currentId, setCurrentId, open, setOpen }: ModalProps) => {
  
  const handleClose = () => {
    setOpen(false); 
    setCurrentId(0);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;
