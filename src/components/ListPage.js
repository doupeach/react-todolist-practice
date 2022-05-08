import { useState, useEffect } from "react";
import List from "./List";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";
import { getCollectionsOnSnapshot } from "../firebase/firebase";
import { deleteDoc } from "../firebase/firebase";
import loadingGif from "../image/loading.gif";

function ListPage() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    getCollectionsOnSnapshot("records", setRecords);
  }, []);

  const deleteRecord = (recordId) => {
    setIsLoading(true);
    deleteDoc("records", recordId);
    setIsLoading(false);
  };

  return (
    <div className="listpage">
      {isLoading && <img id="loading-gif" src={loadingGif} />}
      <div className="listpage-container">
        <AddForm setIsLoading={setIsLoading} />
        <List records={records} deleteRecord={deleteRecord} />
        <nav>
          <Link to="/">
            <button id="to-homepage-btn">返回首頁</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default ListPage;
