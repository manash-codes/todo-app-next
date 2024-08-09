"use client";
import Link from "next/link";
import { useFormState } from "react-dom";
import * as actions from "../../actions/index";

export default function Login() {
    const [formState, action] = useFormState(actions.loginFormSubmit, { message: '' })
    return <div className="rounded-2xl border-4 border-slate-500 p-6">
        <h1 className="text-center text-5xl font-bold">Login</h1>
        <form action={action}>
            <div className="my-4 flex flex-col">
                <label className="my-2 ps-3 text-base font-bold" htmlFor="email">Email</label>
                <input name="email" type="text" id="email" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John@email.com" />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="password">Password</label>
                <input name="password" type="password" id="password" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="123456789" />
            </div>
            {
                formState.message ? <p className="text-red-500">{formState.message}</p> : null
            }
            <button className="my-4 w-full rounded-lg bg-[#2ECA34] p-4 text-xl font-bold">
                Login
            </button>
        </form>
        <Link href="/signup" className="text-center text-base font-bold">
            <p >Not a member? SignUp</p>
        </Link>
    </div>
}