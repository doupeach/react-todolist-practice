function List({ records, deleteRecord }) {
  return records.map((record) => (
    <div className="list" key={record.id}>
      <div>{record.record}</div>
      <button onClick={() => deleteRecord(record.id)} className="delete-btn">
        刪除
      </button>
    </div>
  ));
}

export default List;
