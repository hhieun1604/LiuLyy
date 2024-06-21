import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="cursor-poniter flex flex-col items-center bg-while 
    rounded-lg shadow-lg overflow-hidden w-[16rem] mx-12 border "
    >
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-900">
          {product.title}
         
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
