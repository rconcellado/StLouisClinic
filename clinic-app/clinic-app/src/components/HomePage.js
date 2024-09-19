//import React, { useState } from 'react';
//import { toast, ToastContainer } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/HomePage.css';  // Link to CSS for the page

function HomePage() {
    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [submitted, setSubmitted] = useState(false);
    //const [setSubmitted] = useState(false);

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    if (name && email) {
    //        toast.success('Thank you for contacting us! We will get back to you soon.');
    //        setName('');
    //        setEmail('');
    //        setSubmitted(true);
    //    }
    //};

    return (
        <div>
            {/* Banner Section */}
            <div className="banner-container">
                <img src="clinicbanner.jpg" alt="Banner" className="banner-image" />
            </div>

            <main>
                {/* Packages Section */}
                <section className="package-container">
                    <div className="package">
                        <h2>Buntis Package 1</h2>
                        <ul>
                            <li>Complete Blood Count (CBC)</li>
                            <li>Urine Analysis</li>
                            <li>Hepa B Screening</li>
                            <li>Syphilis Screening</li>
                            <li>Blood Typing with RH</li>
                            <li>TVS/Pelvic Ultrasound</li>
                        </ul>
                        <p className="price">PHP 1800</p>
                    </div>

                    <div className="package">
                        <h2>Buntis Package 2</h2>
                        <ul>
                            <li>Complete Blood Count (CBC)</li>
                            <li>Urine Analysis</li>
                            <li>Hepa B Screening</li>
                            <li>Syphilis Screening</li>
                            <li>Blood Typing with RH</li>
                            <li>HIV Screening</li>
                            <li>TVS/Pelvic Ultrasound</li>
                        </ul>
                        <p className="price">PHP 2500</p>
                    </div>

                    <section className="package">
                        <h2>Other Services</h2>
                        <ul>
                            <li>Transvaginal/Pelvic Ultrasound</li>
                            <li>Fetal Biophysical Profile (FBPS)</li>
                            <li>Gender Scan</li>
                            <li>Congenital Anomaly Scan *For Scheduling</li>
                        </ul>
                    </section>
                </section>

                {/* Services Section */}
                

                {/* Contact Section */}
                {/*<section className="contact-container">*/}
                {/*    <h2>Contact Us</h2>*/}
                {/*    <p><strong>Phone:</strong> 09279565848</p>*/}
                {/*    <p><strong>Email:</strong> stlouisimagingandultrasoun.qc@gmail.com</p>*/}
                {/*    <p><strong>Address:</strong> Lot 1, Blk 1, Sitio Bathala, Brgy Bahay Toro Proj 8, Quezon City</p>*/}

                {/*    <form onSubmit={handleSubmit}>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            value={name}*/}
                {/*            onChange={(e) => setName(e.target.value)}*/}
                {/*            placeholder="Enter your name"*/}
                {/*            required*/}
                {/*        />*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            value={email}*/}
                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                {/*            placeholder="Enter your email"*/}
                {/*            required*/}
                {/*        />*/}
                {/*        <button type="submit">Submit</button>*/}
                {/*    </form>*/}

                {/*    {submitted && (*/}
                {/*        <div id="confirmation-message">*/}
                {/*            Thank you for contacting us! We'll get back to you soon.*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</section>*/}
            </main>

            {/* ToastContainer for toast notifications */}
            <ToastContainer />
        </div>
    );
}

export default HomePage;
