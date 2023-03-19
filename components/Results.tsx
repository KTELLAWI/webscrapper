import Link from 'next/link'
import { features } from 'process'
import React from 'react'

type Props = {
    results:Product[],
}
function Results({results}: Props) {
  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-3 w-full gap-3'>
       { results.map((result)=>(
            <Link
            href={result.url}
            key={result.title}
            className='flex flex-col space-x-4 w-full bg-white rounded-lg shadow-md p-5 border-t-2 border-orange-500 '

            >
                <img
                srcSet={result.imageset}
                alt={result.title}
                className='object-contain w-full h-40 py-5'
                />
                <div className='flex flex-col py-5 flex-1'>
                    <p className='font-bold'>{result?.title}</p>
                    <p className='text-sm text-grey-500 '>
                        {result?.rating}({result?.reviews} reviews)
                    </p>
                    <div className='flex space-x-2 justify-end flex-1'>
                        <p className='font-bold text-black pt-2 text-xl mt-auto'>
                            {result?.price > 0 ? `$${result?.price}`:"N/A"}

                        </p>
                        {result?.previous_price>0 && (
                            <p className='font-bold text-black/50 line-through pt-2 text-xl mt-auto'>
                                            ${result?.previous_price}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-wrap gap-2 justify-end mt-5'>
                        {result?.features.map((feature)=>(
                            <p key={feature}
                            className='text-xs bg-black px-2 py-1 text-white rounded-md'>
                                        {feature}
                            </p>
                            ))}
                    </div>
                </div>
            
            </Link>
        ))
       }

    </div>
  )
}

export default Results