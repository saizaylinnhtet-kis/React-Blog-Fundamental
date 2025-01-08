import { FaSearch, FaUserCircle } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='border-2 border-gray-200 p-4 flex justify-between items-center'>
        <div className='items-center flex border-2 rounded-full px-4 py-2 ml-[5rem]'>
            <FaSearch/>
            <input type="text" placeholder='Search' className='bg-transparent outline-none ml-2'/>
        </div>
        <section className='flex items-center mr-[5rem]'>
            <FaUserCircle className='text-3xl cursor-pointer'/>
        </section>  
    </nav>
  )
}

export default Navigation