// REDUX
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/score/scoreSlice";

function Header() {
  const score = useSelector((state) => state.score.points);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetScore());
    window.location.reload();
  };

  return (
    <div className="header">
      <h1>Memory Card Game</h1>
      <div className="score-group">
        <div className="score">Your Score: {score}</div>
        <div>
          <button className="btn" onClick={handleClick}>New Game</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
