import { useEffect, useState } from 'react';

import './App.css';

const API_BASE = process.env.REACT_APP_API_BASE;

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE}/welcome`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>API Data</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
            </header>
        </div>
    );
}

export default App;
