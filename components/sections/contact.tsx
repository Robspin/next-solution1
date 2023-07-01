"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const CheckIcon = ({ ...props }) => (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>

)

const FormSchema = z.object({
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(500, {
            message: "Message must not be longer than 500 characters.",
        }),
    email: z
        .string()
        .min(1, {
            message: "Please fill in your email.",
        })
        .email("This email is not valid.")
})

export default function Contact() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            description: (
                <div className="text-green-600 flex justify-center items-center"><CheckIcon className="w-6 h-6 mr-2" />Thank you, you will hear from us soon!</div>
            )
        })
    }

    return (
        <motion.section className="w-full h-screen flex flex-col justify-center items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.6 }}>
            <h3 className="text-2xl font-medium mb-8">Contact us</h3>
            <div className="max-md:w-full p-4 rounded border dark:border-gray-600">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:min-w-[400px] min-w-[400px}">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name@company.nl" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself and what we could help you with"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
            {/*<div className="absolute h-40 w-40 z-0 right-0">*/}
            {/*    <video src="/assets/globe-1280x720-25fps.mp4" className="absolute w-full invert" autoPlay loop muted />*/}
            {/*</div>*/}
        </motion.section>
    )
}
