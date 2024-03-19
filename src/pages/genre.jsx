import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Genre() {
  const subjects = [
    "Fiction",
    "Nonfiction",
    "Education",
    "Mystery",
    "Thriller",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-help",
    "Business & Economics",
    "Cooking",
    "Travel",
    "Art",
    "Religion",
    "Philosophy",
    "Children's Literature",
    "Science",
    "Technology",
    "Engineering",
    "Mathematics",
    "Poetry",
    "Drama",
    "Humor",
    "Health & Fitness",
    "Sports",
  ];

  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [subject, setSubject] = useState('Education')

  const again = async () => {
    setStartIndex(startIndex + 40)
    if (startIndex + 40 > totalItems) {
        // alert('udah abis!!')
    } else {
        const newBooks = [...books]
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=40&startIndex=${startIndex}&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
        newBooks.push(...response.data.items)
        setBooks(newBooks)
        if( newBooks == undefined) {
          setBooks([])
        }
    }
}

const getEducationBooks = async () => {
    const response =  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=40&startIndex=0&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
    setBooks(response.data.items)
    setTotalItems(response.data.totalItems)
    setStartIndex(40)
    // setSubject('education')
}

 useEffect(() => {
    getEducationBooks()
 }, [])


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

  const handleSubjectClick = async (subject) => {
    setBooks([])
    setTotalItems(0)
    setStartIndex(0)
    setSubject(subject)
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=40&key=AIzaSyDYCDIklVRNGRFzmo-0sDKqKWYno37nT4A`)
    setBooks(response.data.items)
    setTotalItems(response.data.totalItems)
    setStartIndex(40)
}

  return (
    <>
      <section className="pt-[90px] sticky mb-[25px] pl-2 pr-2 overflow-auto m-auto flex gap-2 2xl:w-[1500px] 2xl:m-auto 2xl:pl-0 2xl:mb-2 ml-[20px]">
        {subjects.map((genre, index) => (
            <button key={index} className={genre == subject ? "border border-black rounded-[5px] p-2 pl-3 pr-3 flex-shrink-0 bg-black text-white    " : "border bg-white border-black rounded-[5px] p-2 pl-3 pr-3 flex-shrink-0"} onClick={() => handleSubjectClick(genre)}>{genre}</button>
        ))}
      </section>

      <section className="2xl:w-[1500px] flex m-auto flex-wrap gap-4 justify-center 2xl:justify-normal">
        {books.length != 0 || !books?
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
  );
}
