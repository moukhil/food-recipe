import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";

function Search() {
    const [name, setName] = useState("");
    const [finalName, setFinalName] = useState("");

    const handleClick = () => {
        setFinalName(name.trim());
    };

    useEffect(() => {
        if (name.trim() === "") {
            setFinalName("");
        }
    }, [name]);

    return (
        <div className="w-full flex flex-col items-center">

            {/* Search Box */}
            <div className="flex items-center w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden border">

                <input
                    type="text"
                    placeholder="Search delicious recipes..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleClick()}
                    className="flex-1 px-6 py-4 text-lg outline-none text-gray-800"
                />

                <Button handleClick={handleClick} />
            </div>

            {/* Search Result */}
            <div className="mt-10 w-full flex justify-center">
                {finalName ? (
                    <Card finalName={finalName} />
                ) : (
                    <p className="text-gray-500 text-lg">
                        Search for your favourite recipe
                    </p>
                )}
            </div>

        </div>
    );
}

export default Search;