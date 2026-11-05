# Fiber / galvo common problems

Fiber markers fail differently than CO₂ cabinets. There is no long mirror fold to clean every week — but focus, field lens choice, hatch settings, and red-dot offsets create their own confusion.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Galvo troubleshooting is faster when LightBurn fundamentals are solid — Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-common-problems)
</div>


## “It won’t mark this metal”

Before declaring the source dead:

1. Confirm you are at the **correct working distance** for that F-theta lens (lens markings are easy to misread as “stand this many cm away” incorrectly).
2. Try a known-easy substrate (often stainless) as a control.
3. Reflective / conductive metals (copper, some aluminums, precious metals) need appropriate power density — a huge field lens can make a 30 W machine feel weak.
4. Clean the lens window; wipe fingerprints off the part.

Community threads frequently resolve “only stainless works” as a **focus / lens** issue rather than a fake laser.

## Framing looks right, burn is elsewhere

Calibrate red-dot / preview offsets in LightBurn device settings. Engrave a known square, compare to the red frame, adjust offset/scale, re-test. If marks shift when you change Z height, check that the head is square to the column — tilt makes offsets height-dependent.

## Color marking is inconsistent

Expected. Color depends on heat history, alloy, ambient temperature, and hatch. LightBurn users report needing libraries *per machine and lens*, and that large parts do not always match tiny test coupons. Prefer MOPA if color is the product; still plan scrap grids.


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-common-problems) walks the tools and workflows step by step — lifetime access, one clear path.
</div>


## Deep engraving warps or discoloration

Too much heat too fast. Slow down with more moderate passes, allow cooling, fixture thin parts, and accept that “3 mm deep in one afternoon” may not be realistic on every alloy with a small galvo.

## Rotary / curved parts look blotchy

Same physics as UV: limited depth of focus. Keep the surface at focus through the rotation; verify rotary steps and diameter.


## Hatch looks stripy or uneven

Check bi-directional hatch vs unidirectional, interval too wide, and whether the part moved. On color jobs, interval changes alone can swing hue — that sensitivity is normal according to MOPA users, not necessarily a broken galvo.

## Software / device profile mix-ups

Loading a CO₂ device profile onto a galvo machine (or the reverse) produces nonsense travel and field sizes. Keep named device profiles (`Shop Fiber 200mm`, `Fiber 110mm`) and switch deliberately when you change lenses.

## Related reading

- [Fiber laser basics](../machines/fiber-laser-basics-and-marking.md)
- [Fiber metal marking](../materials/fiber-metal-marking.md)
- [Common LightBurn errors](common-lightburn-errors.md)

## Sources and further reading

- LightBurn forum: [Galvo fiber red-dot alignment](https://forum.lightburnsoftware.com/t/galvo-fiber-laser-red-dot-alignment/82472)
- LightBurn forum: [Find center / focal length on galvo](https://forum.lightburnsoftware.com/t/find-center-on-a-galvo-laser-machine-focal-lenght/99463)
- LightBurn forum: [Color engraving what is true?](https://forum.lightburnsoftware.com/t/color-engraving-what-is-true/178587)
- Public indexed discussions from r/Laserengraving on lens choice and focus (direct Reddit fetch blocked here)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-common-problems){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=fiber-common-problems-hub)
</div>

