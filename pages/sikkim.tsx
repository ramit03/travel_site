import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import SwiperCard from "@/components/sikkim/swiperCard";

type Props = {};

const Sikkim: NextPage = () => {
  return (
    <div className="w-screen h-full bg-lightest-blue ">
      <Head>
        <title>Sikkim</title>
      </Head>
      <section>
        <Header />
      </section>
      <div className="w-screen flex items-center justify-center bg-center h-[450px] bg-cover bg-[url(../public/images/1.jpg)]">
        <h1 className="text-5xl mont-text text-white font-mont  font-bold">
          Sikkim
        </h1>
      </div>
      <div className="w-screen px-20  flex-col flex  justify-center">
        <p className="sans-text text-neutral-1 mt-6 w-3/4 text-2xl tracking-widest">
          Nestled in the lap of the Himalayas, Sikkim is a beautiful state in
          northeastern India. With its stunning natural beauty, breathtaking
          landscapes, and rich cultural heritage, Sikkim has something to offer
          for everyone. Whether you`&apos;`re a nature lover, an adventure enthusiast,
          or a history buff, Sikkim will not disappoint you. From the stunning
          beauty of the Himalayas to the tranquility of its lakes, from the
          vibrant culture of its people to the delicious local cuisine, Sikkim
          has everything that a traveler could ask for. Explore the charming
          hill towns, go trekking in the mountains, visit ancient monasteries
          and enjoy the warm hospitality of the locals - Sikkim is waiting to be
          explored!
        </p>
        <h2 className="text-3xl mt-7 font-bold text-dark-blue-2">
          Our Packages
        </h2>
        <div className="w-full h-full mt-8 pb-2 px-16">
          <Swiper
            slidesPerView={3}
            navigation={true}
            spaceBetween={15}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
          </Swiper>
        </div>

        <h2 className="text-3xl mt-7 font-bold text-dark-blue-2">
          Travel Guide{" "}
        </h2>
      </div>
    </div>
  );
};
export default Sikkim;
