export function SystemsIndex({ systems, onShow }) {
  return (
    <div>
      <h1>A place based on your values ({systems.length} total)</h1>
      {systems.map((system) => (
        <div key={system.id}>
          <h2>{system.country_name}</h2>
          <p>Economic System: {system.economic_system}</p>
          <p>Governmental System: {system.governmental_system}</p>
          <p>Cultural System: {system.cultural_system}</p>
          <img src={system.image_url} alt="" />
          <a href={system.wiki_page}>Wiki Page</a>
          <button onClick={() => onShow(system)}>More info</button>
        </div>
      ))}
    </div>
  );
}
