import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const SignUp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-10'>
                <div className="flex justify-center my-12 container mx-auto px-5">
                    <div className="border-2 rounded-xl w-full md:w-3/4 lg:w-2/4 py-8">
                        <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className='text-yellow-500'>SignUp</span> your account</h2>
                        <form className="px-4 md:px-14">
                            <input type="text" name="name" placeholder="Enter your name" className="p-3 mb-3 border-b-2 w-full" required />

                            <input type="email" name="email" placeholder="Enter your email" className="p-3 mb-3 border-b-2 w-full" required />

                            <input type="password"
                                name="password" placeholder="Enter your Password" className="p-3 mb-3 border-b-2 w-full" required />

                            <div className="flex gap-3 mt-5">
                                <div className='flex items-center'>
                                    <input className='checkbox checkbox-warning checkbox-xs md:checkbox-sm' type="checkbox" name="terms" id="" />
                                </div>
                                <label htmlFor="terms" className="text-xs md:text-lg">Accept our terms and conditions</label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-500 border-yellow-500 hover:bg-white hover:text-yellow-500 font-bold">Sign Up</button>
                            </div>
                        </form>

                        <div className="flex justify-center mb-4">
                            <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Already have an account? <Link to='/login' className="text-yellow-500 underline">Login</Link></h2>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignUp;