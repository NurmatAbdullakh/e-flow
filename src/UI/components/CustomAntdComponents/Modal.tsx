import React from "react";
import { Modal, type ModalProps } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  customModal: {
    "& .ant-modal-content": {
      padding: "20px !important",
    },

    "& .ant-modal-body": {
      padding: "24px",
    },

    "& .ant-modal-footer": {
      padding: " 0 24px 24px",
      marginTop: "0",
      textAlign: "center",
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "12px",
    },
    "& .ant-modal-footer button": {
      margin: "0px !important",
    },
  },
});

interface CustomModalProps extends ModalProps {}

const CustomModal: React.FC<CustomModalProps> = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Modal className={classes.customModal} {...rest}>
      {children}
    </Modal>
  );
};

export default CustomModal;
