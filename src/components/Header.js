// REDUX
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/score/scoreSlice";

function Header() {
  const score = useSelector((state) => state.score.points);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetScore());
  };

  return (
    <div className="header">
      <h1>Memory Card Game</h1>
      <div className="score-group">
        <div>Your Score: {score}</div>
        <div>
          <button onClick={handleClick}>Reset Score</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
