import React from 'react';
import './topPick.css';
import{Link} from 'react-router-dom';

function TopPickList({name,price,desc,itemId}) {

  return (
    <div className="picks">
      <Link className="link" to={`/menu/${itemId}`}>
        <div className="top-pick_box">
            <img src="./AAB099F8-F1B0-4AA7-8119-61DDC2DD3A0B.jpeg" alt="small chop"/>
            <div className="top-pick_text">
                <h3>{name}</h3>
                <h4>{desc}</h4>
                <p>#{price}</p>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default TopPickList;