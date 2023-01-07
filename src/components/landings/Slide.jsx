import React from "react";

const Slide = ({link, text, h3Class, aClass, key}) => {


  return (
        <h3 className={h3Class}>
        <a className={aClass} href={link}>{text}</a>
      </h3>
  );
};

export default Slide;
