import React from 'react'

const Task = ({items , changeStatus , updateitem , deleteitem}) => {
  return (
    <>
     <div className="showItemsMain">
            {items?.length === 0 ? (
              <p className="noPC">No Today Task</p>
            ) : (
              <div className="showItems ">
                <h2 className="pcTasks">Pending Task</h2>
                {items.filter((curElem) => !curElem.completed).length === 0 ? (
                  <p className="noPC">No Pending Task</p>
                ) : (
                  items
                    .filter((curElem) => !curElem.completed)
                    .map((curElem, index) => (
                      <div className="eachItem" key={index}>
                        <input
                          onClick={() => changeStatus(curElem.id)}
                          type="checkbox"
                          className="checkbox"
                          checked={curElem?.completed}
                        />
                        <div className="eachItemInside">
                          <h3>{curElem.name}</h3>
                          <h3>{new Date(curElem?.date).toLocaleDateString()}</h3>
                          <div className="todo-btn">
                            <i
                              className="far-solid fa-edit add-btn far"
                              onClick={() => updateitem(curElem.id)}
                            ></i>
                            <i
                              className="far-solid fa-trash-alt add-btn far"
                              onClick={() => deleteitem(curElem.id)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))
                )}

                <h2 className="pcTasks">Completed Task</h2>
                {items.filter((curElem) => curElem.completed).length === 0 ? (
                  <p className="noPC">No Completed Task</p> 
                ) : (
                  items
                    .filter((curElem) => curElem.completed)
                    .map((curElem, index) => (
                      <div className="eachItem" key={index}>
                        <input
                          onClick={() => changeStatus(curElem.id)}
                          type="checkbox"
                          className="checkbox"
                          checked={curElem?.completed}
                        />
                        <div className="eachItemInside">
                          <h3>{curElem.name}</h3>
                          <h3>{new Date(curElem?.date).toLocaleDateString()}</h3>
                          <div className="todo-btn">
                            <i
                              className="far-solid fa-edit add-btn far"
                              onClick={() => updateitem(curElem.id)}
                            ></i>
                            <i
                              className="far-solid fa-trash-alt add-btn far"
                              onClick={() => deleteitem(curElem.id)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            )}
          </div>
    </>
  )
}

export default Task