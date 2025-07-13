import { useTheme } from "../theme-provider";

const Footer = () => {
    const { theme } = useTheme();
    return (
        <div className="dark:bg-[#000424]">
            <div className="container mx-auto px-4 py-8  max-w-7xl">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    {/* Logo */}
                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        <img
                            src="https://storage.perfectcdn.com/l1n66r/c4mtdk51py62fylx.webp"
                            alt="Light logo"
                            className={`h-8 md:h-10 ${theme === "dark" ? "hidden" : "block"}`}
                        />
                        <img
                            src="https://storage.perfectcdn.com/l1n66r/j5qydepq2djguici.webp"
                            alt="Dark logo"
                            className={`h-8 md:h-10 ${theme === "dark" ? "block" : "hidden"}`}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-base">
                        <a href="#" className="hover:text-primary transition-colors">TERMS OF SERVICES</a>
                        <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-primary transition-colors">REFUND</a>
                        <a href="#" className="hover:text-primary transition-colors">FAQ</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 md:mt-12">
                    <p className="text-center md:text-end text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        © 2025 GLOBAL-SMM. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer