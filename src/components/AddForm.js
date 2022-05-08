import { useState } from "react";
import { getDocumentRef } from "../firebase/firebase";

function AddForm({ setIsLoading }) {
  const [recordInput, setRecordInput] = useState("");

  const handleInputChange = (e) => {
    setRecordInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const documentRef = getDocumentRef("records");
    let dataObj = {
      record: recordInput,
    };
    setIsLoading(true);
    documentRef.set(dataObj).then(() => {
      setIsLoading(false);
    });
    setRecordInput("");
  };

  return (
    <form className="addform" onSubmit={handleSubmit}>
      <input
        placeholder="請輸入測試紀錄"
        value={recordInput}
        onChange={handleInputChange}
        name="text"
      />

      <button onClick={handleSubmit} id="add-record-btn">
        新增紀錄
      </button>
    </form>
  );
}

export default AddForm;
