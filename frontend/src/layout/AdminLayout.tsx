import OpenCampusSVG from '../resources/OpenCampus Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup, faCaretRight} from '@fortawesome/free-solid-svg-icons'


const AdminLayout = () => {
    return <div className='flex flex-col h-screen'>
        <div className='flex items-center bg-gradient-to-r from-purple-500 to-red-600'>
            <img src={OpenCampusSVG} className='w-12 h-12 m-4 text-xl' />
            <div className='px-4 text-2xl text-white'>OpenCampus Administration</div>
            <div className='text-white ml-auto m-6 px-16 py-2 bg-gray-400'>test</div>
        </div>

        <div className=' h-full w-24 bg-gray-300 flex flex-col items-center'>
            <div className='flex items-center hover:bg-blue-600 w-full'>
                <div className='relative group w-full flex items-center'>
                    <div className='m-2'>
                        <FontAwesomeIcon icon={faPeopleGroup} className='text-4xl'/>
                        <div>People</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                        <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border min-w-48">
                        <div className="p-2 hover:bg-gray-100">Students</div>
                        <div className="p-2 hover:bg-gray-100">Teachers</div>
                        <div className="p-2 hover:bg-gray-100">Parents</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AdminLayout;