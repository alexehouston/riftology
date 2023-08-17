import { useState, useEffect } from "react";
import "./Champions.css";

export default function Champions() {
  const [champions, setChampions] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState(null);

  useEffect(() => {
    const endpoint =
      "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const championsData = Object.values(data.data);
        setChampions(championsData);
      })
      .catch((error) => console.error("Error fetching data:", error));

      if (champions.length > 0 && !selectedChampion) {
        setSelectedChampion(champions[0]);
      }
    }, [champions, selectedChampion]);

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

  const handleChampionClick = (champion) => {
    setSelectedChampion(champion);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="selectedChampion w-50">
        {selectedChampion && (
          <div className="d-flex justify-content-center">
            <img
            className="w-100"
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${normalizeChampionName(
                selectedChampion.name
              )}_0.jpg`}
              alt={selectedChampion.name}
            />
            <h2>{selectedChampion.name}</h2>
          </div>
        )}
      </div>
      <div className="Champions p-0 d-flex flex-wrap justify-content-center">
        {champions.map((champion) => (
          <img
            className={`rounded-pill m-2 ${
              selectedChampion && selectedChampion.id === champion.id
                ? "selected"
                : ""
            }`}
            key={champion.id}
            src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${normalizeChampionName(
              champion.name
            )}.png`}
            alt={champion.name}
            onClick={() => handleChampionClick(champion)} // Attach click handler
          />
        ))}
      </div>
    </div>
  );
}
