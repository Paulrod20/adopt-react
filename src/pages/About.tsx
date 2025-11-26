import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BioCard from '../components/BioCard';
import '../styles/About.css';

function About() {
    return (
        <div className="about-page">
            <Navbar />

            <section className="about-hero">
                <div className="about-hero-left">
                    <h1>Adopt was born from experience</h1>
                </div>
                <div className="about-hero-right">
                    <p>We are a family-driven organization on a mission to connect loving pets with their forever homes using technology and compassion.</p>
                    <br />
                    <p>Adopt became an idea when founders Paul and Makayla Rodriguez were looking to adopt a new dog. Going to each shelter's website was a hit or miss. After driving for hours, they finally met Scooby! This service is meant to save people time, money, gas, and frustration.</p>
                    <br />
                    <p>Paul and Makayla always had a passion for helping pets get out of shelters and into loving homes. Adopt was created to also create a better opportunity for animals to live a better life while improving our lives!</p>
                    <br />
                    <strong><p>It all began from a real experience. Your best friend is a click away.</p></strong>
                </div>
            </section>

            <div className="top-container">
                <div className="bio-section">
                    <BioCard 
                    image="/assets/paul.jpg"
                    name="Paul Rodriguez"
                    paragraphs={[
                        "Paul is a co-founder and CEO of Adopt. Originally from Secaucus, New Jersey, Paul moved to North Carolina in 2017.",
                        "Growing up, Paul has always had a pet in the house. It first began with a yorki terror named Coco, to a Chihuahua named Max, to the dog that became his best friend, Scooby. Scooby and Paul were best of friends. Their relationship birthed the idea of Adopt.",
                        "Paul has an associate's degree in IT: Computer Science and App Developer at Catawba Valley Community College (CVCC)."
                    ]}
                    />

                    <BioCard 
                    image="/assets/Mak.png"
                    name="Makayla Rodriguez"
                    paragraphs={[
                        "Makayla is a co-founder and Head of Finances of Adopt. Makayla was born and raised in Newton, North Carolina.",
                        "Makayla has loved dogs from the start. Her first pet was named Buttons, to her lifelong family dog adopted in 2008 named Grady, an Astrailian Sheperd who passed in 2024, to Scooby, a pitbull terrior mutt. While Makayla was pregnant with Micaiah, Scooby always laid his head on her belly.",
                        "Makayla is also the Internation Commercial Accounts Manager at MDI in Hickory, NC"
                    ]}
                    />

                    <BioCard 
                    image="/assets/Mic.png"
                    name="Micaiah Rodriguez"
                    paragraphs={[
                        "Micaiah is the heart and soul of Adopt. Micaiah was born and raised in Hickory, North Carolina in 2021.",
                        "Micaiah brightens up everyone's day. Whether it is his off the wall comments on the most random things, his extremely funny questions, his spontanious dance moves, or his contagious laugh, Micaiah is the heart and soul of Adopt. Micaiah loves petting at every dog or cat he comes across.",
                        "Micaiah is the future of the company and his passion for animals will take Adopt to the next level!"
                    ]}
                    />

                    <BioCard 
                    image="/assets/scooby.jpg"
                    name="Scooby"
                    paragraphs={[
                        "Scooby is a pitbull terrior mutt from Morganton, North Carolina. Scooby was adopted from a shelter in 2019.",
                        "Scooby was one of the most energetic dogs on this planet. He was extremely strong and fast. Paul and Makayla knew Scooby was the one for them when he jumped and did a backflip off of Makayla. She was frightened, but Paul was sold.",
                        "Scooby is no longer with us, but without Scooby, Adopt would have never existed. According to Paul, he was the best dog he ever had."
                    ]}
                    />
                </div>
            </div>



            <Footer />
        </div>
    )
}
   

export default About;