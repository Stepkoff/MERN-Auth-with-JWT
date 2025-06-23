import { RegisterForm } from '@/components/RegisterForm.tsx';

export const RegisterPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-4 md:p-10">
            <div className="w-full max-w-sm">
                <RegisterForm />
            </div>
        </div>
    );
};
