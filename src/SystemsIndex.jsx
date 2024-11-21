export function SystemsIndex({ systems }) {
  return (
    <div>
      <h1>All systems ({systems.length} total)</h1>
      {systems.map((system) => (
        <div key={system.id}>
          <h2>{system.country_name}</h2>
          <p>Economic System: {system.economic_system}</p>
          <p>Economic Index: {system.econmic_index}</p>
          <p>Governmental System: {system.governmental_system}</p>
          <p>Governmental Index: {system.governmental_index}</p>
          <p>Cultural System: {system.cultural_system}</p>
          <p>Cultural Index: {system.cultural_index}</p>
          <img src={system.image_url} alt="" />
          <a href={system.wiki_page}>Wiki Page</a>
        </div>
      ))}
    </div>
  );
}
