import React, { useState, useEffect } from "react";
import "./style.css";
import Task from "./Task";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [edititems, setEditItems] = useState("");
  const [togglebutton, setToggleButton] = useState(false);
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  const addItems = () => {
    if (!inputdata) {
      alert("plz fil the data");
    } else if (inputdata && togglebutton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === edititems) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      setInputData("");
      setEditItems(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
        completed: false,
        date: new Date()
      };
      setItems([...items, myNewInputData]);
      setInputData("");
      setToggleButton(false);
    }
  };
  const changeStatus = (id) => {
    const updatedItems = items.map((curElem) => {
      if (curElem.id === id) {
        return { ...curElem, completed: !curElem.completed };
      }
      return curElem;
    });
    setItems(updatedItems);
  };
  const deleteitem = (id) => {
    const updateitems = items.filter((curElem) => {
      return curElem.id !== id;
    });
    setItems(updateitems);
  };
  const removeAll = () => {
    setItems([]);
  };
  const updateitem = (index) => {
    const updateditem = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(updateditem.name);
    setEditItems(index);
    setToggleButton(true);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="" />
            <figcaption>ADD Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              className="form-control"
              value={inputdata}
              onChange={(e) => setInputData(e.target.value)}
            />
            {togglebutton ? (
              <i
                className="far-solid fa-edit add-btn far"
                onClick={addItems}
              ></i>
            ) : (
              <i className="fa-solid fa-plus add-btn fa" onClick={addItems}></i>
            )}
          </div>
          <Task items={items} changeStatus={changeStatus} updateitem={updateitem} deleteitem={deleteitem} />
          <div className="show-Items">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default todo;
