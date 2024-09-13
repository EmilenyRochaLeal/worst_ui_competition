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
    <main className="max-w-screen-lg mx-auto p-4  min-h-screen flex flex-col justify-between">
      <Header />
        <h1 className="text-4xl font-bold text-center my-4 ">Worst UI <br /> Competion</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-start">
        <div className="w-1/3">
           <Table />
        </div>
        <div className="w-2/3 flex justify-center">
          <Carousel autoSlide={true}>
            {slides.map((src, index) => (
              <div key={index} className="min-w-full flex items-center justify-center">
                <Image src={src} alt={`Slide ${index}`} width={300} height={300} className="object-contain" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <footer className="text-center mt-8 mb-4 text-gray-500">&copy; 2024 Leal, E.R</footer>
    </main>
  );
}



