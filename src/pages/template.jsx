"use client";
import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ErrorBoundary } from "react-error-boundary";
import Error from './error';
import { useNavigate } from 'react-router-dom';


export default function Template({children}) {
  const navigate = useNavigate()

  useEffect(() => {
    const login = localStorage.getItem('uid')
    if ( !login ) {
        navigate('/login')
    }
}, [])

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
