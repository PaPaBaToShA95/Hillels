
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


const cvData = {
    name: "Олексій Ермантраут",
    title: "Junior Front End Developer",
    summary: "Having seen the possibilities of Front-End development, I became interested in this topic and took courses, completed the Front-End Start, JAVA, Java Script courses, and now I am taking the Front-End Pro course. The required grade in my diploma is Excelent, I take first place in the group in terms of grades, I constantly strive to learn new things and try not to stand still but to develop.",
    skills: ["GitHub", "React", "HTML", "CSS", "JS", "Node.js", "OOP", "API", "DOM", "TailWind", "React"],
    education: [
        { year: "2010-2014", institution: "Kyiv Radiomechanical College", degree: "Design, production and maintenance of radio equipment" }
    ],
    courses: [
        { year: "2024-2025", name: "Front-end Pro at Hillel IT School", details: "EXCELLENT 1ST PLACE" },
        { year: "2024-2025", name: "English Elementary at Hillel IT School" },

    ],
    portfolio: [
        {
            period: "01.2025-03.2025",
            title: "Enver",
            description: "I created a landing page to improve my HTML and CSS layout skills. This page has an adapted appearance for phones, tablets, and computers.",
            link: "https://github.com/PaPaBaToShA95/Enver"
        },
        {
            period: "01.2025-03.2025",
            title: "UpDate for Hillel IT School",
            description: "This page was created during the Front-End sprint at Hillels IT School.",
            link: "https://github.com/PaPaBaToShA95/Maket-UpDate"
        },
        {
            period: "01.2025-03.2025",
            title: "Whirl for Hillel IT School",
            description: "After the Front-End sprint, I signed up for the Front-End Basic course, but later realized that I was bored there, the teacher gave me this layout and asked me to recreate it, after which he said that I had nothing to do in this course and I transferred to the Front-End PRO course.",
            link: "https://github.com/PaPaBaToShA95/Whirl"
        },
        {
            period: "02.2025-03.2025",
            title: "PokerCalculator for Oleksiy Ermantraut",
            description: "While spending time with friends, we needed to calculate the cost of a certain number of poker chips. We couldn't find such a calculator on the Internet, so I decided to create such a calculator myself.",
            link: "https://github.com/PaPaBaToShA95/PokerCalculator"
        }
    ],
    hobby: "3D modeling and 3D printing, computer technology, fishing, outdoor recreation, camping",
    contacts: {
        location: "Brovary, Kyiv, Ukraine",
        remote: "Remote",
        email: "mawabel43@gmail.com",
        phone: "+380936064694",
        telegram: "https://t.me/papabatosha",
        linkedin: "https://www.linkedin.com/in/oleksiyermantraut/",
        github: "https://github.com/PaPaBaToShA95"
    },
    languages: ["Ukrainian-C1", "English-A1"]
};

const HomePage : React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-4 max-w-3xl">
            <Card className="mb-8 text-center">
                <CardContent className="pt-6">
                    <img src="./image.png" alt="Oleksiy Ermantraut" className="w-64 h-64 rounded-full mx-auto mb-4 object-cover" />
                    <h1 className="text-3xl font-bold">{cvData.name}</h1>
                    <p className="text-lg text-gray-600">{cvData.title}</p>
                </CardContent>
            </Card>


            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Коротко про себе (SUMMARY)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{cvData.summary}</p>
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Навички (SKILLS)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                        {cvData.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Освіта (EDUCATION)</CardTitle>
                </CardHeader>
                <CardContent>
                    {cvData.education.map((edu, index) => (
                        <div key={index} className={index > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}>
                            <h3 className="text-lg font-semibold">{edu.year}</h3>
                            <p className="text-gray-700">{edu.institution}</p>
                            <p className="text-sm text-gray-600">{edu.degree}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Додаткові курси та тренінги (ADDITIONAL COURSES AND TRAININGS)</CardTitle>
                </CardHeader>
                <CardContent>
                    {cvData.courses.map((course, index) => (
                        <div key={index} className={index > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}>
                            <h3 className="text-lg font-semibold">{course.year}</h3>
                            <p className="text-gray-700">{course.name}</p>
                            {course.details && <p className="text-sm text-gray-600">{course.details}</p>}
                        </div>
                    ))}

                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Портфоліо (PORTFOLIO)</CardTitle>
                </CardHeader>
                <CardContent>
                    {cvData.portfolio.map((item, index) => (
                        <div key={index} className={index > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
                            <h3 className="text-lg font-semibold">{item.period} &bull; {item.title}</h3>
                            <p className="text-gray-700 mt-1">{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all mt-2 inline-block">
                                <Button variant="link" className="p-0 cursor-pointer h-auto">{item.link}</Button>
                            </a>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Хобі (HOBBY)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{cvData.hobby}</p>
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Контакти (CONTACTS)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-none flex flex-col  p-0 m-0">
                        <li><strong>Location:</strong> {cvData.contacts.location}</li>
                        <li ><strong>Remote:</strong> {cvData.contacts.remote}</li>
                        <li><strong>Email:</strong> <a href={`mailto:${cvData.contacts.email}`} className="hover:underline break-all">{cvData.contacts.email}</a></li>
                        <li><strong>Phone:</strong> <a href={`tel:${cvData.contacts.phone}`} className="hover:underline break-all">{cvData.contacts.phone}</a></li>
                        <li ><strong>Telegram:</strong> <a href={cvData.contacts.telegram} target="_blank" rel="noopener noreferrer" className=" hover:underline break-all">{cvData.contacts.telegram}</a></li>
                        <li><strong>Linkedin:</strong> <a href={cvData.contacts.linkedin} target="_blank" rel="noopener noreferrer" className=" hover:underline break-all">{cvData.contacts.linkedin}</a></li>
                        <li><strong>GitHub:</strong> <a href={cvData.contacts.github} target="_blank" rel="noopener noreferrer" className=" hover:underline break-all">{cvData.contacts.github}</a></li>
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Мови (LANGUAGES)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        {cvData.languages.map((lang, index) => (
                            <li className="list-none" key={index}>{lang}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

        </div>
    );
};

export default HomePage;