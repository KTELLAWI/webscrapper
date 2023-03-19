"use client"
import React from 'react'
import {CircleStackIcon, DocumentMagnifyingGlassIcon} from "@heroicons/react/24/solid"
import {collection,orderBy,query} from "firebase/firestore"
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import SideBarRow from './SideBarRow'
import Link from 'next/link'

// import { useRouter } from '../public/locales/';

// export const getStaticProps = async ({ locale }) => {
//   const translations = await serverSideTranslations(locale, ['common']);

//   // Initialize i18n instance with the same language as the user's browser
//   const { i18n } = useTranslation();
//   await i18n.changeLanguage("en");

//   return {
//     props: {
//       ...translations,
//     },
//   };
// };

function Sidebar() {
  // const t = useTranslations('Index');
  // const locale = useLocale();
  // const otherLocale = locale === 'en' ? 'ar' : 'en';
  // const {push,locales,locale}= useRouter();
  //  const handleClick =(l:any)=>{
  //   push('/',undefined,{locale:l});

  //  }

  const [snapshot,loading,error] = useCollection(query(collection(db,"search"),orderBy("start_eta","desc")));
  
  return (
    <div className='p-0  overflow-x-auto  '>
      {/* {locales?.map(l =>(
        <button key={l} onClick={()=>handleClick(l)}>
          {l}

        </button>
      ))} */}
    <div className='flex flex-col items-center justify-center mb-0' >
      <Link  href="/" >
        
    <CircleStackIcon className='h-16 md:w-16 text-orange-600' />
    </Link>
    <h1 className='hidden md:inline font-bold mb-2 text-center text-3xl mt-2 '> امازون سكرابر</h1>
    <h1 className='hidden md:inline text-xs text-center italic '>مستخرج بيانات المواقع</h1>
    </div>
    <ul className='flex  gap-2 py-2 overflow-x-auto ' >
      {snapshot?.docs.map((doc)=>(
            <SideBarRow key={doc.id} doc={doc} />
     ) 
     )}
    </ul>
    
    </div>
  )
}

export default Sidebar
// export async function getStaticProps(local:any) {
//   return {
//     props: {
//       // You can get the messages from anywhere you like. The recommended
//       // pattern is to put them in JSON files separated by language.
//       messages: (await import(`../public/locales/${locale}.json`)).default
//     }
//   };
// }