/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-danger */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import NavItem from './NavItem';

export default function Header() {
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function getSanitizedSearchValue() {
    return searchValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return (
    (
      <div className="header flex px-3 items-stretch">
        <div className="flex-1 flex items-stretch">
          {/* Logo Section */}
          <div className="flex items-center ml-2">
            <Link href="/" className="flex items-center" legacyBehavior>
              <Image src="/roblox-logo-dark.svg" width={118} height={30} alt="Logo" />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="pl-3 flex">
            <NavItem href="/discover">Discover</NavItem>
            <NavItem href="/marketplace">Marketplace</NavItem>
            <NavItem href="/create">Create</NavItem>
            <NavItem href="/upgrades/robux">Robux</NavItem>
          </div>
          {/* Search Bar */}
          <div className="ml-5 flex items-center">
            <FontAwesomeIcon icon={faSearch} className="absolute ml-2 text-slate-300" />
            <Tippy
              visible={searchMenuOpen}
              onClickOutside={() => setSearchMenuOpen(false)}
              placement="bottom"
              className="w-[385px] !max-w-none bg-neutral-800"
              content={(
                <div className="flex flex-col w-full text-neutral-400 font-medium">
                  {['People', 'Experiences', 'Marketplace', 'Groups', 'Creator Marketplace'].map((category) => (
                    <Link
                      key={category}
                      href={`/search/${category.toLowerCase()}?keyword=${getSanitizedSearchValue()}`}
                      className="search-menu-item p-4 border-b-[1px] border-neutral-600"
                      legacyBehavior
                    >
                      <div className="flex items-center">
                        <span className={`icon-spritesheet-6 icon-search-${category.toLowerCase()} mr-1`} />
                        <span className="text-white">{getSanitizedSearchValue()}</span>
                        <span>
                          {' '}
                          in
                          {category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
  )}
            >
              <input
                className="bg-black bg-opacity-50 pt-[2px] px-3 pl-9 font-light placeholder:text-gray-600 rounded-lg border-[1px] border-gray-700 focus:border-gray-800 w-96"
                onInput={(e) => {
                  setSearchMenuOpen(e.target.value.length > 0);
                  setSearchValue(e.target.value);
                }}
                onClick={(e) => setSearchMenuOpen(e.target.value.length > 0)}
                type="text"
                placeholder="Search"
              />
            </Tippy>
          </div>
          {/* User and Notification Menus */}
          <div className="flex items-center py-1">
            {/* User Profile Section */}
            <div className="flex items-center mr-3">
              <Link href="/users/2/profile" className="flex items-center" legacyBehavior>
                <div className="flex items-center">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJ1bmFwcHJvdmVkXzFfIj48cGF0aCBpZD0iYmdfMl8iIGZpbGw9IiM2NTY2NjgiIGQ9Ik0wIDBoOTB2OTBIMHoiLz48ZyBpZD0idW5hcHByb3ZlZCIgb3BhY2l0eT0iLjMiPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjQ1IiBjeT0iNDguOCIgcj0iMTAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzggNDEuN2wxNCAxNC4xTTMyLjUgMjMuNWgtNHY0TTI4LjUgNjIuNXY0aDRNMjguNSAzMS44djZNMjguNSA0MnY2TTI4LjUgNTIuMnY2TTU3LjUgNjYuNWg0di00TTYxLjUgNTguMnYtNk02MS41IDQ4di02TTYxLjUgMzcuOHYtNE0zNi44IDY2LjVoNk00Ny4yIDY2LjVoNk0zNi44IDIzLjVoNk00Ny4yIDIzLjVoNE01MS40IDIzLjh2M001OC41IDMzLjhoM001MS4yIDMwLjJ2My42aDMuNiIvPjwvZz48L2c+PC9zdmc+"
                    width={28}
                    height={28}
                    className="rounded-full"
                    alt="User Avatar"
                  />
                  <span className="text-xs font-medium ml-1">@Floatzel</span>
                </div>
              </Link>
              <span className="text-xs text-gray-300 ml-1">13+</span>
            </div>
            {/* Notifications */}
            <Tippy
              trigger="click"
              className="p-0 mr-4 text-neutral-400 bg-neutral-900 text-lg h-96 w-[400px] flex flex-col"
              content={(
                <div className="flex flex-col h-96">
                  <div className="flex text-xs p-3 bg-neutral-900">
                    <span className="flex-1">Notifications</span>
                    <Link href="/my/account#/notifications" className="text-white">Settings</Link>
                  </div>
                  <div className="p-3 bg-black bg-opacity-30 flex-grow">
                    No notifications.
                  </div>
                </div>
            )}
            >
              <button
                className="p-[2.5px] pr-[3px] rounded-lg
                bg-white bg-opacity-0 hover:bg-opacity-20 mr-2"
              >
                <span className="icon-spritesheet icon-notification-stream" />
              </button>
            </Tippy>
            {/* Settings Menu */}
            <Tippy
              trigger="click"
              className="p-0 text-neutral-400 bg-neutral-900 w-[300px]"
              content={(
                <div className="flex flex-col">
                  <Link href="/settings/account" className="p-3 hover:bg-neutral-800">
                    Account Settings
                  </Link>
                  <Link href="/settings/security" className="p-3 hover:bg-neutral-800">
                    Security Settings
                  </Link>
                </div>
            )}
            >
              <button className="p-[2.5px] pr-[3px] rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
                <span className="icon-spritesheet icon-settings" />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    )
  );
}
