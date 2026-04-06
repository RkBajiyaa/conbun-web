import ReviewsHero from "@/components/reviews/ReviewsHero";
import DeepDives from "@/components/reviews/DeepDives";
import MasonryGallery from "@/components/reviews/MasonryGallery";

export default function ReviewsPage() {
  return (
    <main className="bg-surface">
      <ReviewsHero />
      <DeepDives />
      <MasonryGallery />
      
      {/* Final CTA - Reusing your existing styling */}
      <section className="max-w-7xl mx-auto px-6 mb-24 mt-24">
        <div className="relative bg-[#360f00] text-white rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Ready to start your own success story?</h2>
            <p className="text-xl opacity-80 mb-12 italic">Expert pet care is just one click away. Join the Conbun family today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#f28c38] text-[#602e00] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Book Your Consultation</button>
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20">View Pricing Plans</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}