import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '../utils/cloudinary';
import '../styles/components/Editorial.css';

const specials = [
    {
        id: "S1",
        title: "Hokkaido Uni Gold",
        desc: "Creamy sea urchin from Hokkaido, accented with edible gold leaf and a touch of crystalline sea salt. A true masterpiece of the deep.",
        img: "/assets/Menu/Specials/special_1_uni.png"
    },
    {
        id: "S2",
        title: "Truffle Toro Tartare",
        desc: "Finely chopped Bluefin tuna belly infused with black truffle oil and topped with fresh truffle shavings and micro-herbs.",
        img: "/assets/Menu/Specials/special_2_toro.png"
    },
    {
        id: "S3",
        title: "Binchotan Unagi",
        desc: "Charcoal-grilled freshwater eel glazed in house-made kabayaki sauce, finished with aromatic sansho pepper.",
        img: "/assets/Menu/Specials/special_3_unagi.png"
    },
    {
        id: "S4",
        title: "Abalone Liver Sauce",
        desc: "Slow-steamed Ezo abalone served over a rich, velvety reduction of its own liver and brown butter.",
        img: "/assets/Menu/Specials/special_4_abalone.png"
    },
    {
        id: "S5",
        title: "Wagyu Uni Surf & Turf",
        desc: "A5 Grade Wagyu beef lightly seared, topped with premium sea urchin and a kiss of smoked soy.",
        img: "/assets/Menu/Specials/special_5_wagyu.png"
    },
    {
        id: "S6",
        title: "Ise Ebi Tempura",
        desc: "Japanese spiny lobster deep-fried in a delicate, lacy batter, served with spicy yuzu dipping salt.",
        img: "/assets/Menu/Specials/special_6_lobster.png"
    },
    {
        id: "S7",
        title: "Ankimo Mousse",
        desc: "The 'foie gras of the sea' whipped into a light mousse, served with ponzu jelly and crispy ginger.",
        img: "/assets/Menu/Specials/special_7_ankimo.png"
    },
    {
        id: "S8",
        title: "King Crab Miso Butter",
        desc: "Succulent Red King Crab legs grilled over Binchotan charcoal, basted with umami-rich miso butter.",
        img: "/assets/Menu/Specials/special_8_crab.png"
    },
    {
        id: "S9",
        title: "Yuzu Scallop Carpaccio",
        desc: "Thinly sliced Hokkaido scallops dressed in a vibrant yuzu-chili vinaigrette and topped with crispy shallots.",
        img: "/assets/Menu/Specials/special_9_scallop.png"
    },
    {
        id: "S10",
        title: "Agedashi Foie Gras",
        desc: "Crispy-coated premium foie gras served in a warm, dashi-based broth with grated daikon and spring onions.",
        img: "/assets/Menu/Specials/special_10_foie.png"
    }
];

const drinks = [
    {
        id: "D1",
        title: "Junmai Daiginjo Sake",
        desc: "Our finest ultra-premium sake, polished to 23%. Notes of melon, pear, and a silky smooth finish.",
        img: "/assets/Menu/Drinks/drink_1_sake.png"
    },
    {
        id: "D2",
        title: "Yuzu Whisky Sour",
        desc: "Hibiki Japanese Whisky shaken with fresh yuzu juice and egg white for a bright, sophisticated twist.",
        img: "/assets/Menu/Drinks/drink_2_whisky.png"
    },
    {
        id: "D3",
        title: "Shiso Mojito",
        desc: "A refreshing blend of Japanese rum, fresh shiso leaves, and sparkling soda. The perfect palate cleanser.",
        img: "/assets/Menu/Drinks/drink_3_mojito.png"
    },
    {
        id: "D4",
        title: "Hojicha Old Fashioned",
        desc: "Nikka Coffee Grain Whisky infused with roasted Hojicha leaves, maple syrup, and bitters.",
        img: "/assets/Menu/Drinks/drink_4_hojicha.png"
    },
    {
        id: "D5",
        title: "Sakura Martini",
        desc: "Roku Gin stirred with dry vermouth and a salt-pickled cherry blossom for a floral, elegant experience.",
        img: "/assets/Menu/Drinks/drink_5_sakura.png"
    },
    {
        id: "D6",
        title: "Matcha Gin Fizz",
        desc: "Ceremonial grade matcha whisked with gin, lemon, and cream. Velvety, earthy, and perfectly balanced.",
        img: "/assets/Menu/Drinks/drink_6_matcha.png"
    },
    {
        id: "D7",
        title: "Sparkling Ume Highball",
        desc: "Japanese plum wine topped with artisanal soda and an whole green plum. Light and effervescent.",
        img: "/assets/Menu/Drinks/drink_7_ume.png"
    },
    {
        id: "D8",
        title: "Kyoto Espresso Martini",
        desc: "Japanese cold brew extract shaken with vodka and a hint of white miso for depth. (Limited Availability)",
        img: "/assets/Menu/Drinks/drink_2_whisky.png"
    },
    {
        id: "D9",
        title: "Lychee Sake Fizz",
        desc: "Sparkling sake infused with fresh lychee fruit. Sweet, floral, and celebratory.",
        img: "/assets/Menu/Drinks/drink_1_sake.png"
    },
    {
        id: "D10",
        title: "Umeshu on the Rocks",
        desc: "Traditional aged plum wine served over a large hand-carved ice sphere with a shiso leaf garnish.",
        img: "/assets/Menu/Drinks/drink_7_ume.png"
    }
];

const teas = [
    {
        id: "T1",
        title: "Gyokuro Imperial",
        desc: "The 'Jade Dew' of teas. Shaded before harvest for an intense umami flavor and brilliant color.",
        img: "/assets/Interior/interior_main.webp"
    },
    {
        id: "T2",
        title: "Ceremonial Matcha",
        desc: "Artisanally ground green tea whisked to a thick, vibrant froth. Deeply meditative and earthy.",
        img: "/assets/Menu/Drinks/drink_6_matcha.png"
    },
    {
        id: "T3",
        title: "Genmaicha Pop",
        desc: "A comforting blend of green tea and toasted brown rice, offering a nutty, savory profile.",
        img: "/assets/Interior/interior_main.webp"
    }
];

const foodImages = [
    { src: "/assets/Food/589908876_18542390116031784_4422588814190806625_n.jpg", alt: "Signature Sushi" },
    { src: "/assets/Food/607009435_18542390104031784_2320596697962062262_n.jpg", alt: "Omakase Piece" },
    { src: "/assets/Food/318588163_1523867858082990_4788944527157422100_n.jpg", alt: "Artisanal Plate" },
    { src: "/assets/Food/641659012_18566605849058383_4604519984093328029_n.jpg", alt: "Fresh Sashimi" },
    { src: "/assets/Food/32f4d7c205fc0854718b7a76e3a3e831.jpg", alt: "Culinary Art" },
    { src: "/assets/Food/075c8e76050eeb3cf3c40f2157bcd389.jpg", alt: "Gourmet Detail" },
    { src: "/assets/Food/15c0143c39856737bcaf0e1588058b2e.jpg", alt: "Nigiri Close-up" },
    { src: "/assets/Food/3bc1deb1d0b3b0ccba574f8cf973cd60.jpg", alt: "Chef's Selection" },
    { src: "/assets/Food/637691860_18566605900058383_1696038193588162611_n.jpg", alt: "Seasonal Specialty" },
    { src: "/assets/Food/641178bcda86cdbfd0a19adab1b032b5.jpg", alt: "Dessert Art" },
    { src: "/assets/Food/8319a7ccb279aa13ed850da587b46076.jpg", alt: "Fine Dining" },
    { src: "/assets/Food/32f4d7c205fc0854718b7a76e3a3e831.jpg", alt: "Sashimi Arrangement" },
    { src: "/assets/Food/589908876_18542390116031784_4422588814190806625_n.jpg", alt: "The Final Course" },
];

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <div className="editorial-split-layout">
                {/* Left side scrolling images */}
                <div className="editorial-left">
                    <div className="editorial-left-gallery">
                        {foodImages.map((img, index) => (
                            <motion.div
                                key={`${img.src}-${index}`}
                                className="gallery-img-wrapper"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <img src={getCloudinaryUrl(img.src)} alt={img.alt} loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right side scrolling content */}
                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>UmiZoi Specials</h1>
                        <p>A curated selection of our most exclusive Japanese delicacies and artisanal beverages, crafted to bridge tradition with luxury.</p>
                    </div>

                    <div className="menu-section-divider">JAPANESE SPECIALS</div>
                    {specials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="editorial-row"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="editorial-row-content">
                                <div className="editorial-row-date">SPECIAL</div>
                                <div className="editorial-row-text">
                                    <h2 className="editorial-row-title">{item.title}</h2>
                                    <p className="editorial-row-desc">{item.desc}</p>
                                    <a href="/reservation" className="editorial-row-link">BOOK TABLE</a>
                                </div>
                            </div>
                            <div className="editorial-row-image">
                                <img src={getCloudinaryUrl(item.img)} alt={item.title} loading="lazy" />
                            </div>
                        </motion.div>
                    ))}

                    <div className="menu-section-divider">DRINKS & COCKTAILS</div>
                    {drinks.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="editorial-row"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="editorial-row-content">
                                <div className="editorial-row-date">HOUSE CRAFT</div>
                                <div className="editorial-row-text">
                                    <h2 className="editorial-row-title">{item.title}</h2>
                                    <p className="editorial-row-desc">{item.desc}</p>
                                    <a href="/reservation" className="editorial-row-link">ORDER NOW</a>
                                </div>
                            </div>
                            <div className="editorial-row-image">
                                <img src={getCloudinaryUrl(item.img)} alt={item.title} loading="lazy" />
                            </div>
                        </motion.div>
                    ))}

                    <div className="menu-section-divider">PREMIUM TEAS</div>
                    {teas.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="editorial-row"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="editorial-row-content">
                                <div className="editorial-row-date">TRADITIONAL</div>
                                <div className="editorial-row-text">
                                    <h2 className="editorial-row-title">{item.title}</h2>
                                    <p className="editorial-row-desc">{item.desc}</p>
                                    <a href="/reservation" className="editorial-row-link">LEARN MORE</a>
                                </div>
                            </div>
                            <div className="editorial-row-image">
                                <img src={getCloudinaryUrl(item.img)} alt={item.title} loading="lazy" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;

