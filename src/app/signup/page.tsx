import Link from "next/link";

export default async function SignUp() {
    return <div className="rounded-2xl border-4 border-slate-500 p-6 m-6">
        <h1 className="text-center text-5xl font-bold">Sign Up</h1>
        <form >
            <div className="my-4 flex flex-col">
                <label className="my-2 ps-3 text-base font-bold" htmlFor="fullname">Full Name</label>
                <input name="fullname" type="text" id="fullname" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John Doe" />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="fathername">Father Name</label>
                <input name="fathername" type="text" id="fathername" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John Doe" />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="email">Email</label>
                <input name="email" type="text" id="email" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John@email.com" />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="phoneNumber">Phone Number</label>
                <div className="flex gap-2">
                    <input name="countryCode" type="text" id="countryCode" className="text-md w-[80px] rounded-lg p-4 text-black outline-none" placeholder="+91" />
                    <input name="phoneNumber" type="text" id="phoneNumber" className="text-md w-[320px] rounded-lg p-4 text-black outline-none" placeholder="1234567890" />
                </div>
                <label className="my-2 ps-3 text-base font-bold" htmlFor="password">Password</label>
                <input name="password" type="password" id="password" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="123456789" />
            </div>
            {
                // formState.message ? <p className="text-red-500">{formState.message}</p> : null
            }
            <button className="my-4 w-full rounded-lg bg-[#2ECA34] p-4 text-xl font-bold">
                Sign Up
            </button>
        </form>
        <Link href="/login" className="text-center text-base font-bold">
            <p >Already a member? Login</p>
        </Link>
    </div>;
}