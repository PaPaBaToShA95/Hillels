
import '@/App.css'
import { Button } from '@/components/ui/button.tsx';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"


function NotFoundPage() {
    return (
    
            <div className="flex flex-col items-center justify-center min-h-svh gap-24">

                <Alert className='w-4/5 border-red-600 border-4 text-red-500 text-2xl'>
                    <Terminal className="w-6 h-6" />
                    <AlertTitle>Увага, Трапилась помилка!</AlertTitle>
                    <AlertDescription className='text-lg'>
                        Ви перейшли на неіснуючу сторінку, поверніться на головну сторінку для перегляду портфоліо.
                    </AlertDescription>
                </Alert>
                <Button asChild className='bg-blue-700 hover:bg-blue-600 cursor-pointer hover:scale-110 transition text-white'>
                    <a href="/" >
                        Повернутись на головну
                    </a>
                </Button>
            </div>
  
    );
}

export default NotFoundPage