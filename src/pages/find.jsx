import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Find() {
    const {query} = useParams()
    const [books, setBooks] = useState([])
    const [totalItems, setTotalItems] = useState()
    const [startIndex, setStartIndex] = useState(0)

    const findBooks = async () => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&filter=ebooks&maxResults=40&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
        if ( response.data.items == undefined) {
            setBooks([])
        } else {
            setBooks(response.data.items)
            setTotalItems(response.data.totalItems)
        }
    }

    useEffect(() => {
        setBooks([])
        findBooks()
    }, [query])

    const again = async () => {
        setStartIndex(startIndex + 40)
        if (startIndex + 40 > totalItems) {
            // alert('udah abis!!')
        } else {
            const newBooks = [...books]
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&filter=ebooks&maxResults=40&startIndex=${startIndex}&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
            newBooks.push(...response.data.items)
            setBooks(newBooks)
        }
    }

    useEffect(() => {
        const onscroll = () => {
            const scrolledTo = window.scrollY + window.innerHeight + 100
            const isReachBottom =  scrolledTo >= document.body.scrollHeight
            if (isReachBottom) again()
        }
        window.addEventListener("scroll", onscroll)
        return () => {
            window.removeEventListener("scroll", onscroll)
        }
      }, [books])
 
  return (
    <>
        <h1 className='pt-[100px] 2xl:w-[1500px] pl-8 2xl:pl-0 pb-4 flex m-auto text-[18px]'>Found {totalItems} books for the search "<b>{query}</b>"" </h1>
        <section className="2xl:w-[1500px] flex m-auto flex-wrap gap-4 justify-center 2xl:justify-normal pt-[12px]">
        {books.length != 0 || !books ?
        <>
            {books.map((book, index) => (
                        <div className='w-3/12 min-w-3/12 2xl:w-[190px] 2xl:min-w[190px] relative' key={index}>
                            <a target='blank' href={book.volumeInfo.infoLink} className='absolute w-full h-full'> </a>
                            <div className='w-full'>
                                <img className={book.volumeInfo.imageLinks != undefined ? 'w-[100%] border' : 'w-[100%] border h-[140px] 2xl:h-[260px]'} src={book.volumeInfo.imageLinks != undefined ? book.volumeInfo.imageLinks.thumbnail : 'a'} />
                            </div>
                            <h2 className="overflow-hidden max-h-[48px]">{book.volumeInfo.title}</h2>
                            <div>
                                <span className='mr-[10px]'></span>
                                <span>{book.saleInfo.listPrice != undefined ? 'Rp ' + book.saleInfo.listPrice.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : 'Free'}</span>
                            {/* { console.log(book.saleInfo.listPrice.amount)} */}
                            </div>
                        </div>
            ))}
        </> : <>
        <div className='bg-gray-200 2xl:w-[1480px] w-[85%] rounded-sm m-auto h-[250px] animate-pulse mt-[10px] mb-[20px]'></div>
        <div className='bg-gray-200 2xl:w-[1480px] w-[85%] rounded-sm m-auto h-[250px] animate-pulse mb-[20px]'></div>
        <div className='bg-gray-200 2xl:w-[1480px] w-[85%] rounded-sm m-auto h-[250px] animate-pulse mb-[20px]'></div>
        <div className='bg-gray-200 2xl:w-[1480px] w-[85%] rounded-sm m-auto h-[250px] animate-pulse mb-[20px]'></div>
        </>}
      </section>

    </>
  )
}
