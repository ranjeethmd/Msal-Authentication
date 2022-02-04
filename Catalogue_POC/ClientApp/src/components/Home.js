import React, { useEffect, useState } from 'react';
import { useGetAccessToken } from '../authentication';


export const Home = () => {

    const [data, setData] = useState({});
    const getToken = useGetAccessToken();

    useEffect(() => {

        getCatalogues();

    });

    const getCatalogues = async () => {
        const url = "/Catalogues"

        await getToken(async token => {

            const response = await fetch(url, {
                method: 'GET',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setData(json);
            }
        });
    }



    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
