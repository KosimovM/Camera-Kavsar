import { useState } from 'react';
import Edit from './Edit';
import { DeleteCentr } from '../../Api/Centrs/Centrsapi';
import type { AppDispatch } from '../../Store/Store';
import { useDispatch } from 'react-redux';
interface CardProps {
  id: number
  name: string
  address: string
}

const Card = ({ id, name, address }: CardProps) => {
  const [open, setOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
  return (
   <>
   <Edit open={open} setOpen={setOpen} id={id} currentName={name} currentAddress={address} />
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{address}</p>
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={()=>setOpen(true)} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Edit
        </button>
        <button onClick={()=> {dispatch(DeleteCentr(id))}} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div></>
  )
}

export default Card
