# Focus and alignment

A laser only delivers its best energy density when the beam is focused on (or intentionally relative to) the material surface, and when mirrors/lenses (on multi-optic machines) are aligned. Bad focus looks like “my laser got weak overnight.” Often it did not — the focal point moved.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Focus + LightBurn skills compound — see Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=focus-and-alignment)
</div>

## Why focus matters

At the focal plane, the spot is smallest and intensity is highest. Above or below that plane the spot blooms:

- Engraves look light, wide, and fuzzy
- Cuts fail to separate or need far more power
- Heat spreads, increasing char and flame risk

Diode modules, CO₂ lenses, and fiber field lenses all have a focal length — but the *procedure* to find focus differs by machine.

## Finding focus on a gantry diode or CO₂

Follow your manufacturer’s method first. Common approaches:

1. **Fixed focus tool / spacer:** many diodes ship with a metal or acrylic focus distance block. Set the gap from nozzle (or lens housing, per manual) to material.
2. **Ramp or wedge test:** engrave a line while the material height changes gradually; the thinnest, darkest segment marks best focus.
3. **Software / probe assist:** some machines offer touch probes or camera aids — still verify with a scrap burn.

When material thickness changes, **refocus**. A 6 mm plaque is not the same focal plane as a 3 mm keychain blank if your reference is the bed.

!!! tip "Jigs help"
    If you run the same blank daily, a bed jig that holds thickness constant saves more time than any “magic” setting.

## CO₂ mirrors and beam path (high level)

Glass-tube CO₂ cabinets typically use mirrors to fold the beam to a focusing lens in the head.

**Symptoms of misalignment:** cut power differs by corner of the bed; beam not centered on nozzle; engraved lines look directional in odd ways.

**Safe practice:**

- Alignment involves low-power pulses and target tape — use eyewear rated for your wavelength and follow the machine maker’s alignment sequence
- Clean mirrors and lens with proper optics care (no random paper towels with grit)
- After shipping, heavy bumps, or mirror replacement, plan an alignment check

We will not publish a one-size pulse procedure here — wrong power during alignment can damage optics or cause injury. Use your manual or a technician.

## Galvo / fiber field focus

Galvo systems focus across a field defined by the lens (e.g. different lenses trade field size vs spot size).

- Set the correct working distance from lens to part
- Keep parts fixtured so the marked surface stays at that distance
- Curved parts may need rotary fixtures or multiple heights — do not assume flat-field settings cover a deep curve

## Red-dot vs cutting beam

On many machines the red pointer is **not** perfectly coaxial with the cutting/engraving beam. If framing with the dot looks perfect but burns miss, calibrate the pointer offset (where LightBurn or the manufacturer provides that tool) or learn the visual offset for your head.

## Maintenance that preserves focus quality

| Task | Why |
| --- | --- |
| Clean lens / window | Contaminants absorb energy, heat, and crack coatings |
| Check nozzle height consistency | Bent brackets change focus |
| Verify bed level / slats | Tilted stock shifts focus across a plaque |
| Confirm rail smoothness | Binding can change head height mid-travel |


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=focus-and-alignment) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## Quick diagnostic checklist

1. Did material thickness change?
2. Was the lens cleaned or replaced recently?
3. Does a ramp test still peak at the old spacer height?
4. Is power loss real (tube/diode aging) or only off-focus?
5. On CO₂: do all bed corners cut similarly?

## Related reading

- [Starter settings](../materials/starter-settings.md)
- [Ventilation and safety](ventilation-and-safety.md)
- [Common LightBurn errors](../troubleshooting/common-lightburn-errors.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=focus-and-alignment){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=focus-and-alignment-hub)
</div>
