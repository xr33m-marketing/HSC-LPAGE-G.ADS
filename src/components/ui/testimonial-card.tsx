import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface TestimonialAuthor {
  name: string;
  image: string;
  title?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  rating?: number;
}

export function TestimonialCard({ author, text, href, rating = 5 }: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';

  return (
    <Card
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex w-[calc(100vw-2rem)] shrink-0 flex-col justify-between rounded-2xl border border-gray-700 bg-granite-light p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:w-[calc(50vw-3rem)] md:w-[calc(33vw-3rem)] lg:w-[26rem]",
        href && "cursor-pointer"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={16} />
            ))}
          </div>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-5 object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <img
              src={author.image}
              alt={author.name}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-white">{author.name}</div>
            {author.title && (
              <div className="text-sm text-gray-400">{author.title}</div>
            )}
          </div>
        </div>
        <p className="text-gray-300">{text}</p>
      </div>
    </Card>
  );
}