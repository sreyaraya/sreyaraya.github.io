import React from "react";

const ImageDisplay = ({ images, captions = [], layout = "line", maxWidth = 200 }) => {
  const containerStyle =
    layout === "grid"
      ? {
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${maxWidth}px, 1fr))`,
          gap: "1rem",
          justifyItems: "center",
        }
      : {
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
        };

  return (
    <div style={containerStyle}>
      {images.map((src, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          <img
            src={src}
            alt={captions[idx] || `img-${idx}`}
            style={{ maxWidth: `${maxWidth}px`, borderRadius: "0.5rem" }}
          />
          {captions[idx] && (
            <p style={{ color: "#cbd5e1", marginTop: "0.5rem" }}>
              {captions[idx]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
