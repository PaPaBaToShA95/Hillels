import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';


const contacts = {
    email: "mawabel43@gmail.com",
    phone: "+380936064694",
    telegram: "https://t.me/papabatosha",
    linkedin: "https://www.linkedin.com/in/oleksiyermantraut/",
    github: "https://github.com/PaPaBaToShA95"
};

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (

        <footer className=" text-gray-300  mt-auto">
            <Separator className="my-4 bg-gray-700" />
            <div className="container mx-auto flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center gap-4 text-black text-sm">
                    <a href={`mailto:${contacts.email}`} className="hover:underline hover:text-white break-all dark:text-white">Email: {contacts.email}</a>
                    <a href={`tel:${contacts.phone}`} className="hover:underline hover:text-white  dark:text-white break-all">Тел.: {contacts.phone}</a>
                    <Button variant="link" className=" hover:text-white p-0 h-auto" asChild>
                        <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
                    </Button>
                    <Button variant="link" className=" hover:text-white p-0 h-auto" asChild>
                        <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </Button>
                    <Button variant="link" className=" hover:text-white p-0 h-auto" asChild>
                        <a href={contacts.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Button>
                </div>
                <Separator className="my-4 bg-gray-700" />
                <p className="text-sm text-black dark:text-white">
                    &copy; {currentYear} Олексій Ермантраут. Всі права захищено.
                </p>
            </div>
        </footer>
    );
};

export default Footer;