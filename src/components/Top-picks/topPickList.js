import React from 'react';
import './topPick.css';
import{Link} from 'react-router-dom';

function TopPickList({name,price,desc,itemId}) {

  return (
    <div className="picks">
      <Link className="link" to={`/menu/${itemId}`}>
        <div className="top-pick_box">
            <img src="./rectangle 3.jpg" alt="small chop"/>
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