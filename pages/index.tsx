import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {AnnotationIcon, ArrowDownIcon} from "@heroicons/react/outline"
import { MailIcon} from "@heroicons/react/solid"


const Home: NextPage = () => {

  const projects = [
    {
      name: "Hotstar",
      imgUrl: "/image/a.png"
    },
    {
      name: "Tesla",
      imgUrl: "/image/b.png"
    },
    {
      name: "Unspash",
      imgUrl: "/image/c.png"
    },
    
    {
      name: "Priest Pizza",
      imgUrl: "/image/f.png"
    },
    {
      name: "Attendence App",
      imgUrl: "/image/g.png"
    },
    {
      name: "Granny Story",
      imgUrl: "/image/h.png"
    },
  ]
  return (
    <div className='w-full relative text-white h-screen bg-gradient-to-tr  from-rose-200 to-blue-500'>
      <Head>
        <title>Subham kumar singh</title>
        <link rel="icon" href="https://static.vecteezy.com/system/resources/thumbnails/004/467/266/small/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg" />
      </Head>
      <div className=' absolute h-full'>
            <img className='object-cover w-full h-full' src="https://wallpaperaccess.com/full/2454628.png" alt="" />
          </div>

      <div className="max-w-screen-xl  mx-auto h-full">
        <div className='flex justify-center backdrop-blur-xl shadow-xl  h-full items-center lg:grid lg:grid-cols-10'>
        {/* left side  */}
        <div className='lg:col-span-3  h-full space-y-2 flex justify-center items-center p-5 flex-col'>
        <div className=' bg-gradient-to-bl from-rose-500 to-yellow-500  rounded-full'>
          <img className='w-44 h-44 p-1  object-cover rounded-full' src="https://yt3.ggpht.com/22sHdA6g8Q1XEWiHXsi4nMqKHQdDUGFD3ub4bbAdp_WdPoKxJlgWhxC9zbHvlOq7795-rScFFQ=s900-c-k-c0x00ffffff-no-rj" alt='' />
          </div>
          <div className='flex flex-1 items-start justify-start w-full flex-col'>
            <div className='my-6 w-full flex justify-center items-center flex-col'>
               <h1 className='text-xl   uppercase font-bold'>Subham kumar singh</h1>
               <p className='font-thin text-center text-xs'>Web designer . Full Stack Developer</p>
            </div>
          
          <p className='text-xl italic font-light my-2'>Extra details</p>
          <p className='text-sm  italic font-semibold'>Studied from <span className='font-thin hover:underline cursor-pointer '>Birla Institute of Technology Mesra, Ranchi</span> </p>
          <p className='text-sm  italic font-semibold text-center'>Marks Scored: <span className='font-thin hover:underline cursor-pointer '>83% in 10<sup>th</sup> and 90% in 12<sup>th</sup> </span> </p>

          </div>
          
          
          <div className='flex justify-center w-full  space-x-2 items-center'>
            <img className='social-icons' src="https://apcusa.org/wp-content/uploads/sites/2/2020/10/youtube-2.png" alt="" />
            <img className='social-icons' src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png" alt="" />
            <img className='social-icons' src="https://icons-for-free.com/download-icon-black+line+linkedin+social+icon-1320191608689709544_512.png" alt="" />
            <img className='social-icons' src="https://cdn.icon-icons.com/icons2/2714/PNG/512/instagram_logo_thin_icon_171701.png" alt="" />
            <img className='social-icons' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
          </div>
        </div>
        {/* right side  */}
        <div className=' lg:col-span-7 overflow-y-scroll scrollbar-hide  w-full h-screen'>
            <section className='flex justify-center items-center flex-col w-full h-full'>
              <div className='flex justify-center items-center flex-col w-full h-screen'>
                  <h1 className='text-6xl p-2  animate-pulse  italic'>I'm Subham Kumar Singh</h1>
                  <p className='text-gray-500 text-center text-sm'>Based in India. Student Of B.I.T Mesra. React Soul .</p>
                  <div className='flex   justify-center w-full my-6  space-x-4 items-center'>
                     <img className='social-icon' src="https://apcusa.org/wp-content/uploads/sites/2/2020/10/youtube-2.png" alt="" />
                     <img className='social-icon' src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png" alt="" />
                     <img className='social-icon' src="https://icons-for-free.com/download-icon-black+line+linkedin+social+icon-1320191608689709544_512.png" alt="" />
                     <img className='social-icon' src="https://cdn.icon-icons.com/icons2/2714/PNG/512/instagram_logo_thin_icon_171701.png" alt="" />
                     <img className='social-icon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                  </div>
                 <div className='flex justify-center mt-10 items-center'>
                  <ArrowDownIcon className='w-10 h-10 p-2 cursor-pointer rounded-full animate-bounce text-black bg-white m-2'/>
              </div>
              </div>
              

             
            </section>
            <section className='w-full mx-auto h-[100vh] rounded-lg text-gray-800  flex justify-center items-center  flex-col  backdrop-blur-sm '>
            
              <h1 className='text-5xl mb-10 font-thin text-white'>About Me</h1>
              <div className='bg-white p-3 rounded-lg'>
              <div className=' border-b  border-gray-800 border-t mx-4 py-6 px-10 flex justify-center flex-col space-x-3 items-center'>
              <h1 className='text-3xl text-left m-3   '>About Me</h1>
              <p className=' text-xs font-mono text-gray-600'>Hi there! I am Subham! You might know me as The Noble Priest.I have worked in full stack Developer Environment so i have some skill as a web developer. Recently i came through the New Platform NEXT JS which is the best FrameWork for React Development. I have also worked with the React native Platform So i also know the basics of React Native. Being a Web developer it Don't Mean that i Don't Know Other Programming language like JAVA, Python, C++ etc. I Have also designed a Module In java like Set Thoery, Star Pattern Module, Number Pattern Module, Sorting Module, Graph Sorting Modules</p>
              </div>
              <div className=' flex-col border-b  border-gray-800  flex justify-center space-x-3 items-center'>
              <h1 className='text-3xl m-2  '>Contact Details</h1>
              <div className='flex p-2 justify-center  flex-col'>
              <p className=' text-xs italic'>Subham Kumar</p>
              <p className=' text-xs italic'>Railway Quarter Kargali, Phusro</p>
              <p className=' text-xs italic'>India Devosphere, 829104</p>
              <p className=' text-xs italic'>+91 8709041869</p>
              <p className=' text-xs italic'>mr.techy065@gmail.com</p>
              </div>
              </div>
          </div>
            </section>

            <section className='h-screen w-full  flex justify-center items-center flex-col'>
            <h1 className='text-5xl mb-10 font-thin'>Resume</h1>
              <div>
                <div className=' border-b border-gray-800 border-t mx-4 py-4 flex justify-center space-x-3 items-start'>
                  <h1 className='text-3xl underline m-2 decoration-4 underline-offset-8 decoration-blue-400  w-56'>Education</h1>
                  <div className='w-6/12'>
                    <h2>B.I.T Mesra, Ranchi</h2>
                    <p>Bachelor's Degree, Computer Science • 2022</p>
                    <p>Graduated with First Class Honours</p>
                  </div>
                </div>
                <div className=' border-b border-gray-800 border-t mx-4 py-4 flex justify-center space-x-3 items-start'>
                <h1 className='text-3xl underline m-2 decoration-4 underline-offset-8 decoration-blue-400  w-56'>Work</h1>
                  <div className='w-6/12'>
                    <h2>The Noble Priest</h2>
                  <p>Student at B.I.T Mesra • May 2019 - Present</p>
                  <p>Cloning all the apps possible. On the way to clone the world! I will become an auntriproner on day.</p>
                  </div>
                </div>
                <div className=' border-b font-mono border-gray-800 border-t mx-4 py-4 flex justify-center space-x-3 items-start'>
                  
                  <h1 className='text-3xl underline m-2 decoration-4 underline-offset-8 decoration-blue-400  w-56'>Skills</h1>
                  <div className='w-6/12'>
                  <p className='text-xs my-5'>My Programming Language Proficiency</p>
                  <div className='space-y-3' >
                    <div>
                      <label className="text-sm" >REACT JS</label>
                      <p className='bg-gray-600 w-[500px] h-[40px]'></p>
                    </div>
                    <div>
                      <label className="text-sm" >PYTHON</label>
                      <p className='bg-gray-600 w-[480px] h-[40px]'></p>

                    </div>
                    <div>
                      <label className="text-sm" >GIT</label>
                      <p className='bg-gray-600 w-[450px] h-[40px]'></p>

                    </div>
                    <div>
                      <label className="text-sm" >JAVASCRIPT</label>
                      <p className='bg-gray-600 w-[490px] h-[40px]'></p>

                    </div>
                    <div>
                      <label className="text-sm" >NEXT JS</label>
                      <p className='bg-gray-600 w-[500px] h-[40px]'></p>

                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </section>
            <section className='h-screen w-full flex justify-center items-center flex-col'>
              <h1 className='text-6xl uppercase font-thin my-4'>Project </h1>
              <div className='grid grid-cols-3 space-x-3 space-y-3'>
                {projects.map(project=>(
                  <div className='p-2 flex flex-col justify-center items-center' >
                    <h1 className='text-sm italic my-2'>{project.name}</h1>
                    <img className='hover:scale-105 duration-150 cursor-pointer' src={project.imgUrl} alt="" />
                  </div>
                ))}
              </div>
            </section>

            <section className='flex relative w-full h-[60vh] items-center flex-col'>
           
              <div className=' absolute top-0 left-0  h-full w-full '>
                <img className='object-cover h-full w-full' src="/image/bg.jpg" alt="" />
              </div>
              <div className='relative w-full flex justify-center items-center flex-col'>
                 <h1 className='text-6xl uppercase font-thin my-4'>Testimonial </h1>
                 <div className='w-full '>

                  <AnnotationIcon className='w-16 h-16 ml-10'/>
                 </div>
                 <div className='w-[70%] flex justify-center items-center space-x-3'>
                    <div className=' space-y-4'>
                    <div>
                    <p className='text-sm font-light  font-mono'>Subham is Best as Web Developer and frontend Is really very strong</p>
                    <p  className='text-xs font-thin italic text-gray-200'> - Dr. Partha Sarathi Bishnu</p>
                    </div>
                  <div>
                    <p className='text-sm font-light  font-mono'>Subham Can make dynamic page with fuild experience.</p>
                    <p className='text-xs font-thin italic text-gray-200'> - Dr. Siba Mitra</p>

                  </div>
                    
                    <div>
                    <p className='text-sm font-light  font-mono'>Number of Full Stack Designer are less  But, Subham is one of them. </p>
                    <p className='text-xs font-thin italic text-gray-200'> - Dr. Khalid Aasraf</p>

                    </div>
                    
                    
                    </div>
                 </div>
              </div>
            </section>
            {/* <section className='flex relative w-full h-screen mt-10 items-center flex-col'>
            <h1 className='text-6xl uppercase font-thin my-4'>Contact </h1>
            <div className='w-[60%] flex justify-start space-x-4 items-center '>
                <MailIcon className='h-14  w-14'/>
                <h2>You can Contact me</h2>
            </div>
                <form className='flex w-[50%] text-gray-500 mt-5c justify-start space-y-5 flex-col items-start'>
                  <div className='w-full flex justify-between space-x-4 items-center  '>
                    <label className=' uppercase' htmlFor="">Name</label>
                    <input className=' outline-none w-[300px] px-2 py-1' required type="text" />
                  </div>
                  <div className='w-full  flex justify-between space-x-4 items-center '>
                    <label className=' uppercase' htmlFor="">Email</label>
                    <input className=' outline-none w-[300px] px-2 py-1' required type="text" />
                  </div>
                  <div className='w-full  flex justify-between space-x-4 items-center '>
                    <label className=' uppercase' htmlFor="">Subject</label>
                    <input className=' outline-none w-[300px] px-2 py-1' required type="text" />
                  </div>
                  <div className='w-full  flex justify-between space-x-4 items-center '>
                    <label className=' uppercase' htmlFor="">Message</label>
                    <textarea className=' outline-none p-2 w-[300px] h-[200px]' name="field" id="12"></textarea>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>

                  <button className='w-[150px] mt-6 bg-blue-500 ml-10 rounded-lg text-white p-2'>Submit</button>
                  </div>
                </form>
            </section> */}
        </div>
      </div>
      </div>
      

      
    </div>
  )
}

export default Home
