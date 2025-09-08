import React from 'react'
import UserProfile from '../profile/UserProfile'
import LoginDetails from '../LoginDetails';
import RatingAndReviews from '../RatingAndReviews';
const info = {
    profile:<UserProfile/>,
    loginDetails:<LoginDetails/>,
    ratingsAndReviews:<RatingAndReviews/>
}

const CurrentInformation = ({currentTab})=>info[currentTab]

export default CurrentInformation