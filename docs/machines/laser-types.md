# Diode vs CO₂ vs fiber vs galvo

Not every “laser engraver” does the same job. The four families you will hear about most — **diode**, **CO₂**, **fiber**, and **galvo** — differ in wavelength, what they cut or mark, bed size, and price band. Picking the wrong type is the most expensive beginner mistake we see.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Once you pick a machine, Master LightBurn teaches you to run it well.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types)
</div>

This page explains what each is good at and where it struggles. For shopping by budget, see the [laser buying guide](../buying-guides/laser-buying-guide.md).

## Quick comparison

| Type | Typical wavelength | Strong at | Weak at | Common form factor |
| --- | --- | --- | --- | --- |
| **Diode** | ~450 nm (blue/violet) | Wood, paper, leather, coated metals (mark), some acrylics | Clear acrylic, bare metal cutting, thick stock | Open or enclosed gantry |
| **CO₂** | ~10.6 µm (infrared) | Wood, acrylic, leather, paper, rubber, fabric, glass etch | Bare metals (reflect / poor absorption) | Enclosed cabinet or open-frame tube |
| **Fiber** | ~1064 nm | Bare metals (mark/engrave), some plastics | Wood/organic cutting (not the right tool) | Enclosed marking unit or MOPA fiber |
| **Galvo** | Fiber or CO₂ source + galvo head | Fast marking in a fixed field | Large bed travel jobs | Stationary head, part moves or field-limited |

Exact power ratings and bed sizes vary by model. Treat the table as a map of *capabilities*, not a shopping list.

## Diode lasers

Diode machines use semiconductor laser diodes, often in the blue/violet range. Many hobby and small-shop machines are diodes because they are compact and relatively affordable.

**What they do well**

- Engraving and cutting thinner woods, plywood, MDF (within rated thickness)
- Leather, paper, cardboard, cork
- Marking coated or anodized metals (the coating absorbs energy; you are usually not cutting the metal itself)
- Some opaque acrylics — results depend on color and formulation

**Where they struggle**

- Clear acrylic often does not cut cleanly with common blue diodes
- Bare stainless or aluminum cutting is generally not what a hobby diode is for
- Higher power for thicker cuts means more heat, more fire risk, and stricter ventilation needs

!!! tip "Practical shop note"
    If your main products are wood signs, slate, leather patches, and coated tumblers with a rotary, a solid diode can take you far. If you need clean acrylic cut edges every day, look hard at CO₂.

## CO₂ lasers

CO₂ lasers use a gas tube (or RF metal tube on higher-end units) at a wavelength that organic materials and many plastics absorb well.

**What they do well**

- Cutting and engraving wood, acrylic, leather, paper, rubber stamps, fabric
- Frosting or etching glass (surface mark, not a deep cut)
- Larger work areas on many cabinet machines

**Where they struggle**

- Bare metals: the wavelength is poorly absorbed and can reflect — dangerous for optics and eyes
- Tube life, alignment, and water cooling (on DC glass tubes) add maintenance compared with many diodes

!!! warning "Metal and CO₂"
    Do not treat a CO₂ cutter as a metal cutter unless the manufacturer explicitly designs and rates it for that workflow (rare in typical hobby/small-shop CO₂ cabinets). Reflections can damage the tube and optics.

## Fiber lasers

Fiber lasers deliver energy through a fiber optic cable, typically around 1064 nm. In shops like ours, fiber is the go-to for **marking and engraving metals**.

**What they do well**

- Permanent marks on stainless, aluminum, titanium, and many other metals
- Serial numbers, logos, and deep engraving (depth depends on power, pulse characteristics, and passes)
- Some engineered plastics (test carefully — fumes and melt behavior vary)

**Where they struggle**

- Cutting wood or acrylic the way a CO₂ does — wrong tool for that job
- Large “plotter-style” beds; many fiber markers work in a fixed field of view

MOPA (Master Oscillator Power Amplifier) fiber variants offer more pulse-control flexibility for color marks on some stainless and for sensitive materials. That is a feature set to evaluate when comparing fiber units — not a requirement for every shop.

## Galvo systems

“Galvo” describes the **beam steering**: fast galvanometer mirrors aim the beam within a marking field instead of a gantry carrying a head across an X/Y bed.

- **Pros:** very fast marking inside the field; excellent for production nameplates, serials, and logos
- **Cons:** field size is limited by lens (e.g. a working area measured in inches, not feet); focusing and fixturing matter a lot; large flat sheets often need tiling or a different machine

Galvo heads show up on fiber markers most often in small shops, and also on some CO₂ marking systems. The source (fiber vs CO₂) still decides what materials make sense.


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## How to choose for your shop

Ask three questions before you buy:

1. **What material is 80% of my work?** Wood and acrylic → CO₂ or capable diode. Bare metal marks → fiber. Mixed craft goods → often diode first, CO₂ when acrylic volume grows.
2. **Do I need cut edges or surface marks?** Cutting thicker stock favors CO₂ (organics) or specialized metal cutters (not covered in depth here). Surface logos on steel favor fiber.
3. **Do I need speed in a small field or travel across a large bed?** Production tags in a fixed size → galvo. Full-sheet plywood layouts → gantry CO₂ or diode.

Many growing shops eventually run **more than one type** (for example a CO₂ for acrylic/wood and a fiber for metal). That is normal — one machine rarely wins every job.

## Related reading

- [Laser buying guide](../buying-guides/laser-buying-guide.md) — budget tiers and use cases
- [What you can laser](../materials/what-you-can-laser.md) — materials and hard nos
- [Ventilation and safety](ventilation-and-safety.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types-hub)
</div>
