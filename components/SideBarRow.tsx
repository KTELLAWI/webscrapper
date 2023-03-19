import React, { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import { usePathname, useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
// import { useLocale } from 'next-intl';
var Spinner = require('react-spinkit');
type Props={
   doc:DocumentData; 
}
function SideBarRow({doc}:Props) {
    const router = useRouter();
    const pathname = usePathname();
    const [active,setActive]=useState(false);
    // const locale = useLocale();


    useEffect(() => {
      if (!pathname) return;
      setActive(pathname.includes(doc.id));
    
    
    }, [pathname,doc])
    

  return (
    <li className={`flex justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg shadow-orange-100  ${active && "bg-white shadow-md "}`}
    onClick={()=>router.push(`/search/${doc.id}`)}>
        <div className='flex flx-col justify-center'>   
            <p className='text-xs md:text-base font-bold p-2'>
               {doc?.data()?.search} 
            </p>
            {doc.data().status == 'pending' && (<p className='text-xs'> جاري استجلاب البيانات........</p>)}

        </div>
        <span className='ml-2'>
            {doc.data().status=="pending" ? (
                   <Spinner  name ='line-scale' fadeIn='none' color ='orange' />
            ):(
                        <CheckCircleIcon className='h-6 w-6 text-green-700'/>
            )}  
        </span>
    </li>
  )
}

export default SideBarRow