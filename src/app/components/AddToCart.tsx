'use client'
import React, { useEffect, useState } from 'react'


const AddToCart = () => {
    const [user, setUser] = useState(1);
    
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
  
      // Add event listeners to detect online/offline changes
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      // Cleanup the event listeners on component unmount
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);

  return (
    <div>
      <h1>You are {isOnline ? 'online' : 'offline'}</h1>
        {user} &nbsp;
      <button onClick={(e)=> setUser(user+1)}>Click Me</button>
    </div>
  )
}

export default AddToCart
