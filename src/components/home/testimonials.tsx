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
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            name: "Tyler Curtis",
            role: "Entrepreneur",
            avatar: ReviewAvatar
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            name: "Alessio Dunn",
            role: "Manager",
            avatar: ReviewAvatar
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            name: "Sarah Johnson",
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
                        <p className="text-orange-300 text-sm font-medium mb-2">Testimonial</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Parent Testimonial</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
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
                                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 select-none">
                                        <div className="p-4">
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