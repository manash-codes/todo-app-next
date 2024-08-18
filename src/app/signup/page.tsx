"use client";
import { User } from "@prisma/client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
    const form = useForm<User>();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: User) => {
        console.log('data :>> ', data);
    }

    return <div className="rounded-2xl border-4 border-slate-500 p-6 m-6">
        <h1 className="text-center text-5xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <div className="my-4 flex flex-col">
                <label className="my-2 ps-3 text-base font-bold" htmlFor="name">Name</label>
                <input type="text" id="name" className="text-md w-[410px] rounded-lg p-4 text-black outline-none" placeholder="Glenn Doe"
                    spellCheck="false"
                    {...register('name', {
                        required: { value: true, message: 'Name is required' }, minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters'
                        }
                    })} />
                {
                    errors?.name && <p className="text-red-500 mt-2">{errors?.name.message}</p>
                }
                <label className="my-2 ps-3 text-base font-bold" htmlFor="fatherName">Father Name</label>
                <input type="text" id="fatherName"
                    className="text-md w-[410px] rounded-lg p-4 text-black outline-none"
                    placeholder="John Doe"
                    spellCheck="false"
                    {...register('fatherName', {
                        required: { value: true, message: 'Father Name is required' }, minLength: {
                            value: 3,
                            message: 'Father Name must be at least 3 characters'
                        },
                    })} />
                {
                    errors.fatherName &&
                    <p className="text-red-500 mt-2">{errors.fatherName.message}</p>
                }
                <label className="my-2 ps-3 text-base font-bold" htmlFor="email">Email</label>
                <input type="text" id="email"
                    className="text-md w-[410px] rounded-lg p-4 text-black outline-none"
                    placeholder="John@email.com"
                    spellCheck="false"
                    {...register('email', {
                        required: { value: true, message: 'Email is required' }, validate: (value) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            return emailRegex.test(value) || "Please enter a valid email";

                        }
                    })} />
                {
                    errors.email &&
                    <p className="text-red-500 mt-2">{errors.email.message}</p>
                }
                <label className="my-2 ps-3 text-base font-bold" htmlFor="phoneNumber">Phone Number</label>
                <div className="flex gap-2">
                    <input type="text" id="countryCode"
                        className="text-md w-[80px] rounded-lg p-4 text-black outline-none"
                        placeholder="+91"
                        {...register('countryCode', {
                            required: { value: true, message: 'Country Code is required' },
                            pattern: {
                                value: /^[0-9]*$/,
                                message: 'Invalid country code'
                            }
                        })} />
                    <input type="text" id="phoneNumber"
                        className="text-md w-[320px] rounded-lg p-4 text-black outline-none"
                        placeholder="1234567890"
                        {...register("phone", {
                            required: { value: true, message: 'Phone is required' },
                            pattern: {
                                value: /^[0-9]*$/,
                                message: 'Invalid Phone code'
                            }
                        })} />
                </div>
                {
                    errors.countryCode &&
                    <p className="text-red-500 mt-2">{errors.countryCode.message}</p> ||
                    errors.phone &&
                    <p className="text-red-500 mt-2">{errors.phone.message}</p>
                }
                <label className="my-2 ps-3 text-base font-bold" htmlFor="password">Password</label>
                <input type="password" id="password"
                    className="text-md w-[410px] rounded-lg p-4 text-black outline-none"
                    placeholder="123456789"
                    {...register('password', {
                        required: { value: true, message: 'Password is required' }, minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                        },
                    })} />
                {
                    errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>
                }
            </div>
            <button className="my-4 w-full rounded-lg bg-[#2ECA34] p-4 text-xl font-bold">
                Sign Up
            </button>
        </form>
        <Link href="/login" className="text-center text-base font-bold">
            <p >Already a member? Login</p>
        </Link>
    </div>;
}