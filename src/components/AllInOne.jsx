
import { AiOutlineCheck } from 'react-icons/ai';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Discover the ultimate convenience with our All-In-One Platform. Revolutionize your workflow as you access a complete range of tools in a single, streamlined hub. Say hello to efficiency, wave goodbye to app-switching – your all-inclusive solution awaits.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Unified Resource Control</h3>
              <p className='text-lg pt-2 pb-4'>
              Streamline your cloud resources effortlessly. Manage everything from storage to computing power in one central location.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Cost Optimization </h3>
              <p className='text-lg pt-2 pb-4'>
              Minimize expenses with automated resource scaling and allocation. Maximize efficiency and save on unnecessary overhead.   
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Real-time Monitoring</h3>
              <p className='text-lg pt-2 pb-4'>
              Stay informed with live updates on your cloud performance. Proactively address issues and ensure seamless operations.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Collaborative Workflows</h3>
              <p className='text-lg pt-2 pb-4'>
              Foster teamwork with shared cloud environments. Collaborate on projects in real-time, boosting productivity and creativity.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Customizable Solutions </h3>
              <p className='text-lg pt-2 pb-4'>
              Tailor your cloud setup to match your unique needs. Scale up or down easily and adapt to changing requirements.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Data Security Assurance</h3>
              <p className='text-lg pt-2 pb-4'>
              Rest easy knowing your data is protected. Our robust security measures ensure the confidentiality and integrity of your information.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>24/7 Expert Support</h3>
              <p className='text-lg pt-2 pb-4'>
              Get assistance whenever you need it. Our round-the-clock support team is ready to tackle any challenges you face.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheck  className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Simple Migration </h3>
              <p className='text-lg pt-2 pb-4'>
              Seamlessly transition to our platform. Effortlessly migrate your existing infrastructure and start benefiting from our features.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
