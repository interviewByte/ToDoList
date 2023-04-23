import React, { useState } from "react";
function ToDoList () {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity () {
        setListData((listData)=>{
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity('')
            return updatedList;
        })
    }
    function removeActivity (index){
        const updatedListData = listData.filter((ele, id)=>{
            return index!==id
        })
        setListData(updatedListData);
    }
    function removeAll () {
        setListData([]);
    }
    return (
        <>
        <div className="container">
             <div className="header">TODO LIST</div>
             <input type="text" placeholder="Add Activity"
             value={activity}
             onChange={(e)=>setActivity(e.target.value)} />
             <button onClick={addActivity}>Add</button>
             <p className="List-heading">Here is your List:{")"}</p>
             {listData!==[] && listData.map((data,index)=>{
                return(
                    <>
                    <p key={index}>
                        <div className="listData">{data}</div>
                        <div className="btn-position">
                           <button onClick={()=>removeActivity(index)}>Remove(-)</button>
                        </div>
                    </p>
                    </>
                ) 
             })}
             {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
        </div>
        </>
    )
}
export default ToDoList;