"use client"
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

export default function Test() {
  // Testimonial data array
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Samantha Jonas",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "client.jpg"
    },
    {
      id: 2,
      name: "Michael Johnson",
      text: "I was completely satisfied with the service. The team went above and beyond my expectations.",
      image: "client.jpg"
    },
    {
      id: 3,
      name: "Emily Chen",
      text: "The product quality is outstanding and the customer support is excellent. Highly recommended!",
      image: "client.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section>
      <div>
        <h1 className="h">Testimonial</h1>
        <div className="testimonial">
          <div className="rounded">
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].name} 
              className="rounded2" 
            />
          </div>
          <h1>{testimonials[currentTestimonial].name}</h1>
          <p>{testimonials[currentTestimonial].text}</p>
          <div className="text-icon"><FaQuoteLeft /></div>
        </div>

        <div className="butn">
          <button onClick={handlePrevious}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={handleNext}>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
}