import React from "react";
import { Rings } from "react-loader-spinner";
import { BrandLogoAuthLarge } from "../../utils/assets";

const BackgroundLoader = () => {
  return (
    <>
      <div className='background-loader'>
        {BrandLogoAuthLarge}
        <Rings
          height='120'
          width='120'
          color='#81af00'
          radius='6'
          wrapperStyle={{}}
          wrapperclassName=''
          visible={true}
          ariaLabel='rings-loading'
        />
      </div>
    </>
  );
};

export default BackgroundLoader;
