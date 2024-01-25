import './App.css'
import Article from './Components/Article'

function App({ articles }) {

  const handleSort = (sortBy) => {
    console.log(sortBy)

  }


  return (
    <div>

      <div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-lg font-bold'>Table of dummy data</h1>
          <div className='flex items-center gap-10 mt-5'>
            <h4 className='text-md'>Sort By: </h4>
            <button type="button" className="py-2 px-5 me-2 mb-2 text-sm font-medium text-white bg-gray-700 focus:outline-none rounded-md border" onClick={() => handleSort('recent')}>Most Recent</button>
            <button type="button" className="py-2 px-5 me-2 mb-2 text-sm font-medium text-white bg-gray-700 focus:outline-none rounded-md border    " onClick={() => handleSort('upvoted')}>Upvoted</button>
          </div>
        </div>
      </div>


      <Article articles={articles} />
    </div>
  )
}

export default App
