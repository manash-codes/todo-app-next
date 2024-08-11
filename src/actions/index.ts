"use server"

import { redirect } from "next/navigation";
import { prisma } from "../../prisma/db";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function loginFormSubmit(formState: { message: string }, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || email === "") {
        return { message: "Please enter email" }
    }

    if (!emailRegex.test(email)) {
        return { message: "Please enter valid email" }
    }
    if (typeof password !== "string" || password === "") {
        return { message: "Please enter password" }
    }
    if (password.length < 8) {
        return { message: "Password must be at least 8 characters" }
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user) {
        redirect("/dashboard")
    }

    return { message: "Invalid email or password" }
}

export async function signupFormSubmit(formState: { message: string }, formData: FormData) {
    const name = formData.get("fullName");
    const fatherName = formData.get("fatherName");
    const email = formData.get("email");
    const phone = formData.get("phoneNumber");
    const countryCode = formData.get("countryCode");
    const password = formData.get("password");



    const user = await prisma.user.create({
        data: {
            name,
            fatherName,
            email,
            phone,
            countryCode,
            password
        }
    })

    if (user) {
        redirect("/dashboard")
    }

    return { message: "Please fill all the fields" }
}