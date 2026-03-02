import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import OmakaseScroll from '../components/OmakaseScroll';
import ChefSection from '../components/ChefSection';
import InteriorSection from '../components/InteriorSection';
import Reservation from '../components/Reservation';

const Home = ({ scrollToSection, setIsChefDetailOpen }) => {
    return (
        <div className="home-page-transition">
            <Hero
                onChefSelect={() => setIsChefDetailOpen(true)}
                onOmakaseSelect={() => scrollToSection('#omakase')}
                onCellarSelect={() => scrollToSection('#space')}
            />
            <Philosophy />
            <OmakaseScroll />
            <ChefSection onChefSelect={() => setIsChefDetailOpen(true)} />
            <InteriorSection onChefSelect={() => setIsChefDetailOpen(true)} />
            <Reservation />
        </div>
    );
};

export default Home;
