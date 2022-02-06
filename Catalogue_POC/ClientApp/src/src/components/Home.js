import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../authentication';


export const Home = () => {

    useEffect(() => {
        getCatalogues();
    }, []);

    const [data, setData] = useState([]);
   
    const getCatalogues = async () => {
       
        const url = `/Catalogues`
        const response = await fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${await getAccessToken()}`,
            }
        });

        if (response.ok) {
            const json = await response.json();
            setData(json);
        }
    }

    if (data.length === 0) {
        return <p className="ifs-mui-loading">Loading.....</p>
    }
    else {

        return (
            <div className="table-responsive">
                <table className="table image-rendition-feature  sorting" disprows="5">
                    <thead>
                        <tr>
                            <th className="descending" role="columnheader" aria-sort="descending" aria-rowindex="1">IP Type</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">Intel16 IP List</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">Supplier</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">IP Description</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">Front-end View</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">Back-end View</th>
                            <th role="columnheader" aria-sort="none" aria-rowindex="1">PDK Version for Back-end view</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(({ ipType, intel16IPList, supplier,
                                ipDescription, frontendView, backendView,
                                pdkVersionForBackendview }) =>
                                <tr key={intel16IPList} className="data" data-category-id="">
                                    <td height="53" width="55">{ipType}</td>
                                    <td width="151">{intel16IPList}</td>
                                    <td width="60">{supplier}</td>
                                    <td width="229">{ipDescription}</td>
                                    <td width="64">{frontendView}</td>
                                    <td width="59">{backendView}</td>
                                    <td width="58">{pdkVersionForBackendview}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
