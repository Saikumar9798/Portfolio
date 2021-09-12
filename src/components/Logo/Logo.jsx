import React from "react";

const Logo = ({ className }) => {
  return (
    <div>
      <div className="text-3xl font-Arizonia font-medium px-2 inline-flex border-darkblue border-double text-darkblue cursor-pointer">
        <div>
          <span className={`font-extrabold ${className}`}>{`<  Saikumar `}</span>
          <span className={`font-extrabold ${className}`}>{` />`}</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
