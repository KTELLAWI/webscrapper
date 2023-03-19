"use client"
import React from 'react'
import { Toaster } from 'react-hot-toast';
 export default function ClientProvide({
    children,

 }:
 {
    children:React.ReactNode;

 })
 {
return (


<>

<Toaster/>
{children}
</>
);
 }