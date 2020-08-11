import React from 'react';
import { getDividedNumbers, getConvertedDate } from './../../helpers/dataProcessing';

import './SingleTableRow.scss';

export const SingleTableRow = ({ highlightedTop, highlightedBottom, date = 'Date', impressions = 'Impressions', clicks = 'Clicks', conversions = 'Conversion', cost = 'Costs' }) => {

    return (
        <div className={["singleTableRow", highlightedTop && "highlightedTop", highlightedBottom && "highlightedBottom"].join(" ")}>
            {highlightedTop || highlightedBottom ? <p className="singleTableRow__cell">{date}</p> : <p className="singleTableRow__cell">{getConvertedDate(date)}</p>}
            <p className="singleTableRow__cell">{getDividedNumbers(impressions)}</p>
            <p className="singleTableRow__cell">{getDividedNumbers(clicks)}</p>
            <p className="singleTableRow__cell">{getDividedNumbers(conversions)}</p>
            <p className="singleTableRow__cell">{getDividedNumbers(cost)}</p>
        </div>
    )
};