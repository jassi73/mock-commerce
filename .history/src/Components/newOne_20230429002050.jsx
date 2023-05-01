import { Draggable, Droppable } from "react-beautiful-dnd";
import Variant from "./Variant";
import { useState } from "react";
import initialData from "./data-table";

const NewOne = (props) => {
     const state = initialData;
  const [isDiscount, setIsDiscount] = useState(false);
  const [isVariantVisible, setIsVariantVisible] = useState(false);
  const discountVisible = () => setIsDiscount(true);
  const showVariant = () => setIsVariantVisible(!isVariantVisible);
  return (
    <div className="mainDv">
      <ul>
        <li>
          <div className="innerDv">
            <img src="/dragIcon.png" height="40" width="32" alt="png file" />
            <div className="innerBox">
              <p>{props.item?.content}</p>
              <a href="#">
                <img src="/Vector.png" alt="png file" />
              </a>
            </div>
            <div className="btnBox">
              <a
                href="#"
                className={isDiscount ? "hide" : "dltBtn"}
                onClick={discountVisible}
              >
                Add Discount
              </a>
              <div className={isDiscount ? "inputBoxCs" : "hide"}>
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
                <a href="#">❌</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={isDiscount ? "showVerit" : "hide"}>
            <a href="#" onClick={showVariant}>
              Show Veriant
            </a>
          </div>
        </li>
        <Droppable droppableId="droppable-2">
          {(provided) => (
            <ul
              className={isVariantVisible ? "innerVerit" : "hide"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
               {state.map((item, index)=>(
 <Draggable 
 key={item?.id}
 draggableId={`draggable-${item?.id}`}
 index={index}
 >
 <div>
   <Variant />
 </div>
 </Draggable>
               ))}
              
            </ul>
          )}
        </Droppable>
      </ul>
    </div>
  );
};

export default NewOne;
