import { useState, useEffect } from "react";
import "./Champions.css";

export default function Champions() {
  const [champions, setChampions] = useState([]);

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
    <div className="Champions">
      {champions.map((champion) => (
        <img
          key={champion.id}
          src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${normalizeChampionName(
            champion.name
          )}.png`}
          alt={champion.name}
        />
      ))}
    </div>
  );
}
