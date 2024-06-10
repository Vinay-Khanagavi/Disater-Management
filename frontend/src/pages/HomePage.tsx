import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <Carousel>
                {/* Slide 1 */}
                <div>
                    <img src="https://cdn.pixabay.com/photo/2013/06/12/21/31/flood-139000_640.jpg" alt="Slide 1" />
                    <p className="legend">Legend 1</p>
                </div>

                {/* Slide 2 */}
                <div>
                    <img src="https://media.istockphoto.com/id/1349255827/photo/caldor-fire-california.jpg?s=612x612&w=0&k=20&c=dAyN-nBzuElOTHcOdvaUAQYp9fK7zsuiir3L1HFauyk=" alt="Slide 2" />
                    <p className="legend">Legend 2</p>
                </div>

                {/* ... (more slides) ... */}
            </Carousel>

            <h2>Welcome to Crisis Response Management</h2>
            {/* ... your other content ... */}
        </div>
    );
};
export default HomePage;
