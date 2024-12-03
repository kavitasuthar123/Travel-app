
import React, { useState } from 'react';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: GalleryImg1, desc: "Person wearing shoes", sub: "Gift Habeshaw" },
        { src: GalleryImg3, desc: "Blonde woman wearing sunglasses smiling at the camera", sub: "Dmitriy Frantsev" },
        { src: GalleryImg6, sub: "Harry Cunningham" },
        { src: GalleryImg4, desc: "Jaipur, Rajasthan, India", sub: "Liam Baldock" },
        { src: GalleryImg7, sub: "Verne Ho" },
        { src: GalleryImg6, desc: "Rann of Kutch, India", sub: "Hari Nandakumar" },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <div className="gallery-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className="gallery-item" 
                        style={{ 
                            position: 'relative', 
                            maxWidth: '300px', 
                            textAlign: 'center', 
                            cursor: 'pointer',
                            overflow: 'hidden',
                        }}
                        onClick={() => setSelectedImage(image)}
                    >
                        <img 
                            src={image.src} 
                            alt={image.desc || 'Gallery Image'} 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '8px', 
                                transition: 'transform 0.3s ease', 
                            }} 
                            className="gallery-image"
                        />
                        <div 
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                opacity: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                transition: 'opacity 0.3s ease',
                            }}
                            className="hover-overlay"
                        >
                            {image.desc || "View Image"}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Selected Image */}
            {selectedImage && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.desc || 'Selected Image'} 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '8px', 
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                            }} 
                        />
                        <div style={{ textAlign: 'center', color: 'white', marginTop: '16px' }}>
                            <h3>{selectedImage.desc}</h3>
                            <p>{selectedImage.sub}</p>
                        </div>
                        <button 
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

