import Teacher1 from "@/assets/image/Teacher-1.jpg";
import Teacher2 from "@/assets/image/Teacher-2.jpg";
import Teacher3 from "@/assets/image/Teacher-3.jpg";

export default function OurTeacher() {
    const teachers = [
        {
            id: 1,
            name: "Emma Johnson",
            role: "Early Childhood Specialist",
            image: Teacher2,
            bgColor: "bg-red-500",
            circleBg: "bg-white"
        },
        {
            id: 2,
            name: "Michael Thompson",
            role: "Creative Arts Educator",
            image: Teacher1,
            bgColor: "bg-blue-600",
            circleBg: "bg-white"
        },
        {
            id: 3,
            name: "Sophia Garcia",
            role: "Play-Based Learning Expert",
            image: Teacher3,
            bgColor: "bg-orange-400",
            circleBg: "bg-white"
        }
    ];

    return (
        <>
            <div className="min-h-[50vh] w-full bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-orange-300 text-sm font-medium mb-2">Our Team</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Caring Educators</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our dedicated team of educators brings passion, expertise, and genuine care to every interaction with your child. They create a warm, inclusive environment where every child can thrive.
                        </p>
                    </div>

                    {/* Teachers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teachers.map((teacher) => (
                            <div key={teacher.id} className="flex flex-col items-center">
                                {/* Teacher Card */}
                                <div className={`${teacher.bgColor} rounded-3xl w-full max-w-sm pt-8 pb-8 px-6 relative`}>
                                    {/* Circular Image */}
                                    <div className="flex justify-center mb-6">
                                        <div className={`${teacher.circleBg} rounded-full p-2 w-64 h-64 flex items-center justify-center`}>
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Teacher Info */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {teacher.name}
                                        </h3>
                                        <p className="text-white text-sm">
                                            {teacher.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}