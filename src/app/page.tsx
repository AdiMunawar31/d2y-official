import Testimonial from "@/components/Home/Testimonial";
import Header from "@/components/Home/Header";
import Image from "next/image";
import Sponsorship from "@/components/Home/Sponsorship";
import Requirement from "@/components/Home/Requirement";
import CardBlog from "@/components/Home/CardBlog";
import NewsLetter from "@/components/Home/NewsLetter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <Header />
      <Requirement />
      <CardBlog />
      <Testimonial />
      <Sponsorship />
      <NewsLetter />
    </main>
  );
}
