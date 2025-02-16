import React from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row justify-between items-center w-full bg-sky-700 text-white py-4 px-2">
            <div className="flex flex-col gap-2 w-full 2x:w-3/4">
                <p className="overflow-hidden text-overflow-ellipsis">
                    We have a block of rooms reserved at Tenaya Lodge in Yosemite. Use our
                    group code <strong className='text-yellow-500'>BOYKEN(J25)</strong> for special rates. Book by
                    April 1st to secure your room. We can't wait to celebrate with you in
                    this gorgeous setting!
                </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-row items-center text-sm w-full 2x:w-1/4 justify-end gap-10">
                <div className="overflow-hidden text-overflow-ellipsis">
                    <p>
                        Tenaya Lodge in Yosemite
                        <br />
                        1122 Highway 41
                        <br />
                        Fish Camp, CA 93623
                    </p>
                </div>
                <Button
                    variant="default"
                    className="bg-yellow-600 text-gray-800 rounded-full px-6 py-3 text-base"
                >
                    Book Now
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
