import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
// import toast from "react-hot-toast";

const HomeAuth = () => {
    const [language, setLanguage] = useState("english");
    // const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const navigate = useNavigate();

    // const toggleLanguage = () => {
    //     setLanguage(language === "english" ? "hindi" : "english");
    //     toast.success(
    //         language === "english"
    //             ? "भाषा हिंदी में बदल दी गई है"
    //             : "Language changed to English"
    //     );
    // };

    // const handleUserTypeSelection = (userType) => {
    //     toast.success(
    //         language === "english"
    //             ? `You selected: ${userType}`
    //             : `आपने चुना: ${userType === "consumer" ? "उपभोक्ता" : "किसान/विक्रेता"}`
    //     );
    //     { userType === "farmer" ? navigate(`/signinfarmer`) : navigate(`/signinconsumer`) }
    // };

    const translations = {
        english: {
            welcome: "Welcome to DigiMart",
            tagline: "Freshness of Pantnagar to Your doorstep",
            question: "Ready to experience it?",
            language: "भाषा बदलें / Change Language",
            signup: "Sign Up",
            signin: "Sign In"
        },
        hindi: {
            welcome: "डिजीमार्ट में आपका स्वागत है",
            tagline: "पंतनगर की ताजगी आप तक",
            question: "अनुभव करने के लिए तैयार हैं?",
            language: "Change Language / भाषा बदलें",
            signup: "पंजीकरण करें",
            signin: "लॉगिन करें"
        }
    };

    const text = translations[language];

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-emerald-400 mb-6 tracking-wide">
                        {text.welcome}
                    </h2>

                    {/* Logo container  */}
                    <div className="mb-12 relative">
                        <div className="absolute inset-0 bg-emerald-800 rounded-full blur-3xl opacity-10"></div>
                        <div className="relative">
                            <header className="max-w-6xl mx-auto flex items-center justify-center p-4 pt-6 w-full">
                                <div className="flex flex-col items-center bg-gray-800/90 rounded-2xl shadow-lg px-10 py-8 transform hover:scale-105 transition-transform duration-300 border border-gray-700">
                                    <img src="/avatar.jpg" alt="Pant-AgriMart" className="w-32 md:w-40 lg:w-48 rounded-full shadow-md border-4 border-gray-700" />
                                    <span className="mt-4 text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide border-b-4 border-emerald-600 pb-2">DigiMart</span>
                                    <span className="mt-3 text-gray-300 italic font-medium">Freshness To Your Door Step</span>
                                </div>
                            </header>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
                        {text.question}
                    </p>
                </div>

                {/* Button container with centered buttons */}
                <div className="flex justify-center max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <button
                            onClick={() => navigate('/signup')}
                            className="bg-emerald-600 text-lg px-8 py-3 rounded-md flex justify-center items-center cursor-pointer hover:bg-emerald-700 transition-all duration-300 text-white w-full sm:w-40 shadow-lg transform hover:scale-105"
                        >
                            <span>{language === "english" ? "Sign Up" : "पंजीकरण करें"}</span>
                            <ChevronRight className="size-5 ml-2" />
                        </button>

                        <Link
                            to="/login"
                            className="text-white bg-gray-700 hover:bg-gray-600 py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center w-full sm:w-40 shadow-lg transform hover:scale-105"
                        >
                            <span>{language === "english" ? "Sign In" : "लॉगिन करें"}</span>
                        </Link>
                    </div>
                </div>

                {/* Decorative footer line */}
                <div className="mt-16 flex justify-center">
                    <div className="w-full max-w-lg bg-gray-700 rounded-full h-2"></div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-4 px-6 text-center text-gray-400">
                <div className="container mx-auto">
                    <p className="text-sm">© 2025 DigiMart. Freshness To Your Door Step.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomeAuth;