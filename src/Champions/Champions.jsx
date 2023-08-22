import { useState, useEffect } from "react";
import "./Champions.css";

export default function Champions() {
  const [champions, setChampions] = useState({});

  useEffect(() => {
    const endpoint =
      "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setChampions(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const normalizeChampionName = (name) => {
    if (name === "Bel'Veth") {
      name = "Belveth";
    }

    if (name === "Cho'Gath") {
      name = "Chogath";
    }

    if (name === "Kai'Sa") {
      name = "Kaisa";
    }

    if (name === "Kha'Zix") {
      name = "Khazix";
    }

    if (name === "LeBlanc") {
      name = "Leblanc";
    }

    if (name === "Wukong") {
      name = "MonkeyKing";
    }

    if (name === "Nunu & Willump") {
      name = "Nunu";
    }

    if (name === "Renata Glasc") {
      name = "Renata";
    }

    if (name === "Vel'Koz") {
      name = "Velkoz";
    }

    return name.replace(/[^\w]/g, "");
  };

  return (
    <div className="Champions d-flex flex-column align-items-center justify-content-center w-100 animate__animated animate__fadeIn">
      <div className="champion-header d-flex flex-column justify-content-center align-items-center">
        <img
          className="icon"
          src="/assets/misc/champion-section-icon.png"
          alt="Chamions"
        />
        <div className="champion-header-inner d-flex align-items-center mt-3 mb-5">
          <img className="line-reflected" src="/assets/misc/line.png" alt="Chamions" />
          <h1 className="d-inline text-uppercase mx-4">Champions</h1>
          <img src="/assets/misc/line.png" alt="Chamions" />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center w-75">
        {Object.values(champions).map((champion) => (
          <div
            className="champion overflow-hidden d-flex justify-content-center mx-2 my-4 position-relative"
            key={champion.id}
          >
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${normalizeChampionName(
                champion.name
              )}_0.jpg`}
              alt={champion.name}
            />
            <div className="champion-info position-absolute bottom-0 m-0 h-25 d-flex flex-column justify-content-center">
              <h1 className="text-uppercase p-0 m-0">{champion.name}</h1>
              <h2 className="text-uppercase p-0 m-0">{champion.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
