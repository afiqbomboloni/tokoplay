import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formValue, setFormValue]= useState({username:'', password:'',avatar:null});
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value, type}= e.target;
     if (type === "file") {
        const file = e.target.files[0];
        setFormValue({...formValue, [name]: file});
    } else {
        setFormValue({...formValue, [name]: value});
    }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('avatar', File); 
        formData.append('username', formValue.username);
        formData.append('password', formValue.password);
      
        try {
          const response = await fetch("http://localhost:8080/api/v1/register", {
            method: "POST",
            headers:{'content-type':'application/json'},
            body: formData,
          });
      
          const resjson = await response.json();
          if (response.status === 200) {
            setMessage(resjson.success);
            setTimeout(() => {
              navigate('/login');
            }, 2000);
          } else {
            setMessage("Some Error Occured");
          }
        } catch (error) {
          console.error("Error:", error);
          setMessage("An error occurred while registering.");
        }
      };
      
    return (
        <div className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-40 mr-2 mt-12" src="https://www.cdnlogo.com/logos/t/96/tokopedia.svg" alt="logo" />
                  
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Buat Akun
                    </h1>
                    <p className="text-success"> { message } </p>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                            <input type="text" name="username" id="username" value={formValue.username} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400 focus:ring-green-500 focus:border-green-500" placeholder="usernamekamu" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" value={formValue.password} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900" for="image">Upload file</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" id="image" type="file" name="avatar" onChange={handleInput} />
                            <p className="mt-1 text-sm text-gray-500" id="file_input_help">(Optional)</p>
                        </div>
                       
                        
                        <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800">Daftar</button>
                        <p className="text-sm font-light text-gray-500 text-gray-400">
                            Sudah punya akun? <a href="#" className="font-medium text-green-600 hover:underline text-green-500">Masuk disini</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Register;