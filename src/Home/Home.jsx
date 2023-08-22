import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="Home d-flex justify-content-center align-items-center vh-100 position-relative w-75 mx-auto">
        <img
          className="akali position-absolute start-0"
          src="/assets/champions/akali.png"
          alt="Akali"
        />
        <img
          className="lol"
          src="/assets/lol-logo.png"
          alt="League of Legends"
        />
      <img
        className="yasuo position-absolute end-0"
        src="/assets/champions/thresh.png"
        alt="Yasuo"
      />
      </div>
    </>
  );
}
