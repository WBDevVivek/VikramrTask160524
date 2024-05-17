
"use client"

import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeContaint from "./pages/homecontaint";
import UserProfile from "./pages/modal/userprofile";

export default function Home() {

const [modal, setModal] = useState(false)


  return (
    <main className=" w-[1440px] flex w-full flex-col items-center bg-white pt-[30px] ">
      <Header />
     <HomeContaint modal={modal} setModal={setModal}/>
      {modal && <UserProfile modal={modal} setModal={setModal}/> }
      <Footer />
    </main>
  );
}
