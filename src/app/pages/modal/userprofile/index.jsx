"use client"


import ButtonComp from '@/app/components/button'
import HeadingComp from '@/app/components/heading'
import ImageComp from '@/app/components/image'
import TextComp from '@/app/components/text'
import UserProfileData from '@/app/components/userdata/UserProfileData'
import { closeIcon, editIcon, userDetailsData, userIcon } from '@/app/data'


const UserProfile = ({ modal,
  setModal }) => {
  return (
     <div className={`z-20 absolute  flex justify-center items-center w-full  `} >


      <div className={`   w-full sm:w-[80%]  flex flex-col justify-between items-center rounded-[10px] bg-white px-[30px] pb-20 pt-[30px]  shadow-gray-300 shadow-[0_0px_10px_1px] `}>

        {/* closeIcon */}
    
        <ButtonComp
          className={`w-[25px] relative mb-[13px] ml-[-22px] self-end !rounded-[12px] `}
          variant="fill"
          shape="round"
          color="indigo-800"
          size="xs"
          onClick={() => setModal(!modal)}
        >
          {closeIcon}
        </ButtonComp>


        {/* profile setting  */}


        <div className={`mr-[0px] md:mr-[50px] flex w-full sm:w-[95%] flex-col items-center `} >

          <HeadingComp as="h1" size="lg" className={`self-start !font-bold`}>
            Profile Settings
          </HeadingComp>


          {/* profile navigation section */}

          <div className={`   w-full mt-[23px] flex self-stretch rounded-[10px] bg-white px-0 md:px-8 shadow-gray-300 shadow-[0_0px_10px_1px] `} >

            <div className={`    flex w-full sm:w-[300px] items-start gap-4 self-end `} >
              <div className={`   w-full  flex flex-col sm:flex-row items-center justify-start sm:justify-between gap-5 self-stretch`} >
                <div className={`flex sm:w-[54%] items-center  justify-start sm:justify-between gap-5  p-4 border-b-4 border-blue-800 `} >
                  <HeadingComp as="h2" className={`!text-indigo-900 `}>
                    Profile Details
                  </HeadingComp>

                </div>

                <div className={`flex sm:w-[54%] items-center  justify-start sm:justify-between gap-5  p-4 border-b-4 border-blue-800 `}>
                  <HeadingComp as="h3" className={`!text-gray-900  `}>
                    My Trips
                  </HeadingComp>
                </div>
              </div>

            </div>
          </div>

          {/* userinformation section  */}


          <div className={`mt-[29px] flex w-[200px] flex-col items-center gap-[29px]    `} >

            <div className={`flex w-[61%] items-center    `} >

              <ImageComp className={` min-w-[110px] w-[110px] h-[110px] rounded-[50%] `} src={userIcon} width={110} height={1} alt="profileimg" />

              <ButtonComp
                className={`w-[25px] relative mb-[13px] ml-[-22px] self-end !rounded-[12px] `}
                variant="fill"
                shape="round"
                size="xs"
              >
                {editIcon}
              </ButtonComp>

            </div>


            <div className={`flex flex-col items-center gap-2 pl-[11px] pr-[13px] `} >

              <HeadingComp as="h2" size="md" className={`!text-gray-900`}>
                john doe.
              </HeadingComp>

              <TextComp as="p" className={`!text-gray-500`}>
                johndoe@gmail.com
              </TextComp>

            </div>
          </div>


          {/* userdetails edit section  */}


          <div className={`   w-full  mt-[17px] self-stretch rounded-[20px] bg-white py-[31px] pl-[0px] md:pl-[22px]  pr-0 md:pr-6 shadow-xs flex justify-center items-center  shadow-gray-300 shadow-[0_0px_10px_1px] `} >

            <div className={`   self-center w-full max-w-[800px] flex flex-col gap-8 p-4`} >

              {
                userDetailsData?.map((data, i) => {
                  return <UserProfileData key={i} val={data} />
                })
              }
      

            </div>
          </div>

          {/* profile action button section  */}

          <div className={`mt-[50px] flex gap-6 self-end`} >

            <ButtonComp
              className={`min-w-[140px] font-semibold `}
              variant="outline"
              shape="round"
              onClick={() => setModal(!modal)}
            >
              Cancel
            </ButtonComp>

            <ButtonComp
              className={`min-w-[140px]  font-semibold `}
              variant="fill"
              shape="round"
            >
              save
            </ButtonComp>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserProfile
