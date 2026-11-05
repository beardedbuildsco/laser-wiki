# Starter settings (power, speed, and test grids)

There is no universal “wood = 50% power” chart that works on every laser. Power delivery, lens, focus, air assist, material brand, and even humidity change results. What *does* transfer between shops is a **method**: understand the controls, then build a test grid on your machine.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Test grids are easier when you understand LightBurn layers — Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=starter-settings)
</div>

This page teaches the method. It does **not** invent numeric recipes for specific models.

!!! tip "Rule of thumb"
    If a settings chart did not come from **your** machine, treat it as a rumor until a scrap test says otherwise.

## The controls that matter

### Power

How hard the laser is driven, usually as a percentage in LightBurn (or equivalent). Higher power deposits more energy per unit time — deeper engraves, more chance of flame, more charring.

### Speed

How fast the head (or galvo pattern) moves. Faster = less energy per distance. Cutting often wants slower speeds than light engraving; exact numbers are machine-specific.

### Interval / LPI (lines per inch) / line interval

For image and fill engraving, this is how tightly scan lines are packed. Denser lines can look darker and smoother but take longer and put more heat into the part. LightBurn exposes this as interval (distance between lines) or related DPI/LPI concepts depending on mode.

### Passes

Multiple passes at moderate settings often beat one punishing pass — especially for cutting depth or reducing scorch. More passes mean more time and more heat buildup; let the material cool if you see flare-ups.

### Air assist

A stream of air at the cut helps clear smoke, reduce flame, and improve edge quality. Strength and nozzle aim matter as much as “on/off.”

### Focus

Out-of-focus beams waste energy and widen the kerf. See [focus and alignment](../machines/focus-and-alignment.md).

## A reliable test-grid workflow

1. **Square and focus** the machine. Confirm origin and units in LightBurn.
2. Cut or engrave a **grid of small squares or text samples** on scrap from the same material lot you will sell.
3. Vary **one axis at a time** when you are learning (for example, rows = power, columns = speed). Advanced users sometimes vary interval on a second grid.
4. Label every cell in the artwork itself (power/speed printed in tiny text) so the physical scrap remains a reference card.
5. Pick the cell that meets your quality bar: contrast, depth, char, cycle time, and no flame.
6. Save the winner as a **named Material Library** entry in LightBurn for that material + thickness + lens.
7. Re-test when you change lens, tube/diode module, or material supplier.

!!! warning "Fire watch"
    Test grids still catch fire. Stay at the machine. Keep airflow on. Have an extinguisher rated for your materials within reach.

## What “good” looks like (qualitative)

| Goal | Prefer | Avoid |
| --- | --- | --- |
| Clean wood engrave | Readable contrast, minimal deep char | Fuzzy wide lines from bad focus |
| Acrylic cut | Separates fully, acceptable edge | Endless flame, melted blobs |
| Coated tumbler mark | Coating removed cleanly | Burned through coating into unwanted substrate damage |
| Slate | Bright mark without crumbling | Cracks from excess heat |

## Image engraving vs vector cutting

- **Vector cut/score:** follows paths; power/speed/passes dominate.
- **Fill engrave:** scans an area; interval/LPI and scan angle join power/speed.
- **Photos:** often need dithering modes, careful contrast adjustment, and lower heat — practice on scrap.

Learn the LightBurn side in [LightBurn basics](../lightburn/lightburn-basics.md).


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=starter-settings) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## TODO: Brandt’s verified settings tables

Fill these only with numbers you have tested on named machines. Until then, leave cells blank or mark “unverified.”

### Wood / plywood (TODO — Brandt tested)

| Machine | Material | Thickness | Lens | Power | Speed | Interval | Passes | Air | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

### Acrylic (TODO — Brandt tested)

| Machine | Material | Thickness | Lens | Power | Speed | Interval | Passes | Air | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

### Leather / slate / anodized aluminum (TODO — Brandt tested)

| Machine | Material | Job type | Power | Speed | Interval | Passes | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | Engrave | TODO | TODO | TODO | TODO | TODO |


## Saving settings so you do not lose them

- Use LightBurn’s **Material Library** with clear names: `Birch 3mm cut — MachineA — 2in lens`.
- Note date and material brand in the library notes field.
- When a job fails after a hardware change, assume settings need a re-grid — do not blame the file first.

## Related reading

- [What you can laser](what-you-can-laser.md)
- [Focus and alignment](../machines/focus-and-alignment.md)
- [Common LightBurn errors](../troubleshooting/common-lightburn-errors.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=starter-settings){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=starter-settings-hub)
</div>
