
import Loading from '@/components/loading'
import dynamic from 'next/dynamic'


const DynamicHome = dynamic(()=> import('../pages/home'),{
  loading: ()=>{
    return <Loading />
  }
})

export default function Home(){
  return <DynamicHome/>
}


