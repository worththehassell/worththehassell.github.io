import '../css/flier.css';
import PropTypes from 'prop-types';
import * as React from 'react';


function FlyingImage(props) {
    const { src, height=50, width=50, alt="flying-image" } = props;

  return (
    <div className="flier">
        <img src={src} height={height} width={width} alt={alt} />
    </div>
  );
}

FlyingImage.propTypes = {
    src: PropTypes.node.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    alt: PropTypes.string,
};

export default FlyingImage;
