import Link from "next/link";

export default async function Login() {
    return <div className="rounded-2xl border-4 border-slate-500 p-6">
        <h1 className="text-center text-5xl font-bold">Login</h1>
        <form action="">
            <div className="my-4 flex flex-col">
                <label className="my-2 ps-3 text-base font-bold" htmlFor="email">Email</label>
                <input type="text" id="email" className="text-md w-[410px] rounded-lg p-4 ps-8 text-black outline-none" />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="password">Password</label>
                <input type="password" id="password" className="text-md w-[410px] rounded-lg p-4 ps-8 text-black outline-none" />
            </div>
            <button className="my-4 w-full rounded-lg bg-[#2ECA34] p-4 text-xl font-bold">
                Login
            </button>
        </form>
        <Link href="/signup" className="text-center text-base font-bold">
            <p >Not a member? SignUp</p>
        </Link>
    </div>;
}