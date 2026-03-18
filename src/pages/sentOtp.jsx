import React from 'react'

const sentOtp = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div>

                <form action="/send-otp" method="post" className='flex flex-col gap-4'>
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="submit"  />
                </form>
            </div>
            <div>

                <form action="">

                </form>
            </div>
        </div>
    )
}

export default sentOtp
