import { Stack, TextField, Typography } from "@mui/material";

import SelectProductModal from "./Modal/SelectProductModal";
import SelectTextFields from "./TextField";
import { useState } from "react";

const ProductVariant = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelectProductModal, setIsSelectProductModal] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const openSelectProductModal = () => {
    setIsSelectProductModal(true);
  };
  const handleClose = () => {
    setIsSelectProductModal(false);
  };

  const showVariant = () => {
    setIsVariantVisible(true);
  };

  return (
    <div key={props.key} className="container">
      <Stack
        direction="row"
        sx={{
          border: "1px solid lightgrey",
          borderRadius: "2px",
          padding: "8px",
          marginBottom: "8px",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <Typography>{props.task.content}</Typography>

        <Stack sx={{ cursor: "pointer" }} onClick={openSelectProductModal}>
          ✏️
        </Stack>
      </Stack>
      <div className="discount">
        <Stack>
          <div className="discountInput">
            <TextField variant="filled"></TextField>
            <SelectTextFields />
          </div>
        </Stack>
      </div>

      <SelectProductModal
        isSelectProductModal={isSelectProductModal}
        handleClose={handleClose}
      />
    </div>
  );
};
export default ProductVariant;
