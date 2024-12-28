import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
const DashBord = () => {
  let [reload, setReload] = useState(0)
  let [infoFromDB, setinfoFromDB] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4001/user-list/")
      .then((e) => {
        setinfoFromDB(e.data)
      })
      .catch((e) => {
        console.log("error from User List useEffect");
      })
    setReload(1)

  }, [reload])

  return (
    <div id='navbar' className='bg-slate-900 shadow-md p-4'>
      <ul className='flex items-center gap-8 text-xl'>
    <li className='text-white hover:text-blue-300 h-20'>Home</li>
    
    <li className='text-white hover:text-blue-300 h-20'><Link to='/'>Logout</Link></li>
</ul>
<h1 className='text-2xl font-bold text-white text-center mt-6 text-4xl'>Dashboard</h1>
<p className='text-white text-xl'>Welcome to the User panel</p>
<table className='w-full border bg-white shadow-md rounded-lg'>
        <thead className='bg-blue-200 border-b border-gray-300'>
          <tr>
            <th className='px-3 py-2 text-black font-large'>Unique Id</th>
            <th className='px-3 py-2 text-black font-large'>Name</th>
            <th className='px-3 py-2 text-black font-large'>Email</th>
            <th className='px-3 py-2 text-black font-large'>Date of Birth</th>
          </tr>
        </thead>

        <tbody className='text-center text-sm text-gray-600'>
          {infoFromDB.map((item, i) => (
            <tr key={item.id} className='border-b last:border-0 hover:bg-gray-100 '>
              <td className='px-5 py-3 border-r'>{i + 1}</td>
              
              <td className='px-5 py-3 border-r'>{item.name}</td>
              <td className='px-5 py-3 border-r'>{item.email}</td>
              <td className='px-5 py-3 border-r'>{item.date}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  )
}

export default DashBord