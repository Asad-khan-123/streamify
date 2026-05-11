import { useState } from 'react'
import API from '../api/axios'

import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
  const navigate = useNavigate()
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[price, setPrice] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await API.post('/courses/create', { title, description, price })
      console.log(response.data)
      navigate('/admin/dashboard')
    } catch (error) {
      console.log(error)
  }
};
    return(
      <div>
        <h1 className='text-2xl font-bold mb-4'>Create Course</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='title' className='block'>Title</label>
            <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full border p-2' required />
          </div>
          <div>
            <label htmlFor='description' className='block'>Description</label>
            <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} className='w-full border p-2' required />
          </div>
          <div>
            <label htmlFor='price' className='block'>Price</label>
            <input type='number' id='price' value={price} onChange={(e) => setPrice(e.target.value)} className='w-full border p-2' required />
          </div>
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
            Create Course
          </button>
        </form>
      </div>
    )
}

export default CreateCourse