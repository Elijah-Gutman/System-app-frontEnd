import { SystemsIndex } from "./SystemsIndex";

export function SystemsPage() {
  const systems = [
    {
      id: 1,
      country_name: "USA",
      economic_system: "FreeMarketCapitalism",
      economic_index: 1,
      governmental_system: "RepresentitiveRepublic",
      governmental_index: 1,
      cultural_system: "ClassicalLiberalism",
      cultural_index: 1,
      image_url:
        "https://erepublic.brightspotcdn.com/dims4/default/e4644b2/2147483647/strip/true/crop/1000x521+0+73/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F44%2F65%2F34d730834cf59eb7b19871a77cf0%2Fshutterstock-223572436.jpg",
      wiki_page: "https://en.wikipedia.org/wiki/United_States",
      created_at: "2024-11-15T00:33:16.478Z",
      updated_at: "2024-11-15T00:33:16.478Z",
    },
    {
      id: 2,
      country_name: "Canada",
      economic_system: "Socialism",
      economic_index: 2,
      governmental_system: "ParliamentaryDemocracy",
      governmental_index: 2,
      cultural_system: "ModernLiberalism",
      cultural_index: 2,
      image_url:
        "https://c8.alamy.com/comp/EPCCCG/canada-political-map-with-capital-ottawa-national-borders-important-EPCCCG.jpg",
      wiki_page: "https://en.wikipedia.org/wiki/Canada",
      created_at: "2024-11-15T00:33:16.486Z",
      updated_at: "2024-11-15T00:33:16.486Z",
    },
  ];
  return (
    <main>
      <h1>
        <SystemsIndex systems={systems} />
      </h1>
    </main>
  );
}
