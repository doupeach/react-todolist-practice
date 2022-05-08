import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="title">
          <h1>React 練習專案</h1>
        </div>
        <div id="welcome">
          <h3>歡迎光臨我的頁面</h3>
        </div>
        <nav>
          <Link to="/list">
            <button id="start-btn">點此開始</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default HomePage;
