import React from 'react'

const BankDetails = ({userProfile})=>{
    return(
        <div className="pl-1 text-lightGray mt-4 font-lato">
            <h3 className="font-[400]">Bank details</h3>
            <div className=" text-sm">
            <p className="mt-1.5"> Account name: <span>{userProfile.firstName}</span></p>
            <p className="mt-1.5"> Account number: <span>{userProfile.lastName}</span></p>
            <p className="mt-1.5"> Bank name: <span>{userProfile.bankName}</span></p>
            </div>
        </div>
    )
}

export default BankDetails