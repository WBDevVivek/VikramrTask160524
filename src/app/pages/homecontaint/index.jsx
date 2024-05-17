import ImageComp from '@/app/components/image'
import ButtonComp from '@/app/components/button'
import HeadingComp from '@/app/components/heading'
import TextComp from '@/app/components/text'
import SearchResultFormTo from '@/app/components/searchresultform/SearchResultFormTo'
import BookedUser from '@/app/components/BookedUser'
import {  herosecimg } from '@/app/data'


const HomeContaint = ({ modal, setModal }) => {
    return (
        <div className={`mt-[50px] flex w-[93%] flex-col items-center gap-[69px] ${modal && "blur-xl"}`}>
            {/* search form section... */}
            <div className={`self-stretch`} >
                <div className={`flex flex-col justify-center items-center`} >
                    <ImageComp className={`h-[369px] rounded-[30px] object-cover  w-full h-full`} imgurl={herosecimg} width={1340} height={369} alt="featuredimg" />

                    <div className={` bg-white flex-wrap relative mt-[-10px] sm:mt-[-30px] lg:mt-[-58px] flex max-w-[1440px] w-[97%] items-start justify-center gap-[50px] rounded-[20px] px-[21px] pb-[30px] pt-[21px] shadow-xs flex-row `} >

                        <div className={` flex flex-col sm:flex-row flex-wrap w-full items-center justify-between gap-[30px] flex-row`} >

                            <SearchResultFormTo leftrightarrow />

                            <div className={`hidden sm:flex relative h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                            <SearchResultFormTo fromtext="To" locationtext="chennai" leftrightarrow />

                            <div className={`hidden sm:flex relative  h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                            <SearchResultFormTo fromtext="date" locationtext="11/11/2024" />

                            <div className={`hidden sm:flex relative  h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                            <SearchResultFormTo fromtext="weight" locationtext="Up to 10kg" arrowDown />

                            <div className={`hidden sm:flex relative  h-[56px] rounded-lg border border-solid border-gray-400 bg-white`} />

                            <ButtonComp
                                className={`w-[200px] font-semibold `}
                                size="2xl"
                                variant="fill"
                                shape="round"
                                color="indigo-800"
                            >
                                find the traveler
                            </ButtonComp>

                        </div>
                    </div>
                </div>


                {/* trip listing section  */}


                <div className={`  container-xs flex flex-col gap-[30px] `} >

                    <div className={` px-16 flex flex-col items-start gap-3.5 `} >

                        <HeadingComp size="xl" as="h1" className={` text-center sm:text-left !text-indigo-900`} >

                            Coimbatore - chennai

                        </HeadingComp>


                        <TextComp
                            as="p"
                            className={` text-center sm:text-left sm:pl-4`}
                        >
                            Coimbatore, Tamil Nadu, India → Chennai, Tamil Nadu, India:
                        </TextComp>

                        <ButtonComp
                            className={`w-[200px] font-semibold `}
                            size="md"
                            variant="outline"
                            shape="round"
                        >
                            2 trips available
                        </ButtonComp>

                    </div>

                    <BookedUser modal={modal} setModal={setModal} />
                    <BookedUser modal={modal} setModal={setModal} />
                    <BookedUser modal={modal} setModal={setModal} />
                    <BookedUser modal={modal} setModal={setModal} />


                    {/* ------ */}
                </div>
            </div>
        </div >
    )
}

export default HomeContaint