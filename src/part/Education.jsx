

export default function Education() {
  return (
      <div className='w-[90%]  m-auto my-5 md:my-0 md:h-screen overflow-hidden' id='education' >
            <span className=' bg-amber-400 inline-block text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic  border-b-2 border-blue-800 rounded-2xl p-3  my-5 mx-auto  md:my-0'>Education</span>
            <div className='md:mt-5 md:my-2 py-4' id='edu-1'>
              <div className='md:w-[40%] bg-[#19183B]  shadow-sm shadow-black   border-none py-2  text-gray-400 m-auto    text-[20px] text-center font-serif  transition-all duration-700 ease-in-out cursor-pointer ' >
                <p className='font-mono md:text-[20px] text-[12px] '>Meghnad Saha Institute of Technology</p>
                <p className='font-mono md:text-[20px] text-[12px] '>Master of Computer Applications (MCA)</p>
                <p className='font-mono md:text-[20px] text-[12px] '>2023 - 2025</p>
                <p className='font-mono md:text-[20px] text-[12px] '>Kolkata</p>
              </div>
            </div>
            <div className=' my-5 py-4 ' id='edu-2'>
              <div className='md:w-[40%]  py-2  text-gray-400  shadow-sm shadow-black   border-2  m-auto  cursor-pointer  text-[20px] text-center font-serif '>
                <p className='font-mono md:text-[20px] text-[12px]'>Mahishadal Raj College</p>
                <p className='font-mono md:text-[20px] text-[12px]'>Bachelor of Computer Applications (BCA)</p>
                <p className='font-mono md:text-[20px] text-[12px]'>2020 - 2023</p>
                <p className='font-mono md:text-[20px] text-[12px]'>Mahishadal, East Medinipur</p>
              </div>
            </div>
            <div className=' my-5 py-4' id='edu-1'>
              <div className='md:w-[40%] bg-[#19183B]   border-none py-2  text-gray-400 m-auto  shadow-sm shadow-black text-[20px] text-center font-serif  cursor-pointer ' >
                <p className='font-mono md:text-[20px] text-[12px]'>Chaksimulia Kamakhya Vidyapith</p>
                <p className='font-mono md:text-[20px] text-[12px]'>High Secondary (H.S)</p>
                <p className='font-mono md:text-[20px] text-[12px]'>2018 - 2020</p>
                <p className='font-mono md:text-[20px] text-[12px]'>Thekuachak, East Medinipur</p>
              </div>
            </div>
          </div>
  );
}
