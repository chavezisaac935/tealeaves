import { useEffect, useState } from "react";

export default function UserProfile() {

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
        .then((dataA) => {
        setData(dataA);
        setLoading(false);
        })
        .catch((errorA) => {
        setError(errorA.message);
        setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    
    return(
        <div className="text-white bg-sky-500 text-center rounded-full flex-auto">
            {data?.user}
        </div>
    )
}