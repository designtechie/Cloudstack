

import { AiOutlineCheck } from 'react-icons/ai';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-3xl'>
          Unlock cost-effective research management with The Right Price for Your Research. Seamlessly optimize your cloud resources for enhanced productivity and savings. Streamline your projects, amplify collaboration, and embark on data-driven discoveries with confidence. 
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Manage your cloud resources with ease and precision using our STANDARD plan. For just $49 per month, you will enjoy:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  /> 100 GB of secure storage</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  /> 2 vCPUs for lightning-fast processing
                
                </p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />24/7 customer support</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  /> 5 GB of high-speed data transfer</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  /> Take control of your cloud management today Sign up now!</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Unlock peak cloud management. Our Premium plan at $99/month gives you advanced resource control.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />PREMIUM $99/mo

                </p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />200 GB of Storage</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  /> Unlimited Data Transfer
                </p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Advanced Resource Optimization
                </p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Multi-User Collaboration
                Get ready to elevate your cloud management.
                </p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
