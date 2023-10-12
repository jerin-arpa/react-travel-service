/* eslint-disable react/no-unescaped-entities */

import Navbar from "../Navbar/Navbar";

const Banner = () => {
    return (
        <div className="text-white">
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/1TprwH7/IMG-20231012-WA0017.jpg)', placeItems: 'normal' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <div className="px-20">
                        <Navbar></Navbar>
                        <div className="py-44 ">
                            <h1 className="mb-5 text-6xl font-bold">Cox's bazar</h1>
                            <p className="mb-5">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <button className="btn bg-yellow-500 border-none">Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;