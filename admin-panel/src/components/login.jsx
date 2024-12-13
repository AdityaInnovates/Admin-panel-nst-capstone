

function Login() {

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
                            className="h-[40px] w-[350px] px-3 py-2 rounded-xl"
                            />
                </div>
                <div className="pt-2 pb-2 px-8">
                    <label htmlFor="pass" className="flex flex-col px-2 py-1">Enter your password :</label>
                    <input placeholder="Password" 
                    id="pass"
                    className="h-[40px] w-[350px] px-3 py-2 rounded-xl"
                    />
                    <div className="ml-[220px] mt-2 cursor-pointer" onClick={pass}>Forgot password?</div>
                </div>
                    <button className="pt-2 mx-[150px] px-8 mt-5 mb-10">Submit</button>
                </div>
            
            </form>
        </>
    )
}

export default Login