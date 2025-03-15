import { sidebarLinks } from '@/static/data'
import { Link } from 'react-router-dom'
import Image from './Image'
import { useGlobalStore } from '@/store/global/useGlobal'


const SidebarLinks = ({creatorLinks})=>{
      const {setIsSidebarOpened} = useGlobalStore(state=>state)
    
    return(
        <>
         {
                creatorLinks.map(link=>{
                    return(
                        <li key={link.id}  className='flex items-center gap-3.5 text-md md:text-lg pl-1 md:border-b border-lgray py-3 '>
                            <Image src={link.icon} className="w-6 h-6" />
                            <Link className='' onClick={()=>setIsSidebarOpened()}>{link.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default SidebarLinks