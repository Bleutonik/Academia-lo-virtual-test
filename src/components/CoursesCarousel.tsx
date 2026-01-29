import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "./CourseCard";
import { coursesData } from "@/data/courses";

const CoursesCarousel = () => {
  const courses = coursesData.map(course => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    duration: course.duration,
    totalLessons: course.totalLessons,
    description: course.description,
    icon: course.icon,
    color: course.color,
    moduleIds: course.modules.map(m => m.id)
  }));

  return (
    <section id="cursos" className="py-16 lg:py-20 px-4 lg:px-6 bg-background scroll-mt-20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus metas profesionales y comienza tu transformación hoy.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-4"
        >
          <CarouselContent>
            {courses.map((course, index) => (
              <CarouselItem
                key={course.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <CourseCard course={course} index={index} showButton={false} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none h-12 w-12 rounded-full" />
            <CarouselNext className="relative static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none h-12 w-12 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesCarousel;
