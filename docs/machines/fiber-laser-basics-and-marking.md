# Fiber laser basics and marking (incl. MOPA)

Fiber markers are the metal specialists in many shops. Instead of a gantry dragging a head across a bed, most hobby/small-shop fibers use a **galvo** head and an **F-theta** lens that marks inside a fixed field. LightBurn talks to them differently than a Ruida CO₂ — but the shop goals are familiar: clean logos, serials, and durable marks.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Galvo workflows make more sense after Master LightBurn foundations.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-laser-basics-and-marking)
</div>


## What “fiber” usually means in a maker shop

- Wavelength around **1064 nm** — strong for many metals; not a wood/acrylic cutter replacement for CO₂.
- Pulsed source (Q-switched or MOPA) with adjustable frequency and (on MOPA) pulse width.
- Marking field size trades off against spot size when you change lenses.

See also [laser types](laser-types.md).

## Q-switched vs MOPA (community consensus)

| | **Q-switched** | **MOPA** |
| --- | --- | --- |
| Pulse width | Largely fixed | Adjustable over a wide range |
| Frequency range | Narrower | Much wider |
| Everyday metal logos | Excellent | Excellent |
| Color / fine anneal control on stainless | Possible but limited | Preferable for wider, more repeatable color |
| Price | Usually lower | Usually higher |

LightBurn forum consensus: non-MOPA machines *can* produce some color, but **MOPA makes consistent color marking far more practical** because you can tune pulse shape and frequency. Buy MOPA if color (or sensitive plastics) is a primary goal — not only because a brochure listed “color.”

Color itself is mostly controlled surface heating that forms an oxide / anneal layer. Results change with steel grade, thickness, lens, ambient temperature, and even fingerprints. There is no universal color chart that transfers machine-to-machine.


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-laser-basics-and-marking) walks the tools and workflows step by step — lifetime access, one clear path.
</div>


## Lenses and focus (galvo reality)

Shorter F-theta lenses → smaller spot, higher energy density, **smaller field**, shallower depth of focus. Longer lenses → larger field, larger spot, more depth of focus. Community troubleshooting often finds “the machine won’t mark aluminum” is really **wrong working distance** or an oversized field lens spreading energy too thin.

Red-dot framing is a helper, not the beam. Calibrate offsets in LightBurn device settings so the preview matches the burn.


## LightBurn habits that transfer

Even though the motion system is galvo, you still win by:

- Naming layers by process (`anneal`, `deep`, `cleanup`)
- Saving Material Library entries with **lens focal length + metal grade** in the name
- Framing every production job until offsets are trusted
- Disabling rotary mode when you return to flat work

If you are new to LightBurn generally, start with [LightBurn basics](../lightburn/lightburn-basics.md) before diving into pulse-width grids.

## Practical marking modes (qualitative)

- **Surface etch / ablation** — remove coating or material for contrast.
- **Annealed / black mark** — heat without deep digging; often used on stainless.
- **Deep engrave** — many passes; watch warping and discoloration from heat.
- **Color mark (esp. MOPA)** — heat-controlled oxide colors; slow and fussy compared with mono logos.

Details and material notes: [fiber metal marking](../materials/fiber-metal-marking.md).

## Related reading

- [Fiber common problems](../troubleshooting/fiber-common-problems.md)
- [UV lasers](uv-lasers.md)
- [Laser buying guide](../buying-guides/laser-buying-guide.md)

## Sources and further reading

- LightBurn forum: [Color engraving — MOPA vs Q-switch](https://forum.lightburnsoftware.com/t/color-engraving-what-is-true/178587)
- LightBurn forum: [Experiences with color marking](https://forum.lightburnsoftware.com/t/experiences-with-color-marking/125488)
- LightBurn forum: [Sharing color material tests for steel](https://forum.lightburnsoftware.com/t/sharing-some-color-material-tests-for-steel/171931)
- LightBurn forum: [Thoughts on fiber / MOPA discussion](https://forum.lightburnsoftware.com/t/thoughts-on-fiber-laser/86793)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-laser-basics-and-marking){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-laser-basics-and-marking-hub)
</div>

