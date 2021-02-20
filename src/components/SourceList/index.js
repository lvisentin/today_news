import React, { useEffect, useState } from 'react'
import NewsController from '../../controllers/NewsController';

function SourceList() {

    const [sources, setSources] = useState([]);

    useEffect(() => {
        const loadSources = async () => {
            const sourceList = await NewsController.getSources();
            setSources(sourceList.data.sources);
            console.log(sourceList)
        } 
        loadSources();

    }, [])

    return (
        <div className="source-list">
            {
                sources && sources.map((source, key) => (
                    <div key={key}>
                        {source.name}
                    </div>
                ))
            }
            
        </div>
    )
}

export default SourceList
