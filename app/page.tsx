import { Bento } from '@/components/sections/bento'
import { CaseStudies } from '@/components/sections/case-studies'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { MobileCtaBar } from '@/components/sections/mobile-cta'
import { Pitch } from '@/components/sections/pitch'
import { StatsTile } from '@/components/sections/stats-tile'
import { Strengths } from '@/components/sections/strengths'
import { TechShowcase } from '@/components/sections/tech-showcase'
import { TldrTile } from '@/components/sections/tldr-tile'
import { ViewSwitch } from '@/components/view-mode'

/**
 * One-page portfolio with two views: the deep dive (hero + bento grid +
 * case studies) and the recruiter's 1-minute pitch. All copy comes from
 * content.ts; see AGENTS.md for conventions.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main
        id="top"
        className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-16 sm:px-6 md:space-y-16"
      >
        <ViewSwitch
          deep={(
            <>
              <Hero />
              <Bento>
                <TldrTile />
                <TechShowcase />
                <StatsTile />
              </Bento>
              <Strengths />
              <CaseStudies />
              <MobileCtaBar />
            </>
          )}
          pitch={<Pitch />}
        />
      </main>
      <Footer />
    </>
  )
}
