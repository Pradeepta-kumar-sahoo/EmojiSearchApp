import { useEffect, useState } from "react";
import EmojiData from "./Emoji.json";

export default function Emoji() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const newData = EmojiData.filter((emoji) =>
            emoji.description.toLowerCase().includes(search.toLowerCase())
        );
        setData(newData);
    }, [search]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Emoji Search</h1>
                <div className="mb-4">
                    <input
                        type="search"
                        value={search}
                        placeholder="Search"
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="space-y-2">
                    {data.map((emoji) => (
                        <h2 key={emoji.description} className="text-lg bg-blue-100 p-2 rounded-md">
                            {emoji.description} {emoji.emoji}
                        </h2>
                    ))}
                </div>
            </div>
        </div>
    );
}
