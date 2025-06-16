import './gradients.css'

const Gradients = () => {
  return (
    <>
    <div className="gradient-1 hidden md:block absolute -z-20  h-[400px] w-[400px] bg-sky-300 blur-[70px] rounded-full">
    </div>
    <div className="gradient-2 hidden md:block absolute -z-20 h-[400px] w-[400px] bg-pink-300 blur-[70px] rounded-full">
    </div>
    <div className="gradient-3 hidden md:block absolute -z-20 h-[400px] w-[400px] bg-emerald-300 blur-[70px] rounded-full">
    </div>
    </>
  )
}

export default Gradients