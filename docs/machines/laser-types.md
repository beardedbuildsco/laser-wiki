# Laser types: diode, CO₂, fiber, and UV

Not every “laser engraver” does the same job. The laser *type* is the **source** — what makes the beam and at what wavelength. The four you will hear about most are **diode**, **CO₂**, **fiber**, and **UV**. Wavelength decides what a machine can cut or mark, so picking the wrong type is the most expensive beginner mistake we see.

Separately, every machine also has a **motion system** — how the beam gets moved around the work. That is **gantry** or **galvo**, and it is *not* a laser type. A fiber can be galvo, a CO₂ can be gantry or galvo, and so on. See [Galvo vs gantry](#galvo-vs-gantry) below.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Once you pick a machine, Master LightBurn teaches you to run it well.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types)
</div>

This page explains what each source is good at and where it struggles. For shopping by budget, see the [laser buying guide](../buying-guides/laser-buying-guide.md).

## Quick comparison

| Laser type | Typical wavelength | Strong at | Weak at | Usual motion system |
| --- | --- | --- | --- | --- |
| **Diode** | ~450 nm (blue/violet) | Wood, paper, leather, coated metals (mark), some acrylics | Clear acrylic, bare metal cutting, thick stock | Gantry (open or enclosed) |
| **CO₂** | ~10.6 µm (infrared) | Wood, acrylic, leather, paper, rubber, fabric, glass etch | Bare metals (reflect / poor absorption) | Gantry cabinet; galvo on some marking units |
| **Fiber** | ~1064 nm | Bare metals (mark/engrave), some plastics | Wood/organic cutting (not the right tool) | Galvo (most small-shop markers) |
| **UV** | ~355 nm (ultraviolet) | Fine detail with low heat: glass, many plastics, heat-sensitive marks | Cutting, deep engraving, large areas | Galvo |

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

## UV lasers

UV lasers run around 355 nm. The short wavelength is absorbed at the surface with very little heat spread, which is why they are often called "cold marking."

**What they do well**

- Crisp marks on glass, many plastics, and coated parts without melting or charring
- Very fine detail and small text
- Heat-sensitive products where fiber or CO₂ would discolor or warp

**Where they struggle**

- Cutting or deep engraving — they are markers, not cutters
- Cost per watt is high, and focus is less forgiving

More detail: [UV lasers](uv-lasers.md).

## Galvo vs gantry

Galvo and gantry are two ways to **move the beam**. Either one can be paired with different laser sources — so "galvo" tells you how the machine works, not what it can mark.

| | **Gantry** | **Galvo** |
| --- | --- | --- |
| How it moves the beam | A head rides on X/Y rails across the bed | Two fast mirrors steer the beam through a fixed lens; the head does not move |
| Work area | Large — often a full bed, sometimes with pass-through | Small field set by the lens (inches, not feet) |
| Speed | Slower; limited by moving the head's mass | Very fast — mirrors weigh almost nothing |
| Best for | Cutting, big signs, full sheets, rotary work across long lengths | Production marking: tags, serials, logos, tumblers on a rotary |
| Focus | Usually one focus height across the bed | Focus is set by lens height; parts must sit in the field and in focus |
| Common pairings | Diode, CO₂ | Fiber, UV, some CO₂ marking units |

**Rule of thumb:** if you need to *cut* or cover a big area, think gantry. If you need to *mark the same small thing fast, over and over*, think galvo.

<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=laser-types) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## How to choose for your shop

Ask three questions before you buy:

1. **What material is 80% of my work?** Wood and acrylic → CO₂ or capable diode. Bare metal marks → fiber. Glass and heat-sensitive plastics with fine detail → UV. Mixed craft goods → often diode first, CO₂ when acrylic volume grows.
2. **Do I need cut edges or surface marks?** Cutting thicker stock favors CO₂ (organics) or specialized metal cutters (not covered in depth here). Surface logos on steel favor fiber.
3. **Do I need speed in a small field or travel across a large bed?** That is the motion question, separate from the laser type: production tags in a fixed size → galvo. Full-sheet plywood layouts → gantry CO₂ or diode.

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
