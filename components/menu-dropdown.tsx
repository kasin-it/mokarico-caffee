import { useState } from 'react';
import Link from 'next/link';

type DropdownItem = {
  label: string;
  href: string;
  items?: DropdownItem[];
};

type Sizes = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type MenuDropdownProps = {
  dropdownName: string;
  itemsList: DropdownItem[];
  bigLabel?: boolean;
  sizeBig?: Sizes;
  sizeSmall?: Sizes;
  href?: string;
};

function MenuDropdown({
  dropdownName,
  itemsList,
  bigLabel = false,
  sizeBig = '4xl',
  sizeSmall = '2xl',
  href = '#',
}: MenuDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className={'flex w-full flex-row items-center justify-between'}>
        <Link
          href={href}
          className={`hover:text-orange-600 ${
            bigLabel ? `text-${sizeBig}` : `text-${sizeSmall}`
          }`}
        >
          {dropdownName}
        </Link>
        <button
          type="button"
          className={'group flex items-center text-5xl hover:text-orange-600'}
          onClick={toggleDropdown}
        >
          {/* Dropdown indicator */}
          {isDropdownOpen ? <span className={'text-orange-600'}>-</span> : '+'}
        </button>
      </div>
      <ul
        className={`ms-5 mt-2 space-y-2 rounded-lg text-2xl transition-all duration-300 ease-in-out ${
          isDropdownOpen ? 'max-h-[1000vh] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}
      >
        {itemsList.map((item, index) => (
          <li key={index}>
            {item.items ? (
              <MenuDropdown
                dropdownName={item.label}
                itemsList={item.items}
                bigLabel={false} // Pass the value of bigLabel to nested dropdown
                key={index}
              />
            ) : (
              <Link
                href={item.href}
                className={'hover:text-orange-600'}
                key={index}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuDropdown;
