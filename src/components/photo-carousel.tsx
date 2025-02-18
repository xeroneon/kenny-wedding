import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function PhotoCarousel() {
  // Update these filenames to match the files in your public/photos folder
  const images = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
    "/photos/photo5.jpg",
    "/photos/photo6.jpg",
    "/photos/photo7.jpg",
    "/photos/photo8.jpg",
    "/photos/photo9.jpg",
    "/photos/photo10.jpg",
    "/photos/photo11.jpg",
    "/photos/photo12.jpg",
    "/photos/photo13.jpg",
    "/photos/photo14.jpg",
    "/photos/photo15.jpg",
    "/photos/photo16.jpg",
  ]

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-9/12 lg:max-w-lg md:max-w-md sm:max-w-lg"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="xs:basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="p-2 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
