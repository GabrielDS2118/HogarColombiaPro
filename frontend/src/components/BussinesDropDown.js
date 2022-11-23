import React, { useState, useContext } from 'react';
// import icons
import { RiKey2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const BussinesDropDown = () => {
  const { business, setBusiness, listBusiness } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log(listBusiness);
  console.log(business);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiKey2Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[12px] font-medium leading-tight">{business}</div>
          <div className="text-[10px]">Select your business</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {listBusiness.map((bussine, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setBusiness(bussine)}
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {bussine}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BussinesDropDown;
