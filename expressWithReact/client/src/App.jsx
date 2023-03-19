import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchStr = async (city) => {
    const response = await fetch(`api/weather/${city}`);
    const data = await response.json();
    setData((prev) => (prev = data));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const temperature = await fetchStr(city);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSearch(e);
        }}
        id={'form'}
      >
        <input type={'text'} name="city" id="city" />
        <button type="submit">Search</button>
      </form>
      {data && `Temperature: ${data.temp}`}
    </>
  );
}

export default App;
