import axios from "axios";
import { useEffect, useState } from "react";

import { SystemsIndex } from "./SystemsIndex";

export function SystemsPage() {
  const [systems, setSystems] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/systems.json").then((response) => {
      console.log(response.data);
      setSystems(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>
        <SystemsIndex systems={systems} />
      </h1>
    </main>
  );
}
