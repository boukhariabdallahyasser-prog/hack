import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:{default:'HackMate — Build together',template:'%s | HackMate'},description:'Discover technology competitions and find university teammates across Algeria.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}