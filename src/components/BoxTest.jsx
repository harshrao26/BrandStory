import React from 'react'
import tbg from "../assets/tbg.png";

const BoxTest = () => {
  return (
    <div>
      <div className='relative'>
        <img src={tbg} alt="" className="h-full w" />

        {/* <p className='absolute left-28 pl-60 pr-20 top-28'>
          The Equence platform was instrumental in our path to becoming the 4th
          largest diagnostic company in India. Their invaluable support in our
          lead generation campaigns generated a strong ROI. Their real-time
          analytics were pivotal for conducting effective A/B testing and
          optimizing our marketing initiatives when needed. I wholeheartedly
          recommend their services.
        </p> */}
      </div>
    </div>
  );
}

export default BoxTest