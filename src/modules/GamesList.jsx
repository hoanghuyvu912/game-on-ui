import React, { useCallback, useEffect, useState } from "react";

export default function GamesList() {
  const [games, setGames] = useState([]);

  const fetchGamesListHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/games");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedGames = data.map((gameData) => {
        return {
          id: gameData.id,
          name: gameData.name,
          description: gameData.description,
          releaseDate: gameData.releaseDate,
          price: gameData.price,
          thumbnail: gameData.thumbnail,
        };
      });
      setGames(transformedGames);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchGamesListHandler();
  }, [fetchGamesListHandler]);

  console.log(games);

  // const gameList = [
  //   { id: 1, name: "Game 1" },
  //   { id: 2, name: "Game 2" },
  //   { id: 3, name: "Game 3" },
  //   { id: 4, name: "Game 4" },
  //   { id: 5, name: "Game 5" },
  //   { id: 6, name: "Game 6" },
  //   { id: 7, name: "Game 7" },
  // ];

  const renderGameCard = games.map((game) => {
    return (
      <div
        key={game.id}
        className="col"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="card h-100"
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        >
          <img
            src={game.thumbnail}
            className="card-img-top img-fluid"
            alt="..."
            style={{
              backgroundColor: "transparent",
              // minHeight: "50px",
              // minHeight: "100px",
              height: "500px",
            }}
          />
          <div
            className="card-body"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <h5
              className="card-title .text-secondary"
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              {game.name}
            </h5>
            <p
              className="card-text"
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              {game.description}
            </p>
          </div>
          <div
            className="card-footer"
            style={{
              backgroundColor: "white",
              color: "white",
            }}
          >
            <small
              className="text-muted"
              style={{
                backgroundColor: "white",
              }}
            >
              Price: ${game.price}
            </small>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{ backgroundColor: "transparent" }}
    >
      {/* <div className="col" style={{ backgroundColor: "transparent" }}>
        <div
          className="card h-100"
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        >
          <img
            src="..."
            className="card-img-top"
            alt="..."
            style={{
              backgroundColor: "transparent",
            }}
          />
          <div
            className="card-body"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div
            className="card-footer"
            style={{
              backgroundColor: "white",
            }}
          >
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div> */}
      {renderGameCard}
    </div>
  );
}
