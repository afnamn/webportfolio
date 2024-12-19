// app/page.tsx

export default function Home() {
    return (
        <div className="relative w-full h-screen">
            {/* Image Background */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://www.boldplanning.com/wp-content/uploads/2016/10/iStock-628033328.jpg')",
                }}
            />

            {/* Content */}
            <div className="flex items-center justify-center h-full px-10 text-center">
                <div className="text-white space-y-6">
                    {/* Heading */}
                    <h1 className="text-8xl font-extrabold text-[#deb992]">
                        Welcome to My Portfolio
                    </h1>
                    {/* Subheading */}
                    <h2 className="text-5xl font-semibold text-[#1ba098]">
                        Afnan Monzur
                    </h2>
                    {/* Caption */}
                    <p className="text-xl md:text-2xl font-light text-[#deb992]">
                        A passionate software developer with a focus on building scalable
                        and efficient applications. Explore my projects and learn more about
                        my skills and experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
