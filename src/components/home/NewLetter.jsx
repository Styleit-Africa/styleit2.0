import React from 'react'

const NewLetter = () => {
  return (
    <section className="px-5 md:px-0 bg-secondary py-8 md:py-16 font-lato ">
        <h1 className="capitalize text-center text-2xl md:text-4xl text-primary mb-12">Subscribe to our newsletter</h1>
        <form className="max-w-[650px] mx-auto">
                <div>
                    <input className="w-full pl-8 py-6  md:py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Full name" type="text" name="name" />
                </div>
                <div className="mt-8">
                    <input className="w-full pl-8 py-6  md:py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Email" type="email" name="email" />
                </div>
                <button className="w-full mx-auto mt-9 md:mt-12 bg-primary py-4 md:py-6 text-white
                      text-[1.4rem] md:font-[700] font-lato  rounded-[1.1rem] ">Subscribe</button>
        </form>
    </section>
  )
}

export default NewLetter