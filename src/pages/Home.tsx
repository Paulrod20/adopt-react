import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
     return (
        <>
            <div className="hero">
                <div className="video-container">
                    <video autoPlay muted loop id="myVideo">
                        <source src="/assets/Timeline 1.mov" type="video/mp4"/>
                    </video>
                    <div className="color-overlay"></div>
                </div>

                <Navbar transparent={true} />

                <div className="content">
                    <h1>Your Best Friend Is One Click Away.</h1>
                    <Link to="/shelters">Explore</Link>
                </div>
            </div>
            
            <Footer />
        </>
    );
}   

export default Home;