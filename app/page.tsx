
import React from 'react'
import { MagnifyingGlassIcon,CircleStackIcon } from '@heroicons/react/24/solid';

function HomePage() {
  // const t = useTranslations('Index');
  return (
    <div className='flex flex-col items-center jus'>
    <CircleStackIcon className='h-64 w-64 text-orange-500 mt-5'/>
    <h1 className='text-3xl text-center mr-2 text-black font-bold mb-5 mt-10 '>تطبيق سحب بيانات من موقع امازون</h1>
   <h2 className='text-lg italic text-center text-black/50'> يمكن تطبيق الابلكيشن على اي موقع لسحب البيانات منه بشكل سلس ومتزامن وبشكل تلقائي</h2>
    <h3 className='text-lg text-center italic text-black/50'>تواصلو معنا عبر الايميل   </h3>
    <a href='mailto:koutaiba4it@gmail.com' type='email' className='text-blue-500 line-spin-fade-loader mt-3'>koutaiba4it@gmail.com</a>
    </div>

  );
}

export default HomePage