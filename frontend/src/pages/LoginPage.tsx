import { LoginForm } from '@/components/LoginForm.tsx';

export const LoginPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-4 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
};
