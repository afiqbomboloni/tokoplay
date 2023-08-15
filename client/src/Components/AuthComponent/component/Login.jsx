import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formValue, setFormValue]= useState({username:'', password:''});
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value, type}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const allInputvalue= { username: formValue.username, password:formValue.password}; 

      let res= await fetch("http://localhost:8080/api/v1/login",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      let resJson = await res.json();
      console.log(resJson);

        if (res.status === 200) {
            const token = resJson.sessionToken; 

            setMessage(resJson.success);
            
            setTimeout(() => {
            navigate('/');
            }, 1000);

        } else if (res.status === 401) {
        setMessage("!! Password atau Username salah")
      }
      else{
        setMessage("Some Error Occured");
      }

       console.log(allInputvalue);
    }
    return (
        
        <div className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-40 mt-12 mr-2" src="https://www.cdnlogo.com/logos/t/96/tokopedia.svg" alt="logo" />
                  
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Login
                    </h1>
                    <ul>
                        <li className="text-red-900 font-semibold">{message}</li>
                    </ul>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">username</label>
                            <input type="username" name="username" id="username" value={formValue.username} onChange={handleInput} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400 focus:ring-green-500 focus:border-green-500" placeholder="kamu@username.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" value={formValue.password} onChange={handleInput} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                       
                        
                        <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800">Masuk</button>
                        <p className="text-sm font-light text-gray-500 text-gray-400">
                            Belum punya akun? <a href="#" className="font-medium text-green-600 hover:underline text-green-500">Buat disini</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login;