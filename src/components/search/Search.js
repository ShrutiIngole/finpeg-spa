import React from 'react';

import '../../styles/search.css';

const Search = () => {
    return(
        <div className="search">
            <input type="text" placeholder="All Funds &nbsp; Screener &nbsp; Filter by AMC" />
            <span className="blue align">
                <i className="fas fa-search search-button" />
            </span>
        </div>
    );
}

export default Search;