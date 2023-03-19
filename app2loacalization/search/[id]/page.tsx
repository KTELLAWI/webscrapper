"use client"
import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore';
import {useDocument} from 'react-firebase-hooks/firestore';
import {toast} from 'react-hot-toast';

import { adminDb } from '../../../firebaseAdmin';
import { db } from '../../../firebase';
import Results from '../../../components/Results';
import { useRouter } from 'next/navigation';
var Spinner = require('react-spinkit');

type Props={
    params:{
        id:string;
    }
}

function SearchPage({params : {id} } : Props) {
    const router = useRouter();

    const handleDelete = ()=>{
        deleteDoc(doc(db,"search",id));
        toast.success("Deleting start successfully ,");
        router.push("/");

    }
    const deleteButton = (
            <button className='bg-orange-500 text-white px-4 py-2 rounded-lg' onClick={handleDelete}>
                Delete search
            </button>
    );
    
    const [snapshot,loading,error] = useDocument(doc(db,"search",id));
    if(loading) 
    return(
        <h1 className='text-center p-10 animate-pulse text-xl text-blue-600'>Loading Results...</h1>
    )
    if(!snapshot?.exists()) return;
    if (snapshot.data()?.status == "pending")
    return (
        <div className='flex flex-col gap-y-5 py-10 items-center justify-center '>
            <p className='text-orange-500 animate-pulse'>
            Scraping results from Amazone.....
            </p>
            <Spinner  name ='line-scale' fadeIn='none' color ='orange' />
            {deleteButton}
        </div>
    )

  return (
    <div className='py-5'>
        <div className='flex items-center justify-between mb-7'>
            <div className='flex flex-col md:flex-row gap-x-4'>
                <h1 className='font-bold'>
                    Search results for {""}
                    <span className='text-orange-400 '>
                       {snapshot.data()?.search} 
                    </span>
                </h1>
                <p className='text-grey-300 text-1xl'>
                    {snapshot.data()?.results?.length > 0 && `${snapshot.data()?.results?.length} result found `}
                </p>
               
            </div>
            {deleteButton}
        </div>
        { snapshot.data()?.results?.length > 0 && (<Results results={snapshot.data()?.results}/>
        )}
    </div>
  )
}

export default SearchPage