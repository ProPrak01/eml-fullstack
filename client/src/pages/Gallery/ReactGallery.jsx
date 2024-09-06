/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./gallery.css";
import Masonry from "react-responsive-masonry";
import ImagesData from "./ImageData";

let col = 3;
let windowWidth = window.innerWidth;
if (windowWidth < 992 && windowWidth >= 768) {
  col = 2;
}
else if (window.innerWidth < 768) {
  col = 1;
}

export default function ReactGallery() {
  const [data, setData] = useState({ img: "", i: 0 });
  const [colCount, setColCount] = useState(col);

  const changeCol = () => {
    if (window.innerWidth > 992) {
      setColCount(3);
    }
    else if (window.innerWidth < 992 && window.innerWidth >= 768) {
      setColCount(2);
    }
    else {
      setColCount(1);
    }
  };

  useEffect(() => {
    return () => {
      window.addEventListener('resize', changeCol);
      window.addEventListener('load', changeCol);
    };
  });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: ImagesData[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ img: ImagesData[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  }

  // event listeners for prev next and esc keys 
  // document.addEventListener('keydown', function (event) {
  //   if (event.key === 'ArrowRight') {
  //     // console.log("right pressed");      
  //     imgAction('next-img');
  //   } 
  //   else if (event.key === 'ArrowLeft') {
  //     // console.log("left pressed");      
  //     imgAction('prev-img');
  //   }
  // });


  return (
    <>
      {
        (window.innerWidth > 600 && data.img )&&
        <div className="gallery-full-img">
          <button onClick={() => imgAction()} className="cross-btn btn"> <i className="fa-solid fa-xmark"></i> </button>

          <img src={data.img} className="img-fluid" style={{ width: 'auto', maxWidth: '85%', maxHeight: '80%' }} />
          <div className="gallery-btns">
            <button className="prev-btn btn" onClick={() => imgAction('prev-img')}><i className="fa-solid fa-chevron-left"></i></button>
            <button className="next-btn btn" onClick={() => imgAction('next-img')}><i className="fa-solid fa-chevron-right"></i></button>
          </div>

        </div>

      }

      <Masonry columnsCount={colCount} gutter="12px" className="container gallery-container">
      {/* <h1>Page is under developement</h1> */}

        {ImagesData.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block", cursor: "pointer" }}
            onClick={() => viewImage(image, i)}
            data-aos="fade-up" data-aos-offset="100" data-aos-duration="350"
          />
        ))}
      </Masonry>
    </>
  );
}
