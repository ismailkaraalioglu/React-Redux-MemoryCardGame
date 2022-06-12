// REDUX
import { useSelector } from "react-redux";

function Header() {
  const score = useSelector((state) => state.score.points);

  return (
    <div className="header">
      <h1>Memory Card Game</h1>
      <div className="score-group">
        <div>Your Score: {score}</div>
        <div>
          <button>New Game</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
