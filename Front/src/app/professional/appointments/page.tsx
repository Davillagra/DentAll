'use client'
import NavDash from '@/components/NavBar/navDash'
import React, { useEffect, useState } from 'react'
import TotalAppointments from '@/components/TotalAppointments/TotalAppointments'
import CalendarAppointments from '@/components/Calendar/CalendarAppointments'
import axiosInstance from '@/utils/axiosInstance'
function page() {
  const [dentist, setDentist] = useState('')

  useEffect(() => {
    const userSession = localStorage.getItem("userSession");
    if (userSession) {
      const parsedUser = JSON.parse(userSession);

      const getDentist = async () => {
        const response = await axiosInstance.get(
          `/dentists/person/${parsedUser.userData.id}`
        );
        if (response.data !== null) {
          setDentist(response.data.id)
        }
      };

      getDentist();
    }
  }, []);
  return (

    <div className="w-[80%] h-screen  text-white ml-[20%] ">
      <NavDash />

      <div className="m-8 p-4 mt-24">
        {dentist !== '' && <CalendarAppointments dentist_id={dentist} />}
        {/* <TotalAppointments/> */}
      </div>


    </div>
  )
}

export default page