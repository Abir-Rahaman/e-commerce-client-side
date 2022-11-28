import { useState, useEffect } from 'react';

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(()=>{
        const userEmail = user?.email;
        console.log(userEmail)
        if(userEmail){
            fetch(`http://localhost:4000/admin/${userEmail}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    } , [user])

    return[admin,adminLoading];
   

}

export default useAdmin;