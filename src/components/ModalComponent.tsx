import { Box, Modal } from "@mui/material";
import React from "react";

interface ModalComponentProps {
  id: number;
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  id,
  open,
  children,
  onClose,
}) => {
  const isClient = typeof window === "object";
  console.log("Modal isClient", isClient);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div>{children}</div>
        <p>post number: {id}</p>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
