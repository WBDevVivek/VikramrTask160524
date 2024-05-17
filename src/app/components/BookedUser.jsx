import React from 'react'
import ImageComp from '@/app/components/image'
import ButtonComp from '@/app/components/button'
import HeadingComp from '@/app/components/heading'
import TextComp from '@/app/components/text'
import { airplaneimg, userIcon } from '../data'


const BookedUser = ({modal, setModal}) => {
    return (

        <div className={`  flex flex-col gap-[30px] px-[9px] items-center  justify-center `} >
            <div className={`flex  flex-col items-center gap-[29px] rounded-[20px] bg-white-700 px-[29px] pb-[30px] pt-[29px] shadow-xs  shadow-gray-300 shadow-[0_0px_10px_1px] w-[90%]`} >

                <div className={` w-[90%] max-w-[1100px] flex flex-row items-center  justify-center lg:justify-between gap-5 flex-wrap`} >

                    <div className={`   flex lg:w-[37%] items-start justify-between gap-5  p-4`} >

                        <div className={`  flex w-[79%] items-start justify-center gap-6`} >

                            <ImageComp className={`w-[100px] h-[100px] rounded-[50%] object-cover`} src={userIcon} width={100} height={100} alt="profile img" />


                            <div className={`flex flex-col items-start gap-2.5`} >
                                <HeadingComp size="s" as="h2" className={`!text-indigo-900`} >

                                    Thomas David

                                </HeadingComp>
                                <HeadingComp as="h3" >

                                    <span className={`text-black`} >Weight availability: </span>
                                    <span className={`font-normal text-gray-500`} >10kg</span>
                                </HeadingComp>
                            </div>
                        </div>
                    </div>
                        <div className={`hidden lg:flex relative h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                    <div className={`   flex flex-col lg:w-[37%] items-start gap-2  p-4 `} >

                        <HeadingComp size="s" as="h4" className={`!text-indigo-900`} >

                            Trip Details:

                        </HeadingComp>

                        <HeadingComp as="h5" >

                            <span className={`text-black`} >Flight Number:  </span>
                            <span className={`font-normal text-gray-500`} >3536325284</span>
                        </HeadingComp>
                        <HeadingComp as="h6" >

                            <span className={`text-black`} >Booking Reference number:  </span>
                            <span className={`font-normal text-gray-500`} >64683</span>
                        </HeadingComp>

                    </div>


                    <div className={`hidden lg:flex relative h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                    <ButtonComp
                        className={`min-w-[170px]  font-semibold sm:px-5 `}
                        variant="fill"
                        shape="round"
                        onClick={()=>setModal(!modal)}
                    >
                        view contact
                    </ButtonComp>

                </div>


                    <div className={`    w-[550px]  px-[10px] md:px-[50px] flex items-center justify-between gap-5 flex-col sm:flex-row `} >

                        <div className={`flex flex-col items-center gap-[5px] `} >

                            <div className={`flex self-start`} >

                                <HeadingComp as="h4" size="md" className={`!text-gray-900`}  >
                                    11.00 pm
                                </HeadingComp>

                            </div>


                            <TextComp
                                as="p"
                                className={`!font-medium !text-gray-500`}
                            >
                                Coimbatore
                            </TextComp>

                        </div>

                        <div className={`flex w-[29%] rotate-[0deg] items-center justify-between gap-5 `} >

                            <div className={`rotate-[90deg]  h-[82px]  rounded-[50%] bg-blue-500 w-px`} />

                            <ImageComp className={`w-[48px] h-[48px] object-cover`} src={airplaneimg} width={48} height={48} alt="planeicon" />

                            <div className={`rotate-[90deg]  h-[82px]  rounded-[50%] bg-blue-500 w-px`} />

                        </div>


                        <div className={`flex flex-col items-center gap-1.5`} >

                            <HeadingComp as="h4" size="md" className={`!text-gray-900`}  >
                                12:00 am
                            </HeadingComp>

                            <TextComp
                                as="p"
                                className={`!font-medium !text-gray-500`}
                            >
                                chennai
                            </TextComp>

                        </div>
                    </div>
            </div>

        </div>

    )
}

export default BookedUser