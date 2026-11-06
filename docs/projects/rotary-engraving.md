# Rotary engraving (tumblers and round stock)

A rotary attachment turns your laser into a tumbler and bottle machine by rotating the part while the gantry engraves along its length. Setup mistakes show up as skewed logos, wrong circumference spacing, and slip marks. This page covers the workflow concepts that stay true across many diode and CO₂ rotary kits.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Rotary setup makes more sense after Master LightBurn foundations.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=rotary-engraving)
</div>

Always follow your rotary and controller documentation for wiring, axis enable, and steps-per-rotation values.

## What a rotary changes in LightBurn

In rotary mode you typically:

- Enable the rotary in LightBurn (and on some controllers, a hardware toggle)
- Enter **object diameter** or circumference so LightBurn maps Y (or the rotary axis) travel to rotation
- Design in the “unrolled” flat view of the surface

If diameter is wrong, artwork wraps too short or too long. Measure the **engraved surface** diameter (coating outside), not the cardboard shipping tube guess.

## Mechanical setup

1. Level and square the rotary on the bed so the part axis is parallel to the expected travel.
2. Support long tumblers with both rollers or chuck + tailstock as your kit provides — sag changes focus.
3. Set gentle but secure pressure; crushing thin tumblers causes slip or dents.
4. Clean rollers; dust and condensation make cups walk.
5. Confirm the laser head clears handles, lids, and tapered shapes through a full rotation — **frame slowly**.

!!! warning "Tapered and handled cups"
    Tapers change diameter along the height. A single diameter value is a compromise — place critical art where diameter is closest to your measured value, or segment the design. Handles limit rotation; use chuck-style setups or flattened art placement that avoids the handle path.

## Focus on a cylinder

Focus to the top dead center of the cup — the highest point under the lens. As the cup rotates, that point should stay at a consistent height if the rotary is aligned. Re-check focus when switching between skinny cans and wide pint cups.

## Design tips

- Keep important text away from seams and print breaks on coated tumblers when possible
- Mirror artwork only when your process requires it (some setups engrave through the back of a split design — know your own fixture)
- Test a small logo first; full-wrap jobs amplify diameter errors
- For photos, expect more experimentation — coatings differ wildly

## First rotary job checklist

1. Rotary enabled; non-rotary jobs will behave strangely if you forget to disable later
2. Correct axis (roller vs chuck configuration)
3. Diameter measured with calipers if you have them
4. Focus at top center
5. Low-power or scrap wrap test for spacing
6. Watch the first live job for slip


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=rotary-engraving) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## Common rotary failures

| Symptom | Likely cause |
| --- | --- |
| Logo repeats too soon / too late | Wrong diameter or steps/rotation |
| Skewed / diagonal art | Rotary not square; cup walking |
| Light engrave on sides only | Focus set to centerline wrong; part lifted |
| Missed section near handle | Physical interference; rotation blocked |
| Perfect test, bad production cup | Different diameter coating lot |

Disable rotary mode when you return to flat plaques — leaving it on is a classic “why is my Y axis insane?” moment ([common LightBurn errors](../troubleshooting/common-lightburn-errors.md)).

## Materials note

Most drinkware workflows engrave **coatings** (powder coat, paint, specialized laser coatings), not solid stainless with a diode. Fiber systems mark bare metals differently. Know which stack you own.

## Related reading

- [Finding customers](../business/finding-customers.md) — local businesses reorder drinkware
- [LightBurn basics](../lightburn/lightburn-basics.md)
- [Focus and alignment](../machines/focus-and-alignment.md)
- [Starter settings](../materials/starter-settings.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=rotary-engraving){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=rotary-engraving-hub)
</div>
