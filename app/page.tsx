import GetStarted from "@/components/get-started"
import Nav from "@/components/main-nav"
import UsersLocationServers from "@/components/uls-container"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Global from "@/components/global-nw"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Nav />
      <GetStarted />
      <UsersLocationServers />
      <Features />
      <Pricing />
      <Global />
      <Testimonials />
    </>
  )
}
