export function SystemsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New System</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Country Name: <input name="country_name" type="text" />
        </div>
        <div>
          Economic System: <input name="economic_system" type="text" />
        </div>
        <div>
          Economic Index: <input name="economic_index" type="text" />
        </div>
        <div>
          Governmental System: <input name="governmental_system" type="text" />
        </div>
        <div>
          Governmental Index: <input name="governmental_index" type="text" />
        </div>
        <div>
          Cultural System: <input name="cultural_system" type="text" />
        </div>
        <div>
          Cultural Index: <input name="cultural_index" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Wiki Page: <input name="wiki_page" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
