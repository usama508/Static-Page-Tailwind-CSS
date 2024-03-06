import React from "react"
import './App.css'
import {IoMail} from 'react-icons/io5'
import {HiPhone} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import monial from './images/monial.png'
import rank from './images/rank.png'
import logo from './images/logo.png'
import c1 from './images/c1.png'
import c2 from './images/c2.png'
import c3 from './images/c3.png'

export default function App() {
  return (
    <>
      {/* Header */}
      <div className="w-full header-main">
        <div className="lg:w-96 md:w-80 w-64 mx-auto pb-8 pt-14">
          <img src={logo} alt="" className="" />
        </div>

        <div className="header-p lg:w-80 md:w-72 sm:w-72 w-64 p-2 mx-auto rounded-full ">
          <p className="text-white  lg:text-md text-center text-sm mx-auto ">Lorem Ipsum is simply dummy</p>
        </div>

        <div className="lg:w-2/4 mx-auto sm:w-1/2 md:3/5">
          <h1 className="text-white lg:text-8xl text-6xl text-center font-extrabold drop-shadow-2xl">Lorem ipsum Lorem</h1>
        </div>

        <div className="text-center pt-24 pb-12">
          <button type='submit' className="bg-white text-center text-green-600 font-bold p-4 rounded-full w-40">Help Me</button>
        </div>





      </div>


      {/* Services */}

      <div className="w-96 mx-auto pt-24 ">
        <h1 className="text-neutral-500 text-5xl text-center font-extrabold">Services</h1>
      </div>
      <div className="lg:w-3/4 md:w-2/4 sm:w-1/2 w-2/4 pt-16   flex flex-col mx-auto lg:flex-row md:flex-row sm:flex-col justify-center ">
        <div className=" mt-5  shadow-lg rounded-3xl">
          <img src={c1} alt="" />
          <h1 className="text-green-900 text-lg font-extrabold p-5">Lorem Ipsum</h1>
          <p className="text-green-900 text-sm font-medium p-5 -mt-8 lg:w-80 md:w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

        </div>

        <div className=" mt-5 shadow-lg rounded-3xl lg:ml-8 md:ml-8">
          <img src={c2} alt="" />
          <h1 className="text-green-900 text-lg font-extrabold p-5">Lorem Ipsum</h1>
          <p className="text-green-900 text-sm font-medium p-5 -mt-8 lg:w-80 md:w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

        </div>

        <div className="  mt-5  shadow-lg rounded-3xl lg:ml-8 md:ml-8">
          <img src={c3} alt="" />
          <h1 className="text-green-900 text-lg font-extrabold p-5">Lorem Ipsum</h1>
          <p className="text-green-900 text-sm font-medium p-5 -mt-8 lg:w-80 md:w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

        </div>




      </div>
      <div className="text-center pt-10 pb-12 ">
        <button type='submit' className="bg-white text-center shadow-lg border-none shadow-green-100 text-green-600 font-bold p-4 rounded-full w-40">Help Me</button>
      </div>


      {/* About Us */}
      <div className="w-96 mx-auto pt-5 pb-16 ">
        <h1 className="text-neutral-500 text-5xl text-center font-extrabold">About Us</h1>
      </div>

      <div className="head-about ">
        <div className=" lg:w-3/4 sm:w-full mx-auto  pt-32 flex lg:flex-row md:flex-row sm:flex-col  flex-col justify-center">
          <p className="text-white   text-center p-4 mt-5 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <p className="text-white   text-center p-4 mt-5  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <p className="text-white   text-center p-4 mt-5 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="text-center pt-8 pb-12">
          <button type='submit' className="bg-white text-center text-green-600 font-bold p-4 rounded-full w-40">Help Me</button>
        </div>
      </div>


      {/*Testy/s*/}

      <div className="w-96 mx-auto pt-5 pb-16 ">
        <h1 className="text-neutral-500 text-5xl text-center font-extrabold">Testymonials</h1>
      </div>

      <div className="w-3/4  mx-auto flex flex-wrap ">
        <div className="card-object  flex border border-green-800 rounded-3xl ">

          <div className="w-80 p-5">
            <img src={monial} alt="" />
          </div>

          <div className="pt-5 ">
            <h1 className="text-green-600 font-bold">Courtney Henry</h1>
            <p className="text-green-900 pt-3  pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <img src={rank} alt="" className="pt-3 pb-3" />
          </div>

        </div>

        <div className="card-object  flex border border-green-800 rounded-3xl ">

<div className="w-80 p-5">
  <img src={monial} alt="" />
</div>

<div className="pt-5 ">
  <h1 className="text-green-600 font-bold">Courtney Henry</h1>
  <p className="text-green-900 pt-3  pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
  <img src={rank} alt="" className="pt-3 pb-3" />
</div>

</div>
<div className="card-object   flex border border-green-800 rounded-3xl ">

<div className="w-80 p-5">
  <img src={monial} alt="" />
</div>

<div className="pt-5 ">
  <h1 className="text-green-600 font-bold">Courtney Henry</h1>
  <p className="text-green-900 pt-3  pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
  <img src={rank} alt="" className="pt-3 pb-3" />
</div>

</div>
<div className="card-object   flex border border-green-800 rounded-3xl ">

<div className="w-80 p-5">
  <img src={monial} alt="" />
</div>

<div className="pt-5 ">
  <h1 className="text-green-600 font-bold">Courtney Henry</h1>
  <p className="text-green-900 pt-3  pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
  <img src={rank} alt="" className="pt-3 pb-3" />
</div>

</div>

        
      </div>


      {/* Contact Form */}

      <div className="w-96 mx-auto pt-5 pb-16 ">
        <h1 className="text-neutral-500 text-5xl text-center font-extrabold">Contact Us</h1>
       
      </div>
      <div className="lg:w-2/3  justify-center mx-auto lg:flex pb-10">
        <div className="flex flex-col">
        <input type="text" className="bg-green-200 mt-5 w-80 mx-auto rounded-full p-2" />
        <input type="text" className="bg-green-200 mt-5 w-80 mx-auto rounded-full p-2"/>
        <input type="text" className="bg-green-200 mt-5 w-80 mx-auto rounded-full p-2"/>
        <button type="submit" className="mt-5 w-32 mx-auto border-2 border-green-600 rounded-full py-1 text-white">Submit</button>
        </div>

        <div className="pt-5">
<div className="flex flex-row justify-center -ml-16">
        <IoMail className="text-green-600"/><p className="text-gray-800 ml-10">test@gmail.com</p>
        
       </div>

       <div className="flex flex-row justify-center pt-5 -ml-16">
        <HiPhone className="text-green-600"/><p className="text-gray-800 ml-10">(303) 555-0105</p>
        
       </div>

       <div className="flex flex-row justify-center ml-28 pt-5">
        <IoLocationSharp className="text-green-600"/><p className="text-gray-800 ml-5 ">2715 Ash Dr. San Jose, South Dakota 83475 </p>
        
       </div>
        </div>
       
       

      </div>









    </>
  )
}