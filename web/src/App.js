import { useEffect, useState } from 'react';

import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://d23id7adr2qfre.cloudfront.net/dev/hms-api/health')
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
