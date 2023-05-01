import { Box, Button, TextField } from "@mui/material";

import CheckboxList from "../ListItem";
import Duallist from "react-duallist";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

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
const styles = (theme) => ({
  modalStyle1: {
    position: "absolute",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    height: "100%",
    display: "block",
  },
});
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const onCancel = () => handleClose();
  const available = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const selected = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const onMove = () => console.log("onMove");

  return (
    <Modal
      open={isSelectProductModal}
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      label="jasi"
      className={this.props.classes.modalStyle1}
    >
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="Search Products"
          // variant="outlined"
        ></TextField>
        <Box>
          <CheckboxList />
        </Box>

        {/* <Button onClick={() => handleClose()}>Close</Button> */}
      </Box>
    </Modal>
  );
};

export default SelectProductModal;