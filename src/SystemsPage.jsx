import axios from "axios";
import { useState, useEffect } from "react";
import { SystemsIndex } from "./SystemsIndex";
import { SystemsNew } from "./SystemsNew";
import { SystemsShow } from "./SystemsShow";
import { Modal } from "./Modal";
import { NewSystemPage } from "./NewSystemPage";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { useLocation } from "react-router-dom";

export function SystemsPage() {
  const [systems, setSystems] = useState([]);
  const [isSystemsShowVisible, setIsSystemsShowVisible] = useState(false);
  const [currentSystem, setCurrentSystem] = useState({});
  const location = useLocation();

  const handleIndex = () => {
    console.log("handleIndex");

    axios.get("/systems.json").then((response) => {
      console.log(response.data);

      let selectedSystem;

      switch (location.pathname) {
        case "/systems/first":
          selectedSystem = [response.data[0]];
          break;
        case "/systems/second":
          selectedSystem = [response.data[1]];
          break;
        case "/systems/third":
          selectedSystem = [response.data[2]];
          break;
        case "/systems/fourth":
          selectedSystem = [response.data[3]];
          break;
        case "/systems/fifth":
          selectedSystem = [response.data[4]];
          break;
        case "/systems/sixth":
          selectedSystem = [response.data[5]];
          break;
        case "/systems/seventh":
          selectedSystem = [response.data[6]];
          break;
        default:
          selectedSystem = response.data; // Return the full array by default
          break;
      }

      setSystems(selectedSystem);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/systems.json", params).then((response) => {
      setSystems([...systems, response.data]);
      successCallback();
    });
  };
  const handleShow = (system) => {
    console.log("handleShow", system);
    setIsSystemsShowVisible(true);
    setCurrentSystem(system);
  };

  const handleUpdate = (system, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/systems/${system.id}.json`, params).then((response) => {
      const updatedSystem = response.data;

      // Update the systems array
      setSystems(
        systems.map((p) => {
          if (p.id === updatedSystem.id) {
            return updatedSystem;
          } else {
            return p;
          }
        })
      );

      // If the current system in the modal matches the updated system, update the modal data
      if (currentSystem.id === updatedSystem.id) {
        setCurrentSystem(updatedSystem);
      }

      successCallback();
    });
  };

  useEffect(handleIndex, [location.pathname]);

  return (
    <main>
      <button
        onClick={() =>
          createRoot(document.getElementById("root")).render(
            <StrictMode>
              <NewSystemPage />
            </StrictMode>
          )
        }
      >
        Add Country
      </button>
      <SystemsIndex systems={systems} onShow={handleShow} />
      <Modal show={isSystemsShowVisible} onClose={() => setIsSystemsShowVisible(false)}>
        <SystemsShow system={currentSystem} onUpdate={handleUpdate} />
      </Modal>
    </main>
  );
}
