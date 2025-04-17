import React from 'react'
import TaskPayment from '@/components/dashboard/client/TaskPayment'

const TaskPaymentPage = () => {
  return (
    <section data-testid="book-appointment" className='container font-lato'>
        <h1 className='text-xl font-[700] capitalize text-center my-12'>task payment</h1>
        <TaskPayment/>
    </section>
  )
}

export default TaskPaymentPage