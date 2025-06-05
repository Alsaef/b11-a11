import React from 'react';
import Hero from '../assets/images/hero-banner.jpg';
const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage:
                        `url(${Hero})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Connect Through Community Events</h1>
                        <p className="mb-5">
                            Join hands to clean, plant, donate, and build a better society. Explore upcoming events,
                            volunteer opportunities, and create your own impact!
                        </p>
                        <button className="btn btn-primary">Explore Events</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;