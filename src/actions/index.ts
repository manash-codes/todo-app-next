"use server"

import { redirect } from "next/navigation";
import { prisma } from "../../prisma/db";

export async function loginFormSubmit(formState: { message: string }, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || email === "") {
        return { message: "Please enter email" }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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