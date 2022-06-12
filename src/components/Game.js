import { useEffect, useState } from "react";

// SWAL
import Swal from "sweetalert2";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  addFrameworks,
  frameworkSelector,
  addFrameworksFulfilled,
  updateFramework,
} from "../redux/frameworks/frameworkSlice";
import { nanoid } from "@reduxjs/toolkit";
import { scoreUp, scoreDown } from "../redux/score/scoreSlice";

// FRAMEWORKS
import { frameworks, shuffleCard } from "../redux/frameworks/defaultFrameworks";

function Game() {
  const [openCard, setOpenCard] = useState([]);
  const items = useSelector(frameworkSelector.selectAll);
  const status = useSelector((status) => status.frameworks.status);
  const dispatch = useDispatch();

  let completeFrameworks = items.filter((item) => item.complete);

  if (completeFrameworks.length === 30) {
    Swal.fire({
      title: "Do you want to play again?",
      showCancelButton: true,
      confirmButtonText: "Restart",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Loading!", "", "success");
        window.location.reload();
      }
    });
  }

  // SAYFA YÜKLENDİĞİNDE FRAMEWORK'LER YÜKLENECEK.
  useEffect(() => {
    if (status === "idle") {
      dispatch(
        addFrameworks(
          shuffleCard(frameworks).map((framework) => ({
            id: nanoid(),
            name: framework,
            close: true,
            complete: false,
          }))
        )
      );
    }
    dispatch(addFrameworksFulfilled());
  }, [dispatch, status]);

  // CARD SEÇİMİ YAPILDIGINDA ÇALIŞAN BLOK
  useEffect(() => {
    if (openCard.length === 2) {
      setTimeout(() => {
        if (
          openCard[0].name === openCard[1].name &&
          openCard[0].id !== openCard[1].id
        ) {
          openCard.map((card) =>
            dispatch(
              updateFramework({
                id: card.id,
                changes: {
                  complete: true,
                },
              })
            )
          );
          dispatch(scoreUp());
        } else {
          openCard.map((card) =>
            dispatch(
              updateFramework({
                id: card.id,
                changes: {
                  close: true,
                },
              })
            )
          );
          dispatch(scoreDown());
        }
      }, 700);
      setOpenCard([]);
    }
  }, [openCard, dispatch]);

  const handleClick = (item) => {
    setOpenCard([...openCard, item]);
    dispatch(
      updateFramework({
        id: item.id,
        changes: {
          close: false,
        },
      })
    );
  };

  return (
    <div className="playground">
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className={`card ${item.close ? "" : "opened"} ${
              item.complete ? "matched" : ""
            }`}
            onClick={() =>
              openCard.length < 2 && !item.complete && handleClick(item)
            }
          >
            <div className="front">?</div>
            <div className="back">
              <img
                src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item.name}.png`}
                alt={item.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Game;
