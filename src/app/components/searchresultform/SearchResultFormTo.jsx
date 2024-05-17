import React from 'react'
import TextComp from '../text'
import { downArrowIcon, leftRightArrowIcon } from '@/app/data'

const SearchResultFormTo = ({ fromtext = "from", locationtext = "Coimbatore", leftrightarrow, arrowDown, ...restProps }) => {
    return (
        <div {...restProps} className={`${restProps.className} h-full   `} >

            <div className={` w-full h-full  flex justify-center items-center`} >

                <div className={` relative border-2  p-[5px] w-[200px]  rounded-lg relative z-[1] flex items-start justify-between items-center gap-1 pl-3 `} >


                    <div className={` flex flex-col items-start py-2`} >

                        <div className={`absolute top-[-10px] flex bg-white px-1 `} >

                            <TextComp as="p" size="xs" className={`!text-gray-900 `}>
                                {fromtext}
                            </TextComp>

                        </div>

                        <TextComp as="p">
                            {locationtext}
                        </TextComp>

                    </div>

                    {/* swap horizontal icon  */}
                    <div className={`flex flex-col items-center `} >

                        {leftrightarrow ? leftRightArrowIcon : arrowDown ? downArrowIcon :"" }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultFormTo