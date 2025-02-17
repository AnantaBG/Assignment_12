import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './AllComponents/Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div data-theme="nord" className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </StrictMode>,
)
