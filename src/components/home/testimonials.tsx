import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewAvatar from "@/assets/image/Review-Avatar.jpg";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            text: "My daughter has blossomed at Bright Future Academy! The caring teachers have helped her become more confident and eager to learn. The nurturing environment has made all the difference in her development.",
            name: "Jennifer Martinez",
            role: "Parent",
            avatar: ReviewAvatar
        },
        {
            id: 2,
            text: "The educational programs at Bright Future have exceeded our expectations. My son's social skills and creativity have flourished since joining their caring community. We're so grateful for the wonderful experience.",
            name: "Robert Chen",
            role: "Parent",
            avatar: ReviewAvatar
        },
        {
            id: 3,
            text: "As a working parent, I appreciate the open communication from the staff. I feel confident knowing my child is in a safe, stimulating environment where she feels valued and encouraged to explore.",
            name: "Amanda Williams",
            role: "Parent",
            avatar: ReviewAvatar
        }
    ];

    return (
        <>
            <div className="min-h-[50vh] w-full bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-orange-300 text-sm font-medium mb-2">What Parents Say</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Happy Families</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Hear from parents who have experienced the Bright Future difference. We're proud to be part of so many children's educational journeys.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="max-w-5xl mx-auto">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 select-none h-full">
                                        <div className="p-4 h-full">
                                            <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                                                {/* Testimonial Text */}
                                                <p className="text-gray-500 mb-8 leading-relaxed">
                                                    {testimonial.text}
                                                </p>

                                                {/* Author Info */}
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="w-16 h-16 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <h4 className="text-lg font-bold text-red-500">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-gray-400 text-sm">
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}