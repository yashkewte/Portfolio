import avatarImg from '../../assets/my_bg.png'
import TextChange from '../TextChange'
import { LuDownload } from 'react-icons/lu'
import resume from '../../assets/resume/resume-07.pdf'
import { Button } from '../ui/button'
import Magnet from '../../../ReactBits/Magnet/Magnet'
import ProfileCard from '../../../ReactBits/ProfileCard/ProfileCard'

function Home() {


  const handleDownload = () => {
    const resumeUrl = resume
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Yash_Kewte_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className='text-white flex w-full justify-between items-start p-8 md:p-15'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
        <p className='text-sm md:text-2xl tracking-tight'>I’m a passionate Full-Stack MERN Web Developer with experience in building dynamic web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in creating efficient backend and responsive frontend interfaces. With a strong knowledge in RESTful APIs, database management, authentication, and state management (Redux/Context API).</p>

        <Magnet padding={50} disabled={false} magnetStrength={1.5}> <Button size='lg' onClick={handleDownload} className='mt-5 md:md-10 cursor-pointer flex items-center justify-center gap-3 text-white py-2 px-4 text-sm md:text-lg bg-[#F8B55F] rounded-sm md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 font-semibold'>
          Resume<LuDownload size={20} />
        </Button>
        </Magnet>
      </div>
      <div className='hidden md:block mt-10 '>
        {/* <img id='homeImg' src={avatarImg} alt="avatar"
          className='md:h-110 relative md:top-0 top-0 '
          loading='lazy'

        /> */}
        <ProfileCard
          name="Yash Kewate"
          title="Software Engineer"
          handle="yashkewte"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatarImg}
          showUserInfo={true}
          enableTilt={true}
      
          onContactClick={() =>{
            const section = document.getElementById('Contact')
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' })
            }
            
          }}
        />
      </div>
    </div>
  )
}

export default Home
