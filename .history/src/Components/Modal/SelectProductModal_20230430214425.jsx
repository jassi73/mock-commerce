import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "../../Hooks/useFetch";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Product from "../Product";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [pageCount, setPageCount] = useState(9);
  const { data, loading, error } = useFetch(pageCount);
  const loader = useRef();

  const [filteredData, setFilteredData] = new useState();
  const [selectedVarients, setSelectedVarients] = useState({});

  useEffect(() => {
    const finalData = Object.values(selectedVarients).filter(
      (varient) => varient.selected
    );
    console.log("## selectedVarients", selectedVarients, finalData);
  }, [selectedVarients]);

  const updateVarientState = (id, title, newState, variants = []) => {
    setSelectedVarients((data) => ({
      ...data,
      [id]: { id, selected: newState, title, variants },
    }));
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageCount((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const variantHandleChange = (e, item, data) => {
    const { checked } = e.target;
    if (isProductSelected) {
      setIsVariantSelected({
        ...isVariantSelected,
        checked: checked,
        id: data?.product_id,
      });
    } else {
      setProductSelected(true);
    }
  };

  const handleSearchProduct = (e) => {
    const query = e.target.value;
    var updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      return item?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredData(updatedList);
  };
  console.log("filtered data", filteredData);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isSelectProductModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Choose Products"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="inputBox">
            <img src="searchIcon.png" className="inputBoxIcon" alt="" />
            <input
              type="text"
              placeholder="Search products"
              onChange={handleSearchProduct}
            />
          </div>
          <div className="productVariant" id="scrollableDiv">
            {filteredData && filteredData.length > 0
              ? filteredData &&
                filteredData.length &&
                filteredData.map((item) => (
                  <Product
                    key={item.id}
                    variant={item}
                    updateVarientState={updateVarientState}
                    varientState={selectedVarients[item.id]}
                  />
                ))
              : data &&
                data.length &&
                data.map((item) => (
                  <Product
                    key={item.id}
                    product={item}
                    updateVarientState={updateVarientState}
                    varientState={selectedVarients[item.id]}
                  />
                ))}
            <div ref={loader} />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductModal;
