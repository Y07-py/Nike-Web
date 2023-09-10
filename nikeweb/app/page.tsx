import CustomerReviews from "./components/CustomerReviews"
import Footer from "./components/Footer"
import PopularProducts from "./components/PopularProducts"
import Hero from "./components/Hero"
import SuperQuarity from "./components/SpecialOffer"
import Subscribe from "./components/Subscribe"
import Nav from "./components/Nav"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuarity />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}
