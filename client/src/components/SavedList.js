import React from "react";

const SavedList = props => 
            <ul className="list-group">
                {props.results.map(result => (
                <li className="list-group-item" key={result._id}>
                     <a href={result.url}>{result.title}</a> | {result.snippet} | {result.date} | {result.byline} <br/>
                     <button className="btn btn-sm btn-danger">Remove from Saved</button>
                </li>
                ))}
            </ul>
  

export default SavedList;