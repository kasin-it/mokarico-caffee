'use client';

import { cn } from '@/lib/utils';
import { Flag } from 'lucide-react';
import { useState } from 'react';
import DefaultButton from './ui/default-button';

function AccountInfo() {
  const [section, setSection] = useState('My Account');

  const sections = [
    {
      label: 'My Account',
      section: (
        <div className="flex flex-col">
          <section className="flex flex-col">
            <div className="flex flex-col mt-5 lg:mt-0">
              <p className="text-3xl mb-5">Details</p>
              <div className="flex flex-col md:flex-row space-x-5">
                <div className="bg-red-100/40 px-4 py-5 rounded-xl w-[330px] h-[200px] border border-black/50">
                  <p>CONTACT INFORMATION</p>
                  <p>Grucha ma granatinikp</p>
                  <p>dsf@gmail.com</p>
                </div>
                <div className="bg-red-100/40 px-4 py-5 rounded-xl w-[330px] h-[200px] border border-black/50">
                  <p>CONTACT INFORMATION</p>
                  <p>Grucha ma granatinikp</p>
                  <p>dsf@gmail.com</p>
                </div>{' '}
              </div>
            </div>{' '}
            <div className="flex flex-col mt-5 lg:mt-10">
              <p className="text-3xl mb-5">Address Book</p>
              <div className="flex flex-col md:flex-row space-x-5">
                <div className="bg-red-100/40 px-4 py-5 rounded-xl w-[330px] h-[200px] border border-black/50">
                  <p>CONTACT INFORMATION</p>
                  <p>Grucha ma granatinikp</p>
                  <p>dsf@gmail.com</p>
                </div>
                <div className="bg-red-100/40 px-4 py-5 rounded-xl w-[330px] h-[200px] border border-black/50">
                  <p>CONTACT INFORMATION</p>
                  <p>Grucha ma granatinikp</p>
                  <p>dsf@gmail.com</p>
                </div>{' '}
              </div>
            </div>
          </section>
        </div>
      ),
    },
    {
      label: 'My Orders',
      section: (
        <div className="flex flex-col justify-between h-[150px]">
          <div className="flex space-x-5 w-[680px] text-blue-700 bg-blue-700/30 px-6 py-5">
            <Flag /> <p>You have placed no orders.</p>
          </div>
          <DefaultButton
            className="border-black w-[100px] bg-white text-black border hover:text-white hover:bg-black"
            onClick={() => setSection('My Account')}
          >
            BACK
          </DefaultButton>
        </div>
      ),
    },
    {
      label: 'Address Book',
      section: (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p>CONTACT INFORMATION</p>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="First Name"
                type="text"
                required
              />
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Last Name"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Company"
                type="text"
                required
              />
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Phone Number"
                type="text"
                required
              />{' '}
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Fax"
                type="text"
                required
              />
            </div>
          </div>{' '}
          <div className="flex flex-col">
            <p>ADDRESS</p>
            <input
              className={
                ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
              }
              autoComplete="auto"
              placeholder="Streat Address"
              type="text"
              required
            />
            <input
              className={
                ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
              }
              autoComplete="auto"
              placeholder="Streat Address 2"
              type="text"
              required
            />{' '}
            <input
              className={
                ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
              }
              autoComplete="auto"
              placeholder="VAT Number"
              type="text"
              required
            />
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="City"
                type="text"
                required
              />
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder=""
                type="text"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Zip/Postal Code"
                type="text"
                required
              />
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                autoComplete="auto"
                placeholder="Country"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <DefaultButton
              className="border-black w-[100px] bg-white text-black border hover:text-white hover:bg-black"
              onClick={() => setSection('My Account')}
            >
              BACK
            </DefaultButton>{' '}
            <DefaultButton
              className="w-[200px]"
              onClick={() => setSection('My Account')}
            >
              SAVE ADDRESS
            </DefaultButton>
          </div>
        </div>
      ),
    },
    {
      label: 'Account Information',
      section: (
        <div className="flex flex-col">
          <p>CONTACT INFORMATION</p>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <input
              className={
                ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
              }
              autoComplete="auto"
              placeholder="First Name"
              type="text"
              required
            />
            <input
              className={
                ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
              }
              autoComplete="auto"
              placeholder="Last Name"
              type="text"
              required
            />
          </div>
          <p>Tax / VAT number</p>
          <input
            className={
              ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
            }
            autoComplete="auto"
            // placeholder="text"
            type="text"
            required
          />
          <div className="flex justify-between w-full">
            <DefaultButton
              className="border-black w-[100px] bg-white text-black border hover:text-white hover:bg-black"
              onClick={() => setSection('My Account')}
            >
              BACK
            </DefaultButton>{' '}
            <DefaultButton
              className="w-[200px]"
              onClick={() => setSection('My Account')}
            >
              SAVE
            </DefaultButton>
          </div>
        </div>
      ),
    },
    {
      label: 'Delete Account',
      section: (
        <div className="flex flex-col">
          <p className="text-2xl mb-10">CONTACT INFORMATION</p>

          <DefaultButton
            className="w-[200px]"
            onClick={() => setSection('My Account')}
          >
            DELETE MY ACCOUNT
          </DefaultButton>
        </div>
      ),
    },
    {
      label: 'Newsletter Subscriptions',
      section: (
        <div className="flex flex-col">
          <p className="text-2xl mb-10">Subscription option</p>

          <div className='flex space-x-2 mb-5'>
            <input type="checkbox" name="SUB" id="SUB" />
            <label htmlFor="SUB">Subscription</label>
          </div>
          <DefaultButton
            className="w-[200px]"
            onClick={() => setSection('My Account')}
          >
            SAVE
          </DefaultButton>
        </div>
      ),
    },
  ];

  return (
    <article className="flex flex-col lg:flex-row">
      <ul className="bg-red-100/40 px-4 py-5 rounded-xl w-[300px] border border-black/50 h-[200px] lg:mr-5">
        {sections.map((item, index) => (
          <li
            className={cn(
              section === item.label
                ? 'text-red-500'
                : 'text-black hover:text-red-500 cursor-pointer',
            )}
            onClick={() => setSection(item.label)}
            key={index}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <section className="flex flex-col">
        {sections.map((item, index) => (
          <div
            key={index}
            className={cn(
              section === item.label ? 'className="max-w-[680px]' : 'hidden ',
            )}
          >
            {item.section}
          </div>
        ))}
      </section>
    </article>
  );
}
export default AccountInfo;
