import { useState } from "react";

function AddForm(props) {
    const [recordInput, setRecordInput] = useState('')
    const [id, setId] = useState(0);
    const assignId=()=>{
        setId(id + 1)
        return id;
    }

    const handleInputChange = (e) => {
        setRecordInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
          id: assignId(),
          text: recordInput
        });
        setRecordInput('');
      };

    return (
      <form className="addform" onSubmit={handleSubmit}>
        <input 
            placeholder="請輸入測試紀錄"
            value={recordInput} 
            onChange={handleInputChange}
            name='text'
        />

        <button onClick={handleSubmit} id="add-record-btn">新增紀錄</button>
      </form>
    );
  }
  
  export default AddForm;