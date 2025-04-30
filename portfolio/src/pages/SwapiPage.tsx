import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SwapiFetcher() {
    const [input, setInput] = useState("/people/1");
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await axios.get(`https://www.swapi.tech/api/${input}`);
            setData(response.data);
        } catch (err: any) {
            setError("Щось пішло не так. Перевір правильність запиту.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4   mx-auto">
            <h1 className="text-2xl font-bold mb-4">SWAPI</h1>
            <div className="flex justify-center items-center"><p className="text-xl pb-2">https://www.swapi.tech/api/</p><Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="/people/1"
                className="border p-2 w-full mb-2 rounded"
            /></div>
            <Button
                onClick={handleFetch}
                className="cursor-pointer"
            >
                Завантажити
            </Button>

            {loading && <p className="mt-4">Завантаження...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {data && (
                <pre className="mt-4 bg-gray-100 p-4 text-black  dark:bg-black dark:text-white rounded-2xl overflow-auto text-left w-fill">
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}
