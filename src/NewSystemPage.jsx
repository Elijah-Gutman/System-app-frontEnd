import { useState } from "react";
import axios from "axios";
import { SystemsNew } from "./SystemsNew";

export function NewSystemPage() {
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/systems.json", params).then((response) => {
      setSystems([...systems, response.data]);
      successCallback();
    });
  };
  return (
    <div>
      <SystemsNew onCreate={handleCreate} />
    </div>
  );
}
