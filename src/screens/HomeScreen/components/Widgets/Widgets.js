import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <p>LinkedIn News</p>
                <InfoIcon />
            </div>
        </div>
    )
}

export default Widget
