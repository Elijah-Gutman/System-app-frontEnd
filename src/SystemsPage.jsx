import axios from "axios";
import { useState, useEffect } from "react";
import { SystemsIndex } from "./SystemsIndex";
import { SystemsNew } from "./SystemsNew";

export function SystemsPage() {
  const [systems, setSystems] = useState([]);

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

  useEffect(handleIndex, []);

  return (
    <main>
      <SystemsNew onCreate={handleCreate} />
      <SystemsIndex systems={systems} />
    </main>
  );
}
