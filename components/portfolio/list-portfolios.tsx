import ListItemComponent from "./list-item";

export default function ListPortfolioComponent() {
  return (
    <div className='w-full h-full bg-white py-8'>
        <h1 className='w-full h-16 py-4 px-20 text-4xl font-semibold'>List Portfolios</h1>
        <div className='w-full px-20 mt-8'>
           <ListItemComponent/>
           <ListItemComponent/>
        </div>
    </div>
  )
}
