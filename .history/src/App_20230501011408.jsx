import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import NewOne from "./Components/newOne";
import { useEffect, useState } from "react";

const App = () => {
  const initialState = [{ title: "Select the product" }];
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  // const state = JSON.parse(localStorage.getItem("addedProducts"));
  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;
    finalData.splice(desI, 0, finalData.splice(srcI, 1)[0]);
    console.log("afterdrag", finalData);
    setFinalData(finalData)
  };
  console.log("finalData", finalData);
  useEffect(() => {
    setFinalData(JSON.parse(localStorage.getItem("addedProducts")));
  }, [data]);
  const settingData = (data) => {
    setData((prev) => [...prev, data]);
  };

  return (
    <DragDropContext key={1} onDragEnd={onDragEnd}>
      <div className="main">
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {finalData && finalData.length > 0
                ? finalData.map((item, i) => (
                    <Draggable
                      key={item?.id}
                      draggableId={`draggable-${item?.id}`}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <NewOne
                            setData={settingData}
                            key={i}
                            item={item}
                            provided={provided}
                            index={i}
                            variants={item?.variants}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                : initialState.map((item, i) => (
                    <NewOne
                      setData={settingData}
                      key={i}
                      item={item}
                      provided={provided}
                      index={i}
                      variants={item?.variants}
                    />
                  ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
