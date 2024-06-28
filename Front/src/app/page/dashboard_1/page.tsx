import Image from 'next/image'
import React from 'react'
import SearchBar from '@/components/SearchBar/SearchBar';
import Link from 'next/link';


const page = () => {
  return (
    <div className="w-[80%] h-screen bg-darkD-600 text-white ml-[20%]">
      <div className="border-b border-solid border-gray-300 shadow-top-white flex justify-between items-center w-full p-4">
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-3">
          <div className="mr-10">
            <Image
              src="/images/notificacion.svg"
              width={24}
              height={24}
              alt="Notificaciones"
            />
          </div>
          <Image src="/images/user.svg" width={30} height={30} alt="" />
          <p>Manuel Ochoa</p>
        </div>
      </div>

      <div className="m-4">
        <h2 className="text-[58px] text-center  text-white font-bold leading-normal">
          <span className="text-[#00CE90]">Bienvenido/a </span> Manuel Ochoa
        </h2>
      </div>
      <div className="ml-8 text-xl">
        <h2 className="font-bold">SELECCIONA UN SERVICIO</h2>
      </div>
      <div className="flex flex-wrap gap-8 w-[70%] m-8">
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-sky-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/citas1.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Mis citas</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-black w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Pagos</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-red-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Recomendaciones</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-amber-800 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Recetas Medicas</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-indigo-800 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Preguntas Frecuentes</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
        <Link href="/page/dashboard_1/citas">
          <div className="flex-col bg-orange-900 w-[200px] h-[150px] rounded-md border flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <Image
              className="group-hover:fill-current text-white"
              src="/images/pagos.svg"
              width={35}
              height={35}
              alt="Pagos"
            />
            <p>Aun No Se Sabe</p>
          </div>
        </Link>
      </div>

      <div className='flex justify-end '>
        <Image
          className=" "
          src="/images/sombra.svg"
          width={600}
          height={200}
          alt="Pagos"
        />
      </div>
      <div className="flex justify-end mr-4">Robot</div>
    </div>
  );
}

export default page


//  <div className="w-full border-t border-gray-400 shadow-sm"></div>