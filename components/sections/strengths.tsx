import { site } from '@/content'
import { Tile } from './bento'
import { Section } from './section'

/** "How I work" — three facts already present in the case studies. */
export function Strengths() {
  return (
    <Section id="how" title="How I work">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {site.strengths.map(strength => (
          <Tile key={strength.title} className="space-y-2">
            <h3 className="text-sm font-semibold">{strength.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {strength.text}
            </p>
          </Tile>
        ))}
      </div>
    </Section>
  )
}
