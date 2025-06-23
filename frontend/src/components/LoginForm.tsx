import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { loginValidation } from '@/lib/validators';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {

    const form = useForm<z.infer<typeof loginValidation>>({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            password: '',
            email: '',
        }
        
    });

    const handleSubmit = (values: z.infer<typeof loginValidation>) => {
        console.log('values', values);
    };

    
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <FormField control={form.control} name='email' render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )} />
                            </div>
                            <div className="grid gap-3">
                                <FormField control={form.control} name='password' render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="password"
                                                type="password"
                                                placeholder="password"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button className="w-full cursor-pointer" type='submit'>
                                    Login
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{' '}
                            <Link
                                to={'/register'}
                                className="underline underline-offset-4"
                            >
                                Sign up
                            </Link>
                        </div>
                        
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
