// app/about/page.tsx

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-section">
                <div className="about-box">
                    <h3>EDUCATION</h3>
                    <p>Toronto Metropolitan University, Toronto, ON</p>
                    <p>Bachelor of Science in Computer Science | Minor in Cyber-security</p>
                </div>

                <div className="about-box">
                    <h3>TECHNICAL SKILLS</h3>
                    <p>Languages: Python, Java, Smalltalk, C</p>
                    <p>Developer Tools: Github, ReactJS, Matplotlib, OpenWeatherMap API</p>
                </div>

                <div className="about-box">
                    <h3>Contact Me</h3>
                    <p>Email: afnanm.0505@gmail.com</p>
                    <p>Phone: 647-967-9715</p>
                </div>
            </div>
        </div>
    );
}
