import { useRef } from 'react';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import { getCloudinaryUrl } from '../utils/cloudinary';

const courses = [
    {
        jp: '雲丹',
        name: 'Hokkaido Uni',
        desc: 'Layered like silk, harvested from the cold northern depths.',
        img: '/assets/Food/uni.webp'
    },
    {
        jp: '熟成鮪',
        name: 'Sokei-zuke Tuna',
        desc: 'Aged for seven days in soy infusion, unlocking deep umami notes.',
        img: '/assets/Food/tuna.webp'
    },
    {
        jp: '帆立',
        name: 'Hokkaido Hotate',
        desc: 'Clean, sweet, and firm. A crystalline expression of the north.',
        img: '/assets/Food/hotate.webp'
    }
];

const OmakaseScroll = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useHorizontalScroll(containerRef, wrapperRef);

    return (
        <section className="omakase" id="omakase" ref={containerRef}>
            <div className="omakase-wrapper" ref={wrapperRef}>
                {courses.map((course, idx) => (
                    <div key={idx} className="course-panel">
                        <div className="panel-inner">
                            <img src={getCloudinaryUrl(course.img)} alt={course.name} className="course-image" />
                            <div className="course-info">
                                <span className="course-jp">{course.jp}</span>
                                <h3 className="course-name">{course.name}</h3>
                                <p className="course-desc">{course.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OmakaseScroll;
