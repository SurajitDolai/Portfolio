import swiggy from '../../public/swiggy.png'
import bloodbank from '../../public/bloodbank.png'
import todo from '../../public/todo.png'
import restaurant from '../../public/restaurant.png'
import school_management from '../../public/school.png';
import { motion } from "motion/react";

export default function Project() {

  const items = [
    {
      name: "Blood Bank Management Project",
      img: bloodbank,
      desc: [
        "Manage donors and blood stock efficiently.",
        "Handle blood requests and allocations quickly.",
        "Secure login for admin, donors, and hospitals.",
        "Dashboard with reports and real-time statistics."
      ],
      techstack: ["React", "Bootstrap", "Express", "JWT", "Node.js", "Mongo DB"],
      demo: "https://blood-bank-management-phi.vercel.app/",
      github: ""
    },
    {
      name: "Todo App",
      img: todo,
      desc: [
        "Add Tasks – Users can quickly add new tasks with a title or short description.",
        "View Tasks – All pending and completed tasks are displayed in a clear, organized list.",
        "Edit or Delete Tasks – Users can edit existing tasks or delete them when no longer needed.",
        "Mark as Completed – Tasks can be marked as done, helping users track their progress."
      ],
      techstack: ["React", "Bootstrap", "Express", "JWT", "Node.js", "Mongo DB"],
      demo: "https://blood-bank-management-phi.vercel.app/",
      github: ""
    },
    {
      name: "Swiggy clone",
      img: swiggy,
      desc: [
        "Swiggy clone only frontend design with React.js.",
        "Responsive design for mobile and desktop users.",
        "Interactive UI with smooth navigation and animations.",
        "Showcase of various restaurants and food items."
      ],
      techstack: ["React", "Bootstrap", "Node.js",],
      demo: "https://restaurant-management-phi.vercel.app/",
      github: ""
    },
    {
      name: "Restaurant Management Project",
      img: restaurant,
      desc: [
        "Manage restaurant operations efficiently.",
        "Handle table reservations and customer orders.",
        "Secure login for admin and staff.",
        "Dashboard with sales reports and analytics."
      ],
      techstack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      demo: "https://restaurant-management-phi.vercel.app/",
      github: ""
    },
    {
      name: "School Management Project",
      img: school_management,
      desc: [
        "Manage student data and personal details.",
        "Handle subjects and class information.",
        "Record and update student marks and results.",
        "Maintain attendance and teacher details."
      ],
      techstack: ["React", "Bootstrap", "Express", "JWT", "Node.js", "Mongo DB"],
      demo: "https://blood-bank-management-phi.vercel.app/",
      github: ""
    },
 
  ]
  return (
    <div className='w-[90%] m-auto md:my-4 md:py-0 md:px-2' id='project'>
      <p className='text-3xl text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-bold italic   border-b-2 border-gray-200 rounded-2xl p-3 md:inline-block my-10 md:my-0 '>Project</p>


      {items.map((e, i) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            exit={{ opacity: 0, y: -100 }}
            viewport={{ once: false, amount: 0.3 }}

            className='flex md:flex-row flex-col p-3 border-2 border-violet-800 rounded-4xl shadow-md shadow-violet-100 md:w-[60%] md:even:ms-[10%] md:odd:ms-[30%] mt-6 ' key={i}>
            <div className='w-[100%] md:w-[30%] flex flex-col justify-center items-center'>
              <img src={e.img} alt={bloodbank} className='' />
              <div className='flex gap-4 mt-4'>
                <p className='bg-amber-600  px-7 py-2 rounded-full font-bold shadow-sm shadow-black hover:bg-amber-500 hover:shadow-2xs hover:shadow-amber-50'><a href="">Demo</a></p>
                <p className='bg-amber-600  px-7 py-2 rounded-full font-bold shadow-sm shadow-black hover:bg-amber-500 hover:shadow-2xs hover:shadow-amber-50'><a href="">Github</a></p>

              </div>
            </div>
            <div className=' md:w-[70%] p-6'>
              <p className='text-white text-2xl font-bold'>{e.name}</p>
              {
                e.desc && e.desc.map((el, ind) => {
                  return (
                    <li className='text-white ps-2 my-1 font-serif' key={ind}>{el}</li>
                  )
                })
              }
              <div className='grid grid-cols-5 gap-1'>
                {
                  e.techstack && e.techstack.map((el, ind) => {
                    return (
                      <span className='py-1 text-center px-2 bg-violet-7 backdrop-blur-3xl border-2 border-violet-800 rounded-3xl text-white ' key={ind}>{el}</span>
                    )
                  })
                }

              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

