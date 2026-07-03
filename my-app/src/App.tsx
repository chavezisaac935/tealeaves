import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<{ user: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://tea-backend-hpdsh9fzhccjewbh.centralus-01.azurewebsites.net/items/1')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <h1>Hello World</h1>
      <div>{data?.user}</div>
    </>
  )
}

export default App
