import { useLoaderData, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router";

import { SystemsIndex } from "./SystemsIndex";

export function SystemsIndexPage() {
  let systems = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterName = searchParams.get("name");
  if (filterName) {
    systems = systems.filter((system) => system.name.toLowerCase().includes(filterName.toLowerCase()));
  }

  const handleShow = (system) => {
    console.log("handleShow", system);
    navigate(`/systems/${system.id}`);
  };

  return (
    <div>
      <SystemsIndex systems={systems} onShow={handleShow} />
    </div>
  );
}
