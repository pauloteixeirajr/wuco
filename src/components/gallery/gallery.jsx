import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./gallery.scss";

const PhotoGallery = () => {
  const [photo, setPhoto] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        totalCount
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                formats: PNG
                quality: 95
                sizes: "100%"
              )
            }
          }
        }
      }
    }
  `);

  const {
    allFile: { totalCount, edges },
  } = data;

  useEffect(() => {
    const interval = setInterval(() => {
      const next = photo === totalCount - 1 ? 0 : photo + 1;
      setPhoto(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [photo, totalCount]);

  const images = edges.map(edge => {
    return (
      <GatsbyImage
        key={edge.node.id}
        image={getImage(edge.node)}
        alt={edge.node.name}
      />
    );
  });

  const navigatePhotos = updatedPhoto => {
    if (updatedPhoto < 0) updatedPhoto = totalCount - 1;
    else if (updatedPhoto >= totalCount) updatedPhoto = 0;
    setPhoto(updatedPhoto);
  };

  return (
    <div className="photo-gallery">
      <TransitionGroup component={null}>
        <CSSTransition
          classNames="photo"
          timeout={{ enter: 500, exit: 750 }}
          key={`image-${photo}`}
        >
          <div className="photo">{images[photo]}</div>
        </CSSTransition>
      </TransitionGroup>
      <div className="arrow">
        <div
          className="arrow-left"
          onClick={() => navigatePhotos(photo - 1)}
          aria-hidden="true"
        >
          &#10094;
        </div>
        <div
          className="arrow-right"
          onClick={() => navigatePhotos(photo + 1)}
          aria-hidden="true"
        >
          &#10095;
        </div>
      </div>
      <div className="gallery-nav">
        {edges.map((_, index) => (
          <span
            role="navigation"
            key={`nav-${index}`}
            className={`gallery-nav-item ${
              photo === index ? "gallery-nav-item-white" : ""
            }`}
            onClick={() => setPhoto(index)}
            aria-hidden="true"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
