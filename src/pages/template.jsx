"use client";
import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ErrorBoundary } from "react-error-boundary";
import Error from './error';


export default function Template({children}) {

  return (
    <>
    <ErrorBoundary fallback={<Error />}>
      <Navbar/>
      {children}
      <Footer />
    </ErrorBoundary>
    </>
  )
}
