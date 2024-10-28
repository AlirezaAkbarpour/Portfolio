import './output.css'

interface CHECKBOX{
    label: string
    value: string
}

export default function CheckBox({label,value}:CHECKBOX) {
  return (
    <section title=".squaredOne" >
    <div className="squaredOne w-full flex items-center ">
      <label htmlFor="squaredOne" className='text-xl text-gray-600 p-2'>{label}:</label>
      <div className='inputbox flex justify-center items-center'>
        <input className='mx-2' type="checkbox" id="squaredOne" name="check" />
      </div>
    </div>
    </section>
  )
}
