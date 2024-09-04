import Image from "next/image";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Table from "@/components/Table";

const slides = [
  "/imgs/rebeca.jpeg", 
  "/imgs/simone-biles.jpg",
  "/imgs/simone-1.jpeg",
  "/imgs/rebeca-1.jpeg"
];

export default function Home() {
  return (
    <main className="App">
      <Header/>
      <div className="flex  justify-center  min-h-screen">
      <div className="max-w-lg mx-auto pt-10">
        <Carousel autoSlide={true}>
          {slides.map((src, index) => (
            <div key={index} className="min-w-full flex items-center justify-center">
              <Image src={src} alt={`Slide ${index}`} width={300} height={300} className="object-contain"/>
            </div>
          ))}
        </Carousel>
        <Table/>
      </div>
    </div>
    </main>
  );
}
