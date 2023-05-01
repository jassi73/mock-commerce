import Options from "./Options";
import { Checkbox } from "@mui/material";

const Product = ({ product, updateVarientState, varientState }) => {
  return (
    <ul>
      <li className="product">
        <Checkbox
          // {...label}
          // defaultChecked
          className="checkmark"
          onChange={() =>
            updateVarientState(
              product.id,
              product.title,
              !varientState?.selected,
              !varientState?.selected ? product.variants : []
            )
          }
          sx={{
            "&.Mui-checked": {
              color: "#008060",
            },
          }}
        />
        <img src={product?.image?.src} height="43" width="30" alt="img" />
        <span>{product?.title}</span>
      </li>
      {product?.variants &&
        product?.variants.length > 0 &&
        product?.variants.map((data) => {
          return (
            <Options
              key={data.id}
              data={data}
              toggleOptionselected={toggleOptionselected}
              optionState={varientState?.variants?.find(
                (val) => val.id === data.id
              )}
            />
          );
        })}
    </ul>
  );
};

export default Product;
