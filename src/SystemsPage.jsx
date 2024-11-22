import axios from "axios";
import { useState, useEffect } from "react";
import { SystemsIndex } from "./SystemsIndex";
import { SystemsNew } from "./SystemsNew";
import { Modal } from "./Modal";

export function SystemsPage() {
  const [systems, setSystems] = useState([]);
  const [isSystemsShowVisible, setIsSystemsShowVisible] = useState(true);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/systems.json").then((response) => {
      console.log(response.data);
      setSystems(response.data);
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
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <SystemsNew onCreate={handleCreate} />
      <SystemsIndex systems={systems} onShow={handleShow} />
      <Modal show={isSystemsShowVisible} onClose={() => setIsSystemsShowVisible(false)}>
        <h1>Test</h1>
      </Modal>
    </main>
  );
}
