// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';

const Home = () => {
    return (
        <div id="home">
            <HStack>
                <Button>Click me 1</Button>
                <Button>Click me 2</Button>
            </HStack>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        element: <Home />,
    },
]);

export const App = () => {
    return (
        <div className={'wrapper'}>
            <RouterProvider router={router} />
        </div>
    );
};
