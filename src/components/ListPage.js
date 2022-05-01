import { useState } from "react";
import List from "./List";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";

function ListPage() {
    const [records, setRecords] = useState([])
    
    const addRecord = record => {
        if (!record.text || /^\s*$/.test(record.text)) {
          return;
        }
        const newRecordss = [record, ...records];
        setRecords(newRecordss);
      };
    
    const removeRecord = id => {
        const removedArr = [...records].filter(record => record.id !== id);
        setRecords(removedArr);
    };

    return (
      <div className="listpage">
        <div className="listpage-container">
            <AddForm onSubmit={addRecord} />
            <List 
                records={records}
                removeRecord={removeRecord}
            />
            <nav>
                <Link to="/"><button id="to-homepage-btn">返回首頁</button></Link>
            </nav>
        </div>
      </div>
    );
  }
  
  export default ListPage;