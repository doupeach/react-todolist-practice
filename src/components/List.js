function List({records, removeRecord}) {
    
    return records.map((record, index) => (
      <div 
        className="list" 
        key={record.id} >
        <div>{record.text}</div>
        <button onClick={() => removeRecord(record.id)} className="delete-btn">刪除</button>
      </div>
    ));
  }
  
  export default List;