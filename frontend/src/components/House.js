import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={house.image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3 inline-block">
          {house.type}
        </div>

        <div className="bg-yellow-500 rounded-full text-white px-3 inline-block">
          {house.business}
        </div>

        <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
          {house.country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{house.address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBed />
          </div>
          <div className="text-base">{house.bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBath />
          </div>
          <div className="text-base">{house.bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiArea />
          </div>
          <div className="text-base">{house.surface}</div>
        </div>
      </div>
      {house.price.length > 1 ? (
        <div className="text-md font-semibold text-violet-600 mb-4">
          <p>
            Rent: ${house.price[0]} - Sale: ${house.price[1]}
          </p>
          <p></p>
        </div>
      ) : (
        <div className="text-md font-semibold text-violet-600 mb-4">
          <p>
            {house.business}: ${house.price[0]}
          </p>
        </div>
      )}
    </div>
  );
};

export default House;
