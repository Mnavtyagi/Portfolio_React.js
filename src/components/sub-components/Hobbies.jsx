import React from "react";
import { AiFillBook } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdSportsBaseball } from "react-icons/md";

const Hobbies = () => {
  return <>

    <div className="hobbies">
      <span>
        <div>
          <AiFillBook/>
          TEACHING
        </div>
        <div>
          <AiFillCamera/>
          PHOTOGRAPHY
        </div>
      </span>
      <span>
        <div>
          <BiSolidPlaneAlt/>
          TRAVELLING
        </div>
        <div>
          <MdSportsBaseball/>
          SPORTS
        </div>
      </span>
    </div>
  
  </>;
};

export default Hobbies;