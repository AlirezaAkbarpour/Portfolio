import AddSVG from './add_shape.svg'

export default function PortfolioMange() {
  
    const title = '</> Manage Project'

    return (
    <div className="w-full px-10">
            <h1 className="text-3xl font-semibold text-white my-2">{title}</h1>
            <div className='w-full bg-white h-14 my-6 flex justify-between items-center rounded-md'>
              <input className="w-full h-full rounded-md px-12
              text-xl font-extralight focus:ring-white focus:ring-1" placeholder="Edit And Add New Projects" />
              <AddSVG/>
            </div>
    </div>
  )
}
