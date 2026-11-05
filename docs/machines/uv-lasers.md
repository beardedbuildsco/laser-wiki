# UV lasers (what they are good for)

UV marking lasers (often ~355 nm in galvo form factors) show up in shops that need **fine detail with less heat** than IR fiber or CO₂ — especially glass, some plastics, and heat-sensitive marks. They are not a magic replacement for every CO₂ or fiber job; they are a specialist tool with a steeper focus requirement.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [UV still runs through LightBurn habits — Master LightBurn helps the software side.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=uv-lasers)
</div>


## Where UV shines (community-reported)

- High-detail **glass** etching without the same “heat crack” look many people associate with CO₂ frosting techniques
- Certain **plastics** (including cases where IR melts or chars; polycarbonate marking is often discussed as a UV strength vs CO₂ melt mess)
- Fine logos on mixed substrates when heat input must stay low

Reddit and LightBurn discussions repeatedly call UV a “cold” style mark relative to IR — still respect eye safety and fumes; “cold” is not “harmless.”

## Focus is the make-or-break

Multiple independent LightBurn reports agree: UV glass work is **extremely focus sensitive**. Curved drinkware is harder than flat glass because the surface walks out of the tiny depth of focus. Smaller field lenses (tighter spot) often outperform huge field lenses for glass detail.

!!! tip "Community-reported starting point (test on scrap)"
    On a LightBurn forum glass thread, operators reported success after switching toward a smaller field lens and trying roughly **1 ns pulse, ~50 kHz, ~800 mm/s**, then refining **focus height**. Treat these as *someone else’s starting guesses* for a 5 W-class UV — not Bearded Builds tested values. Always scrap-test on *your* glass and lens.
    Source: [UV laser glass engraving tips](https://forum.lightburnsoftware.com/t/uv-laser-glass-engraving-tips-cannot-get-it-to-work/100499)


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=uv-lasers) walks the tools and workflows step by step — lifetime access, one clear path.
</div>



## Buying considerations (high level)

- Confirm LightBurn / controller support for your UV galvo before you buy
- Budget for at least one **smaller field lens** if glass detail is the reason you want UV
- Plan exhaust even for “cold” marks — plastics still off-gas
- Compare UV against improving a CO₂ glass workflow; UV wins on fine detail, not always on cost-per-mug for simple frosts

## What UV is *not*

- A bulk wood/acrylic production cutter like a CO₂ cabinet
- Automatically better at bare deep metal removal than a proper fiber
- Foolproof on cylinders without rotary math and focus discipline

## Safety notes specific to UV

Use eyewear and enclosure windows rated for the **UV wavelength** of your source — fiber 1064 nm glasses do not cover UV. Reflections and fluorescence hazards differ from IR shops. Keep the same fire and fume discipline as other lasers ([laser eye safety and fire](../safety/laser-eye-safety-and-fire.md)).

## Related reading

- [Laser types](laser-types.md)
- [Fiber laser basics](fiber-laser-basics-and-marking.md)
- [What you can laser](../materials/what-you-can-laser.md)

## Sources and further reading

- LightBurn forum: [UV laser glass engraving tips](https://forum.lightburnsoftware.com/t/uv-laser-glass-engraving-tips-cannot-get-it-to-work/100499)
- Public community discussion summaries via search of r/Laserengraving (direct Reddit HTML was blocked from this environment; we used indexed public snippets only)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=uv-lasers){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=uv-lasers-hub)
</div>

