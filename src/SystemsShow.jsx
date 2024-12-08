import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LandingPage } from "./LandingPage.jsx";

const landingPage = () => {
  location.replace = createRoot(document.getElementById("root")).render(
    <StrictMode>
      <LandingPage />
    </StrictMode>
  );
};

export function SystemsShow({ system, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(system, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Country</h1>
      <p>Country Name: {system.country_name}</p>
      <p>Economic System: {system.economic_system}</p>
      <p>Economic Index: {system.economic_index}</p>
      <p>Governmental System: {system.governmental_system}</p>
      <p>Governmental Index: {system.governmental_index}</p>
      <p>Cultural System: {system.cultural_system}</p>
      <p>Cultural Index: {system.cultural_index}</p>
      <p>
        Image: <img src={system.image_url} alt="" />
      </p>
      <p>WikiPage: {system.wiki_page}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Country Name: <input defaultValue={system.country_name} name="country_name" type="text" />
        </div>
        <div>
          Economic System : <input defaultValue={system.economic_system} name="economic_system" type="text" />
        </div>
        <div>
          Economic Index: <input defaultValue={system.economic_index} name="Economic Index" type="text" />
        </div>
        <div>
          Governmental System:
          <input defaultValue={system.governmental_system} name="governmental_system" type="text" />
        </div>
        <div>
          Governmental Index: <input defaultValue={system.governmental_index} name="governmental_index" type="text" />
        </div>
        <div>
          Cultural System: <input defaultValue={system.cultural_system} name="cultural_system" type="text" />
        </div>
        <div>
          Cultural Index: <input defaultValue={system.cultural_index} name="cultural_index" type="text" />
        </div>
        <div>
          Image: <input defaultValue={system.image_url} name="image_url" type="text" />
        </div>
        <div>
          WikiPage: <input defaultValue={system.wiki_page} name="wiki_page" type="text" />
        </div>
        <button type="submit">Update</button>
        <button onClick={landingPage}>Home</button> | <a href="#">Link</a>
      </form>
    </div>
  );
}
