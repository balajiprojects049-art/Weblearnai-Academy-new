"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

type FormData = {
    name: string
    email: string
    phone: string
    city: string
    course: string
}

export function ApplyForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsLoading(true)
        // Mock API call
        console.log("Submitting lead:", data)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setIsSuccess(true)
        reset()
    }

    if (isSuccess) {
        return (
            <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">Application Received!</h3>
                    <p className="text-green-700">Thank you for applying. Our admissions team will contact you shortly.</p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-200 text-green-700 hover:bg-green-100 mt-4">Submit Another</Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto shadow-xl border-t-4 border-t-primary">
            <CardHeader>
                <CardTitle>Apply Now</CardTitle>
                <CardDescription>Start your learning journey today. Fill out the form below.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                        />
                        {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            {...register("phone", { required: "Phone is required" })}
                        />
                        {errors.phone && <span className="text-xs text-destructive">{errors.phone.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                            id="city"
                            placeholder="New York"
                            {...register("city", { required: "City is required" })}
                        />
                        {errors.city && <span className="text-xs text-destructive">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="course">Interested Course</Label>
                        <select
                            id="course"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...register("course", { required: "Please select a course" })}
                        >
                            <option value="">Select a course...</option>
                            <option value="react">React.js Masterclass</option>
                            <option value="uiux">UI/UX Design Patterns</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="business">Startup Zero to One</option>
                        </select>
                        {errors.course && <span className="text-xs text-destructive">{errors.course.message}</span>}
                    </div>

                    <Button type="submit" className="w-full" isLoading={isLoading}>
                        Submit Application
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
