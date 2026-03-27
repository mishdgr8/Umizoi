import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '../utils/cloudinary';
import '../styles/components/Editorial.css';

const Origin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <div className="editorial-split-layout">
                {/* Left side fixed image gallery */}
                <div className="editorial-left">
                    <div className="editorial-left-gallery">
                        {[
                            { src: '/assets/Scene/318437464_680876186963339_4782280235131555876_n.jpg', alt: "Our main space" },
                            { src: '/assets/Food/uni.webp', alt: "Our Hokkaido Uni" },
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                className="gallery-img-wrapper"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={getCloudinaryUrl(img.src)} alt={img.alt} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right side scrolling content */}
                <div className="editorial-right">
                    <motion.div
                        className="editorial-right-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1>Our Origin</h1>
                        <p>The sourcing of our ingredients is treated with as much respect as the cooking itself. We journey across Japan and Scandinavia to find the perfect producers.</p>
                    </motion.div>

                    <div className="editorial-row-container">
                        {[
                            {
                                date: "THE OCEAN",
                                title: "Line-caught purity",
                                desc: "Every single fish is closely inspected at the markets before making its way to our kitchen. We prioritize line-caught, sustainable seafood from local fishermen.",
                                link: "/menu",
                                linkText: "VIEW MENU",
                                img: "/assets/Food/3bc1deb1d0b3b0ccba574f8cf973cd60.jpg"
                            },
                            {
                                date: "THE EARTH",
                                title: "Biodynamic harvest",
                                desc: "Our root vegetables and herbs are predominantly sourced from a network of small, biodynamic farms that respect the soil and the seasons.",
                                link: "/history",
                                linkText: "OUR STORY",
                                img: "/assets/Food/32f4d7c205fc0854718b7a76e3a3e831.jpg"
                            },
                            {
                                date: "THE CRAFT",
                                title: "Artisan producers",
                                desc: "From our soy sauce aged in wooden barrels to our hand-forged knives, we partner with artisans who have dedicated their lives to a single craft over generations.",
                                link: "/history",
                                linkText: "READ MORE",
                                img: "/assets/Food/8319a7ccb279aa13ed850da587b46076.jpg"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="editorial-row"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="editorial-row-content">
                                    <div className="editorial-row-date">{item.date}</div>
                                    <div className="editorial-row-text">
                                        <h2 className="editorial-row-title">{item.title}</h2>
                                        <p className="editorial-row-desc">{item.desc}</p>
                                        <a href={item.link} className="editorial-row-link">{item.linkText}</a>
                                    </div>
                                </div>
                                <div className="editorial-row-image">
                                    <img src={getCloudinaryUrl(item.img)} alt={item.title} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Origin;
