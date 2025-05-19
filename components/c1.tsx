"use client"

export default function C1() {
    const text = "Discover. Unwind. Wander";
    return (
        <div className="relative w-full overflow-hidden">
            <img 
                className="w-full h-[93vh] object-cover" 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Beautiful Mountains" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4 sm:px-6 md:px-8">
                <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-bold drop-shadow-lg">
                    {text.split("").map((char, index) => (
                        <span 
                            key={index} 
                            className="animated-letter inline-block opacity-0 animate-fadeIn text-white" 
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {char === " " ? " " : char}
                        </span>
                    ))}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-2xl mt-4 max-w-full sm:max-w-2xl font-medium">
                    Discover breathtaking landscapes, peaceful nature, and unforgettable adventures.
                </p>
               
            </div>
        </div>
    );
}

