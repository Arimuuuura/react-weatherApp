import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?zip=899-5541,jp&appid=8f241f6e111e93a94a517a3c6477329e&lang=ja&units=metric`,
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      Hello React
    </div>
  );
}

export default App;
