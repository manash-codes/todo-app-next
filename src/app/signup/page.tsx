"use client";
import Link from "next/link";
import { useFormState } from "react-dom";
import * as actions from "../../actions/index";
import AppInput from "../_components/AppInput";

export default function SignUp() {
    const [formState, action] = useFormState(actions.signupFormSubmit, { message: "" })
    console.log(formState);

    return <div className="rounded-2xl border-4 border-slate-500 p-6 m-6">
        <h1 className="text-center text-5xl font-bold">Sign Up</h1>
        <form action={action} >
            <div className="my-4 flex flex-col">
                {/* <label className="my-2 ps-3 text-base font-bold" htmlFor="fullName">Full Name</label>
                <input name="fullName" type="text" id="fullName" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John Doe" /> */}
                <AppInput label="Full Name" name="fullName" type="text" id="fullName" placeholder="John Doe" max={3} required />
                <label className="my-2 ps-3 text-base font-bold" htmlFor="fatherName">Father Name</label>
                <input name="fatherName" type="text" id="fatherName" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="John Doe" />
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
                formState.message ? <p className="text-red-500">{formState.message}</p> : null
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