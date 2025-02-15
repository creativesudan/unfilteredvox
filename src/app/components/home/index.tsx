'use client'

import Content1 from './content1';


const Homepage = () => {
    // const [user, setUser] = useState(1);
    
    // const [isOnline, setIsOnline] = useState(navigator.onLine);

    // useEffect(() => {
    //   const handleOnline = () => setIsOnline(true);
    //   const handleOffline = () => setIsOnline(false);
  
    //   // Add event listeners to detect online/offline changes
    //   window.addEventListener('online', handleOnline);
    //   window.addEventListener('offline', handleOffline);
  
    //   // Cleanup the event listeners on component unmount
    //   return () => {
    //     window.removeEventListener('online', handleOnline);
    //     window.removeEventListener('offline', handleOffline);
    //   };
    // }, []);

  return (
        <div>
           <Content1/>
        </div>
    )
}

export default Homepage
