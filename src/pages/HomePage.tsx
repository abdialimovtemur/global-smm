import { useState, useRef, useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ScroolToTop";
import { Bookmark, LogIn, Star, UserCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TotalUsers from "@/assets/icons/total-users-icon.svg";
import TotalOrders from "@/assets/icons/total-orders-icon.svg";
import TotalServices from "@/assets/icons/total-services-icon.svg";
import StatCard from "@/components/StatCard";
import { GradientButton } from "@/components/GradientButton";
import FeatureCard from "@/components/FeatureCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import StepCard from "@/components/StepCard";
import FireHeadline from "@/components/FireHeadline";
import PromotionImg from "@/assets/images/promotion-img.svg";
import AccordionWithCard from "@/components/AccardionWithCard";
import HeroBagckground3 from "@/assets/images/hero-bagkground3.svg";
import TelegramLogo from "@/assets/icons/telegram-logo.svg";
import { featureCards, logos, steps, faqs1, faqs2 } from "@/data/data"



function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

    // Track first load and disable animations after initial scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isFirstLoad) {
                setIsFirstLoad(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { once: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFirstLoad]);

    // Intersection observer for animating cards on first load
    useEffect(() => {
        if (!isFirstLoad) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-up");
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [isFirstLoad]);

    return (
        <div className="min-h-screen bg-[rgb(235,237,244)] dark:bg-[rgb(0,5,43)] relative z-0">
            {/* Glowing Spots */}
            <div className="absolute pointer-events-none top-[100px] md:top-[-50] right-0 md:right-30 w-42 md:w-72 h-64 md:h-56 bg-blue-600 opacity-30 dark:opacity-60 rounded-full blur-[100px] z-[50]"></div>
            <div className="absolute pointer-events-none top-[500px] md:top-[370px] left-0 md:left-30 w-42 md:w-72 h-64  md:h-56 bg-blue-600 opacity-30 dark:opacity-60 rounded-full blur-[100px] z-[50]"></div>

            <div className="absolute pointer-events-none top-[1800px] left-0 md:left-30 w-42 md:w-72 h-64 md:h-56 bg-blue-600 opacity-30 dark:opacity-60 rounded-full blur-[100px] z-[50]"></div>
            <div className="absolute pointer-events-none top-[1000px] right-0 md:right-30 w-42 md:w-72 h-64 md:h-56 bg-blue-600 opacity-30 dark:opacity-60 rounded-full blur-[100px] z-[50]"></div>

            <div className="absolute pointer-events-none top-[2800px] right-0 md:right-30 w-42 md:w-72 h-64 md:h-56 bg-blue-600 opacity-30 dark:opacity-60 rounded-full blur-[100px] z-[50]"></div>

            {/* Main Content */}
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <main className={`${mobileMenuOpen ? "pointer-events-none" : ""} relative z-10`} style={{ paddingTop: "80px" }}>
                {/* Hero Section */}
                <section className="relative w-full">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
                        style={{
                            backgroundImage: `url(${HeroBagckground3})`,
                        }}
                    />
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col items-center pt-10 md:pt-20 pb-10">
                            {/* Gradient Banner */}
                            <div className="relative w-full overflow-hidden mb-6">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #0C74FF 50%, rgba(255, 216, 41, 0) 100%)",
                                    }}
                                ></div>
                                <p className="relative z-10 font-bold text-lg md:text-xl text-white text-center">
                                    #1 SMM panel
                                </p>
                            </div>

                            {/* Headings */}
                            <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
                                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                                    The best & cheapest
                                </h1>
                                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                                    reseller panel
                                </h1>
                                <p className="text-base md:text-xl text-[#606F85] max-w-2xl">
                                    Purchase likes, followers, views and other SMM services in one place.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-row items-center gap-3 md:gap-4 my-6 md:my-10 w-full justify-center ">
                                <GradientButton icon={<Star color="skyblue" />} label="Price List" className="backdrop-blur-xl" />
                                <GradientButton
                                    icon={<UserCircle color="black" />}
                                    label="Sign Up"
                                    variant="gray"
                                    className="backdrop-blur-xl"
                                />
                            </div>

                            <Card className="w-full flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:p-12 rounded-2xl md:rounded-3xl shadow-sm max-sm:bg-white dark:bg-[#080d32] backdrop-blur-xl">
                                <div className="w-full md:w-[30%]">
                                    <Input placeholder="Username" className="h-12 w-full" />
                                </div>
                                <div className="w-full md:w-[40%] flex flex-col sm:flex-row items-center gap-3">
                                    <div className="w-full relative">
                                        <Input
                                            placeholder="Password"
                                            className="h-12 w-full pr-20 md:pr-4"
                                        />
                                        <Button className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 h-8 px-2 text-xs bg-transparent hover:bg-transparent text-blue-500 hover:text-blue-600 shadow-none">
                                            Forgot?
                                        </Button>
                                    </div>
                                    <Button className="hidden md:flex bg-gradient-primary text-white h-12 px-4 whitespace-nowrap">
                                        Forgot password?
                                    </Button>
                                </div>
                                <div className="w-full md:w-[30%] flex items-center justify-end gap-3">
                                    <Card className="flex-shrink-0 flex items-center justify-center p-2 h-12 w-12 max-sm:bg-white dark:bg-gray-900/80 dark:backdrop-blur-md animate-on-scroll">
                                        <Bookmark color="blue" className="w-6 h-6" />
                                    </Card>
                                    <GradientButton
                                        icon={<LogIn color="skyblue" />}
                                        label="Sign in"
                                        className="flex-1 min-w-[120px]"
                                    />
                                </div>
                            </Card>

                            {/* Stats Section */}
                            <div className="mt-8 md:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                                <StatCard icon={TotalUsers} label="Total users" value={114576} />
                                <StatCard icon={TotalOrders} label="Total Orders" value={34794292} />
                                <StatCard icon={TotalServices} label="Total Services" value={828} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Why Order SMM Services */}
                    <section className="flex flex-col w-full gap-8 my-12 mt-42">
                        <FireHeadline
                            title="Why order SMM services on our panel?"
                            subtitle="We have the best prices, the best quality."
                        />
                        <div className="flex flex-col md:flex-row gap-6 w-full items-start mt-12">
                            <AccordionWithCard faqs={faqs1} />
                            <Card className="rounded-3xl p-6 gap-8 items-center md:w-7/12 lg:w-5/12 w-full max-sm:bg-white dark:bg-[#080d32] backdrop-blur-xl animate-on-scroll">
                                <div>
                                    <img src={PromotionImg} alt="PromotionImg" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold text-2xl">Promotion for you</h3>
                                    <p className="text-[#606F85]">
                                        Use SMM services we offer on our panel to quickly and efficiently
                                        boost the growth of your social media accounts.
                                    </p>
                                    <GradientButton icon={<Star color="skyblue" />} label="Start promotion" />
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* Service Features Section */}
                    <section className="mt-12 w-full">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {featureCards.map((card, index) => (
                                    <FeatureCard
                                        key={index}
                                        title={card.title}
                                        highlight={card.highlight}
                                        description={card.description}
                                        image={card.image}
                                        className="animate-on-scroll"
                                    />
                                ))}
                            </div>
                            <div className="mt-12 flex justify-center">
                                <GradientButton icon={<Star color="skyblue" />} label="Start promotion" />
                            </div>
                        </div>
                    </section>

                    {/* Promotion Section */}
                    <section className="w-full py-24 md:py-24">
                        <div className="container mx-auto px-4">
                            <FireHeadline
                                title="Fastest, cheapest, biggest panel in the SMM"
                                subtitle="Promotion of all social networks"
                            />
                            <div className="my-12 w-full">
                                <div className="relative">
                                    <div className="hidden md:block w-[80%] mx-auto absolute top-[60px] left-0 right-0 h-1.5 bg-gray-800/10 dark:bg-gray-800/30 z-0 transform -translate-y-1/2" />
                                    <div className="relative z-10 flex flex-wrap justify-between gap-2 md:gap-6">
                                        {steps.map((step) => (
                                            <StepCard
                                                key={step.step}
                                                step={step.step}
                                                title={step.title}
                                                description={step.description}
                                                icon={step.icon}
                                                className="animate-on-scroll"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="flex flex-col w-full gap-8">
                        <FireHeadline
                            title="Why choose us?"
                            subtitle="We have the best prices, the best quality."
                        />
                        <div className="flex flex-col md:flex-row gap-6 w-full items-start mt-12">
                            <Card className="rounded-3xl p-6 gap-8 items-center md:w-7/12 lg:w-5/12 w-full max-sm:bg-white dark:bg-[#080d32] backdrop-blur-xl">
                                <div>
                                    <img src={PromotionImg} alt="PromotionImg" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold text-2xl">Promotion for you</h3>
                                    <p className="text-[#606F85]">
                                        Use SMM services we offer on our panel to quickly and efficiently
                                        boost the growth of your social media accounts.
                                    </p>
                                    <GradientButton icon={<Star color="skyblue" />} label="Start promotion" />
                                </div>
                            </Card>
                            <AccordionWithCard faqs={faqs2} />
                        </div>
                    </section>

                    {/* Popular Payment Gateways */}
                    <section className="flex flex-col w-full gap-8 mt-24 mb-24">
                        <p className="text-start text-lg text-[#64728F]">
                            We work with the most popular payment systems
                        </p>
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            plugins={[plugin.current]}
                            className="w-full mx-auto"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {logos.map((logo, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                                    >
                                        <div className="border-2 md:rounded-3xl rounded-2xl h-16 md:p-10 p-4 flex items-center justify-center bg-white dark:bg-transparent backdrop-blur-xl">
                                            <img
                                                src={logo.src}
                                                alt={`${logo.alt} logo`}
                                                className="max-h-12 object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </section>
                </div>
            </main>
            <ScrollToTop />
            <a
                href="https://t.me/your_username" // <-- Telegram username
                target="_blank"
                rel="noopener noreferrer"
                className="fixed md:bottom-10 bottom-4 left-8 z-50 transition-transform duration-300 hover:scale-110 group"
            >
                <button
                    className="md:w-14 md:h-14 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:bg-blue-600 active:scale-95 transition-colors duration-300"
                    aria-label="Contact us on Telegram"
                >
                    <img
                        src={TelegramLogo}
                        alt="Telegram"
                        className=" transition-transform duration-300 group-hover:scale-110"
                    />
                </button>
            </a>

            <Footer />
        </div>
    );
}

export default HomePage;
