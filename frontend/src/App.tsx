import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { HomePage } from '@/pages/HomePage.tsx';
import { RegisterPage } from '@/pages/RegisterPage.tsx';

function App() {
    return (
        <Routes>
            <Route index path={'/'} element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
        </Routes>
    );
}

export default App;
