import { useState } from "react";

const NewOne = () => {
  const [isDiscount, setIsDiscount] = useState(false);
  const discountVisible = () => setIsDiscount(true);
  return (
    <div className="mainDv">
      <ul>
        <li>
          <div className="innerDv">
            <img src="/dragIcon.png" height="40" width="32" alt="png file" />
            <div className="innerBox">
              <p>Dummy Text</p>
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
            <a href="#">Show Veriant</a>
          </div>
        </li>
        <ul className="innerVerit">
          <li>
            <div className="innerDv">
              <img src="/dragIcon.png" height="40" width="32" alt="png file" />
              <div className="innerBox">
                <p>Dummy Text</p>
                <a href="#">
                  {" "}
                  <img src="/Vector.png" alt="png file" />
                </a>
              </div>
              <div className="btnBox">
                <a href="#" className="hide">
                  Add Discount
                </a>
                <div className="inputBoxCs">
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" />
                  <a href="#">❌</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="innerDv">
              <img src="/dragIcon.png" height="40" width="32" alt="png file" />
              <div className="innerBox">
                <p>Dummy Text</p>
                <a href="#">
                  {" "}
                  <img src="/Vector.png" alt="png file" />
                </a>
              </div>
              <div className="btnBox">
                <a href="#" className="hide">
                  Add Discount
                </a>
                <div className="inputBoxCs" style={{ display: "none" }}>
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" />
                  <a href="#">❌</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NewOne;
