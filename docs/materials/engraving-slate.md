---
description: "How to engrave slate on a CO2 or diode laser, including prep, test grids, and aiming for a clean, light-gray mark on coasters and plaques."
---

# Laser engraving slate (coasters, plaques, and keepsakes)

Slate is an inexpensive material that engraves to a light-gray mark on dark stone, which makes it popular for coasters, plaques, and keepsakes. The main rule: **slate wants a quick, clean mark, not a lot of heat.**

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Slate photos and fine text look better when LightBurn settings click — Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=engraving-slate)
</div>

!!! tip "The short version"
    CO₂ is the best laser for slate. A blue diode works fine, just slower. Fiber is workable on dark slate but hit or miss. Whatever you run, do a test grid on a scrap first, aim for a matte light-gray mark, and only seal with a very light coat (or skip sealing altogether).

## 1. Best laser types

Slate is a stone, so it behaves a little differently from wood or leather. Here is how the main laser types on this wiki ([laser types](../machines/laser-types.md)) does with it.

| Laser type | How it does on slate | Notes |
| --- | --- | --- |
| **CO₂** | The standard choice, and the fastest | Trotec recommends CO₂ for stone. In one side-by-side test, a 55 W CO₂ ran a test grid in about 13 minutes; a diode took about 55 minutes on the same grid. |
| **Diode** (blue, ~450 nm) | Works well, just slower | xTool says a diode is more than enough for slate and suggests about 20 W of optical output if you want a more prominent mark. Lower-wattage diodes still work. They just need slower speeds. |
| **Fiber** | Mixed. Workable on dark slate | Trotec says fiber is the wrong wavelength for stone, while xTool and Thunder Laser publish fiber settings for slate. Treat it as an option for dark slate, and test before taking paid orders. |

If you're still deciding on a machine, start with the [laser buying guide](../buying-guides/laser-buying-guide.md) or the [diode buying guide](../buying-guides/diode-buying-guide.md), and see [gear I use](../buying-guides/gear-we-use.md) for what I run in the shop.

## 2. Finding your settings

There's no universal slate recipe. Slate varies from quarry to quarry, even from batch to batch, so build your numbers on your machine ([finding your settings](starter-settings.md) covers the method).

1. **Run a LightBurn Material Test on a scrap** from the same batch you'll use for the real job.
2. **Engrave at focus.** Set it on the top surface ([focus and alignment](../machines/focus-and-alignment.md)) and use **Fill** mode.
3. **Rinse the dust off with water** before you judge the result. Dust sitting in the engraving hides what the mark really looks like.
4. **Pick the winner by look, not by darkest or deepest.**

!!! success "What good looks like"
    A clean, **matte, light-gray** mark with sharp edges. If it turns **shiny, glassy, or raised**, that's too much heat. Go faster or lower the power. Don't add power to chase contrast.

### Starting points (seeds for your grid, not guarantees)

| Laser | Where to start | Notes |
| --- | --- | --- |
| **CO₂** | Trotec's slate coaster example: **60% power, 100% speed, 500 PPI, 1 pass, air assist on** | Treat it as a seed and scale it for your own machine. Never run a CO₂ tube at 100% power. One public test swept **50–500 mm/s at 20–70% power** and got good results even at 500 mm/s. |
| **Diode** | A broad sweep: roughly **20–100% power** across a wide speed range | Diodes vary a lot by wattage and lens, so let the grid tell you where the sweet spot is. Then narrow in with a second, smaller grid. |
| **Fiber** | For a deeper mark: **crosshatch at 45°, 0.025 mm line interval, about 250 mm/s**, then add passes | Use this as a seed for a grid, not an answer. See [fiber laser basics](../machines/fiber-laser-basics-and-marking.md). |

### Photos on slate

For photos, use an image mode with **dithering** (Jarvis or Stucki work well in LightBurn) rather than a plain grayscale. Slate only has one "ink" color, so a dithered pattern gives you much better tonal detail. Run a photo test on a scrap before the real piece.

## 3. Sealing slate

**Sealing is optional.** Unsealed slate is a perfectly good finished product, especially for coasters you're selling as "natural stone."

- **Mineral oil:** A thin wipe, buffed off, deepens the background and boosts contrast. Watch out for pooled oil. If it collects in the engraving, it darkens the mark and you lose the contrast you were after.
- **Clear coat:** If you want a harder finish, use a **very light matte clear coat**. A matte acrylic spray works, as does a food-safe sealer made for coasters. Wipe off any excess, then **let it cure fully before stacking** or packing.
- **Test it first.** Always try your sealer on a spare piece. Some sealers shift the sheen or color and can wash out the engraving.
- **Seal before engraving?** Some makers spray matte acrylic on the slate *before* engraving for crisper detail. That works only if it's **fully dry** before the laser touches it.

## 4. Tips and tricks

- **Masking is usually unnecessary.** Clean the slate before and after with water and a microfiber cloth. Wipe off oils and dust before you start, since oils and fingerprints can change how the mark looks.
- **Choose your slate carefully.** Natural slate varies, so pick **flat, uniform pieces**, or buy **pre-cut laser coaster blanks**. Test every new batch, even from the same seller. (I keep a slate coaster set in [gear I use](../buying-guides/gear-we-use.md#materials-supplies) if you want a place to start.)
- **Speed before power.** Too much heat causes **flaking, melting, and that raised glassy texture**. If your mark looks bad, speed up first before adding more power.
- **Boost contrast.** Oil the finished piece, or fill the engraving with **white or metallic acrylic paint** and wipe the face clean.
- **Finish the back.** Stick **cork or felt pads** on coaster backs to protect furniture and hide any rough underside.
- **Play to slate's strengths.** Photos and fine text look great on dark slate, so lean on them for plaques and memorial pieces ([engraving a plaque](../projects/engraving-a-plaque.md)).
- **Safety.** Keep your exhaust running and stay near the machine. See [ventilation and safety](../machines/ventilation-and-safety.md).

### Gear for slate coasters

- [8 Pieces Slate Coasters](https://www.amazon.com/dp/B08DTY24MP?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } — a blank slate coaster set for practice and product runs. As an Amazon Associate, I earn from qualifying purchases.

## Related reading

- [What you can laser](what-you-can-laser.md)
- [Finding your settings](starter-settings.md)
- [Laser types](../machines/laser-types.md)
- [Focus and alignment](../machines/focus-and-alignment.md)
- [Engraving a plaque](../projects/engraving-a-plaque.md)
- [Laser buying guide](../buying-guides/laser-buying-guide.md) · [Gear I use](../buying-guides/gear-we-use.md)

## Sources and further reading

- Trotec: [Slate coaster project](https://www.troteclaser.com/en-us/resources/laser-projects/slate-coaster)
- Voxelase: [Laser engraving stone and slate](https://voxelase.com/blog/laser-engraving-stone-slate/)
- Zapcraft: [Laser engraving slate coasters with a diode laser](https://zapcraft.net/laser-engraving-slate-coasters-diode-laser/)
- The Makers Chest: [Laser engraving on slate](https://themakerschest.com/blogs/laser-engravers/laser-engraving-on-slate)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=engraving-slate){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=engraving-slate-hub)
</div>
