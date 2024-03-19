import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Books({startIndex, subject}) {

    const [books, setBooks] = useState([])
    const index = Math.floor(Math.random() * startIndex)

    const getBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&filter=ebooks&maxResults=20&startIndex=${index}&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
            setBooks(response.data.items)
            
        } catch (error) {
            console.log('error when getting data! ', error)
        }
         
    }

    useEffect(() => {
        setTimeout(getBooks, 1000)
    }, [])

  return (
    <>
    
        {books.length != 0 || !books ? (
            <section className='md:mt-16 mt-10 2xl:w-[1500px] m-auto mb-[40px]'>
            {/* <h2 className='text-[25px] pl-2 font-medium h-8 mb-2'>Fiction</h2> */}
            <div className='flex w-full overflow-auto pl-2 items-end 2xl:w-[1500px] m-auto 2xl:mt-18 pb-4'>
                {books.map((book, index) => (
                    <div className='mr-[20px] relative w-[160px] min-w-[160px] md:w-[170px] md:min-w[170px]' key={index}>
                        <a target='blank' href={book.volumeInfo.infoLink} className='absolute w-full h-full'> </a>
                        <div className='w-full'>
                            <img className='w-[100%] border' src={book.volumeInfo.imageLinks != undefined ? book.volumeInfo.imageLinks.thumbnail : 'a'} />
                        </div>
                        <h2>{book.volumeInfo.title}</h2>
                        <div>
                            <span className='mr-[10px]'>4.5</span>
                            <span>{book.saleInfo.listPrice != undefined ? 'Rp ' + book.saleInfo.listPrice.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : 'Free'}</span>
                        {/* { console.log(book.saleInfo.listPrice.amount)} */}
                        </div>
                    </div>
                ))}
            </div>
        </section>



        ) : <>
            <div className='bg-gray-200 2xl:w-[1480px] w-[95%] rounded-sm m-auto h-[250px] animate-pulse mt-[15px] mb-[30px]'></div>
        </>}
    
    </>
  )
}
