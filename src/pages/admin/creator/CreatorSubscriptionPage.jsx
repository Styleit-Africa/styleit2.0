import CreatorProfile from '@/components/admin/creator/profile/CreatorProfile';
import CreatorSubscriptions from '@/components/admin/creator/subscription/CreatorSubscriptions';
import React from 'react'
import { useParams } from 'react-router-dom'

const CreatorSubscriptionPage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <section className='px-5'>
        <CreatorSubscriptions/>
    </section>
  )
}

export default CreatorSubscriptionPage