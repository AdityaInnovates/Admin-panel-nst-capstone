import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

        const [formData, setFormData] = useState({
          email: '',
          password: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
              ...prevData, // Spread previous form data to keep other fields intact
              [name]: value // Update the specific field (id or password)
            }));
          };
        

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('https://backend-newton-capstone-eval.onrender.com/AdminLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                  }),
            });
            const result = await response.json();
            alert(result.message)
            localStorage.setItem('authToken', result.token);
            navigate("/home")

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            
        } catch (error) {
            console.error('Error:', error);
            alert('Network error');
        }
    };

    

    function pass() {
        alert("Kindly contact you admin !")
    }

    return(
        <>
            <form className="flex flex-col items-center justify-center max-w-[100%] h-[40vw]">
                <div className="bg-slate-700 rounded-2xl">
                <div  className="pt-10 pb-2 px-8">
                    <label htmlFor="email" className="flex flex-col px-2 py-1">Enter your email :</label>
                    <input placeholder="Email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-[40px] w-[350px] px-3 py-2 rounded-xl"
                            required
                            />
                </div>
                <div className="pt-2 pb-2 px-8">
                    <label htmlFor="pass" className="flex flex-col px-2 py-1">Enter your password :</label>
                    <input placeholder="Password" 
                    name="password"
                    id="pass"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-[40px] w-[350px] px-3 py-2 rounded-xl"
                    required
                    />
                    <div className="ml-[220px] mt-2 cursor-pointer" onClick={pass}>Forgot password?</div>
                </div>
                    <button className="pt-2 mx-[150px] px-8 mt-5 mb-10" onClick={handleSubmit}>Submit</button>
                </div>
            
            </form>
        </>
    )
}

export default Login