import React, { useState } from 'react'

function BookingForm({movie}) {
    
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dateOptions = [
    { label: 'Today', value: today },
    { label: 'Tomorrow', value: tomorrow },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = (e)=>{
    e.preventDefault()
    alert('Your ticket for the movie '+movie.name+' has een booked!')
  }
  
    return (
      <div className='flex items-center justify-center h-screen mt-3 fixed inset-0 bg-black bg-opacity-50'>
        <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
            <h1 onClick={()=>window.location.reload()} className='text-end text-sm mt-[-1rem] cursor-pointer'>x</h1>
          <h2 className='text-2xl text-red-700 text-center font-semibold mb-4'>Movie Booking confirmation</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Movie Name</label>
              <input
                type='text'
                className='w-full p-2 border rounded-md text-red-900 text-center'
                value={movie.name}
              />
            </div>
            <div className='mb-4'>
              <div className='mt-4'>
                <label className='block font-semibold'>Select Date</label>
                <div className='grid grid-cols-2 gap-2'>
                {dateOptions.map((option) => (
                <button
                key={option.value}
                className={`border rounded p-2 border-red-300 hover:text-white hover:bg-red-600 ${
                    selectedDate === option.value ? 'bg-red-600 text-white' : ''
                }`}
                onClick={() => handleDateSelect(option.value)}
                >
              {option.label}
              <div>{option.value.toDateString()}</div>
            </button>
          ))}
        </div>
      </div>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Time</label>
              <select className='w-full p-2 border rounded-md' required>
                <option value='10:00 AM'>10:30 AM</option>
                <option value='2:00 PM'>2:00 PM</option>
                <option value='6:00 PM'>6:00 PM</option>
                <option value='10:00 PM'>10:00 PM</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Type</label>
              <div className='flex space-x-4'>
                <label className='flex items-center space-x-2'>
                  <input type='radio' name='type' value='2D' />
                  <span>2D</span>
                </label>
                <label className='flex items-center space-x-2'>
                  <input type='radio' name='type' value='3D' />
                  <span>3D</span>
                </label>
              </div>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Number of Tickets</label>
              <input
                type='number'
                className='w-full p-2 border rounded-md'
                placeholder='Enter number of tickets'
              />
            </div>
            <div className='mb-4'>
              <button
                onClick={(e)=>onSubmit(e)}
                className='w-full bg-red-700 text-white p-2 rounded-md hover:bg-red-600'
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default BookingForm