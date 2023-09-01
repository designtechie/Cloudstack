

import {BsTelephone} from 'react-icons/bs'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {BiChip} from 'react-icons/bi'
import {BiSupport} from 'react-icons/bi'


import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='flex mt-24'>
      <div className='flex justify-center w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='flex justify-center w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300'>Finding the right team is key to success.
Look for team members with the right skills and experience.
Make sure the team can work together effectively.
Invest in your team and create a positive environment.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <BsTelephone className=' h-12 w-12 p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Supercharge your sales with our cutting-edge cloud management solutions. Optimize resources, streamline processes, and maximize productivity, all while gaining real-time insights into your sales performance. Elevate your business to new heights with our powerful cloud tools.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <BiSupport className='h-12 w-12 p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Experience unparalleled technical support with our cloud management website. Our expert team is dedicated to resolving your issues swiftly, ensuring seamless navigation and optimal performance. Say goodbye to complexities – we are here to simplify your cloud experience.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <BiChip className='h-12 w-12 p-2 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Elevate your cloud management with Media Query. Seamlessly optimize, monitor, and control your cloud resources through our advanced platform. Experience efficiency in every query as you harness the power of smart cloud management. Simplify your journey to the cloud with Media Query.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
