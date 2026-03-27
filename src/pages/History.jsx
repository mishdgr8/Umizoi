import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '../utils/cloudinary';
import '../styles/components/Editorial.css';

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <div className="editorial-split-layout">
                <div className="editorial-left">
                    <div className="editorial-left-gallery">
                        {[
                            { src: '/assets/Personnel/318543873_666951394918316_1128040539212648344_n.jpg', alt: "Our main space" },
                            { src: '/assets/Personnel/chef.webp', alt: "The Chef" }
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                className="gallery-img-wrapper"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={getCloudinaryUrl(img.src, { width: 1000 })} alt={img.alt} loading="lazy" decoding="async" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Our Story</h1>
                        <p>Born from a deep reverence for Japanese culinary traditions and a desire to present them in a contemporary space, Umizoi is the realization of a lifelong dream.</p>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE CHEF</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Mastery of cut</h2>
                                <p className="editorial-row-desc">Our chefs are united by a singular goal: an unforgettable dining experience. Years of rigorous training ensure every slice is infused with omotenashi.</p>
                                <a href="/reservation" className="editorial-row-link">JOIN US</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src={getCloudinaryUrl('/assets/Personnel/608854380_18542390089031784_692730392710753357_n.jpg', { width: 800 })} alt="Chef detailing" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE TEAM</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Silent service</h2>
                                <p className="editorial-row-desc">Anticipating needs before they arise, our front-of-house team choreographs the dining room with invisible grace and precision.</p>
                                <a href="/reservation" className="editorial-row-link">JOIN US</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src={getCloudinaryUrl('/assets/Personnel/61b34e07bd90857668a2b94d8efecc26.jpg', { width: 800 })} alt="Waitstaff" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE SPACE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Cinematic warmth</h2>
                                <p className="editorial-row-desc">Designed to strip away distractions. Dark wood, textured stone, and dramatic lighting force all attention beautifully onto the plates.</p>
                                <a href="/gallery" className="editorial-row-link">VIEW GALLERY</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src={getCloudinaryUrl('/assets/Scene/581276579_18542423137058383_8395012481738148664_n.jpg', { width: 800 })} alt="Restaurant Interior" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
