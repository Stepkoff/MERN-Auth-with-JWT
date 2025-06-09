import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient.js';
import { Provider } from '@/components/ui/provider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider>
                <App />
            </Provider>
            <ReactQueryDevtools
                buttonPosition={'bottom-left'}
                initialIsOpen={false}
            />
        </QueryClientProvider>
    </StrictMode>,
);
