import React from 'react'
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';

function logout() {
    const [authuser, setAuthuser] = useAuth();
    const handlelogout = () => {
        try {
            setAuthuser({
                ...authuser,
                user: null,
            })
            localStorage.removeItem('user');
            toast.success('Logout Successfully');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
        catch (error) {
            toast.error('Error:' + error.message);
            setTimeout(() => { }, 3000);
        }

    }
    return (
        <div>
            <button className='bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer' onClick={handlelogout}>
                Logout
            </button>
        </div>
    )
}

export default logout;