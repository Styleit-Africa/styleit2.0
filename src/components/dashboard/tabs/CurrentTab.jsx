import React from 'react'
import Profile from '../profile/Profile'
import Post from '../post/Post'
import Bookings from '../bookings/Bookings'

const tabComponents = {
    2:<Post/>,
    3:<Bookings page='dashboard'/>,
}

const CurrentTab = ({currentTab}) => tabComponents[currentTab] || <Profile/>

export default CurrentTab