
"use client";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';
import React, { FormEvent,useRef } from 'react'
import {toast} from 'react-hot-toast';
import Sidebar from './Sidebar';




function TopDiv() {

     const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    //const { t } = useTranslation();

    const handleSearch = async (e: FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
                const input = inputRef.current?.value;
                const notification = toast.loading(`جاري تنفيذ سحب البيانات لــ: ${input}`);
                if (!input) return;
                if (inputRef.current?.value){
                    inputRef.current.value= "";


                }

                try {
                  const response = await fetch(`/api/activatescraper`,
                  {
                    method:"POST",
                    headers:{
                        'content-type':'application/json',
                    },
                    body:JSON.stringify({search:input})

                  }) 
                  
                  const {collection_id, start_eta} = await response.json();
                  toast.success("بدأت العملية بنجاح ,",{
                    id:notification,
                })
                
                   router.push(`/search/${collection_id}`);
                } catch (error) {
                    // handle errors
                    toast.error("عفوا.. هناك شي خطا قد حدث ,",{
                        id:notification,
                    })
                    
                }

    };

  return (
 <>
 <Sidebar/>
    <form className='flex space-x-2 justify-center rounded-md shadow-md py-2 px-4 bg-white  mx-auto' onSubmit={handleSearch}>
        <input ref={inputRef} type="text" placeholder='بحث......' className='flex-1 outline-none bg-transparent text-black placeholder:text-black'/>
        <button hidden>بحث</button>
        <MagnifyingGlassIcon className='h-6 w-6 text-orange-300 '/>
    </form>
 </>

  )
}

export default TopDiv