// import React, { useEffect, useState } from 'react';

// const useAdmin = (data) => {
//     const name = data?.name
//     const password = data?.password
//     const [isAdmin, setIsAdmin] = useState(false)
//     const [isAdminLoading, setIsAdminLoading] = useState(true)
//     useEffect(() => {
//         fetch(`https://swos-server.vercel.app/api/admin/allAdmin?name=${name}&&pass=${password}`)
//             .then(res => res.json())
//             .then(data => {
//                 setIsAdmin(true)
//                 console.log(data)
//             })
//     }, [data])
//     return [isAdmin, isAdminLoading]
// };

// export default useAdmin