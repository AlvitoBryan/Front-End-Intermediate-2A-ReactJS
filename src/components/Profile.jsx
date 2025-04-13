import React from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/login");
  };
  return (
    <picture onClick={handleProfileClick} className='cursor-pointer'>
      <source media="(max-width: 640px)" srcSet="/images/sidebar-btn.svg" />
      <img src="/images/Avatar.png" className="max-w-none" alt="Profile" />
    </picture>
  )
}

export default Profile
