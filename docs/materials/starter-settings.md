---
description: "How to find laser settings with a test grid instead of copying a chart, for diode, CO2, fiber, and UV machines in a real shop."
---

# Finding your settings (test grids and method)

There is no universal “wood = 50% power” chart that works on every laser. Power delivery, lens, focus, air assist, material brand, and even humidity change results. And with this many machines, wattages, lenses, and materials, any list of numbers would be out of date before you finished reading it. What *does* transfer between shops, and stays useful forever, is a **method**: understand the controls, then build a test grid on your machine.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Test grids are easier when you understand LightBurn layers — Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=starter-settings)
</div>

This page teaches the method. It does **not** list numeric recipes for specific models, on purpose. Your own tested numbers, saved in your own LightBurn Material Library, beat anyone else's chart.

!!! tip "Rule of thumb"
    If a settings chart did not come from **your** machine, treat it as a rumor until a scrap test says otherwise.

## Where to start: seeds, not answers

Before you burn anything, get a rough starting range. Good places to look:

- **Your manufacturer's published parameters** for your machine, wattage, and lens. (For OneLaser owners, the [X-Series](../reference/onelaser-x-series-setup.md) and [Cobra](../reference/onelaser-cobra-setup.md) setup guides link to OneLaser's starting-parameter pages.)
- **Community libraries and forum threads** for your laser type and wattage (diode, CO₂, fiber, or UV).
- **The material pages on this wiki**, like [what you can laser](what-you-can-laser.md), [engraving slate](engraving-slate.md), and [fiber metal marking](fiber-metal-marking.md), for what a good result looks like and what to watch for.

Treat every number you find as a **seed for your first grid**. It tells you roughly where to look. Your test grid tells you the answer.

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

1. **Focus first.** Square and focus the machine before anything else, since a bad focus ruins every result below it. See [focus and alignment](../machines/focus-and-alignment.md). Confirm origin and units in LightBurn too.
2. **Turn on air assist** the way you plan to run the real job. Changing air partway through makes your results meaningless.
3. **Grab scrap from the same batch** you will actually sell. Plywood, slate, acrylic, and leather all vary from batch to batch and supplier to supplier.
4. **Build a grid in LightBurn.** Use the **Material Test** tool (Laser Tools menu) to make a grid of small squares or text samples. For a first grid, vary **speed against power**.
5. **Change one variable at a time.** Once speed and power look close, run a second, smaller grid that varies only **interval / LPI**. If you need depth or a cleaner cut, run a third grid that varies **passes**. If you change three things at once, you will not know which one helped.
6. **Label every cell** in the artwork itself (power and speed printed in tiny text) so the physical scrap remains a reference card.
7. **Read the result** (see below), pick the cell that meets your quality bar, then narrow in with a tighter grid around it.
8. **Record it** in your Material Library (see below).

!!! warning "Fire watch"
    Test grids still catch fire. Stay at the machine. Keep airflow on. Have an extinguisher rated for your materials within reach.

## Reading your results

| What you see | What it usually means | What to try |
| --- | --- | --- |
| Too light, faint, or patchy | Not enough energy reaching the material, or focus is off | Re-check focus, then slow down or add power. Tighten the interval a bit. |
| Charring, heavy soot, dark halos | Too much heat, or weak air assist | Speed up, lower power, check air. Cut with a pass or two at moderate settings. |
| Melting, glassy, shiny, or raised marks | Way too much heat for that material | Go faster before you cut power. Slate, acrylic, and coated items are all prone to this. |
| Fuzzy or wide lines | Out of focus | Re-focus and re-test. |
| Not deep enough | Not enough total energy on the same spot | Add passes at moderate settings before pushing one pass harder. |
| Cut doesn't go through | Too fast, too little power, or focus is off | Slow down, check focus, or add a pass. |
| Cut goes through but the edges burn | Too slow or too hot | Speed up, add air, or use two faster passes. |

## Fill vs line vs cut

Each LightBurn layer mode needs its own dial-in, so a good fill setting says nothing about your line or cut settings.

- **Fill:** scans an area. Tune speed, power, and interval/LPI, and think about scan angle.
- **Line (score):** follows a path without cutting through. Tune speed, power, and passes.
- **Cut:** the same path, but it needs enough energy to separate the piece. Tune speed, power, and passes together, plus air.

Run a separate grid for each mode, on each material, instead of assuming one carries over.

## Recording what works

Once you find a winner, save it right away. A setting you do not write down is a setting you will have to find again.

- Save it as an entry in LightBurn's **Material Library**, with a clear name: `Birch 3mm cut — MachineA — 2in lens`.
- Use the **notes field** to record: **machine, wattage, lens, material, thickness, material brand or batch, air assist setting, and the date**.
- Photograph the winning scrap next to a handwritten note of the settings. It makes a handy reference card.
- Keep your grid scraps in a box labeled by material.

## When to retest

Your saved numbers describe a machine and material that existed on a given day. Re-run a grid when:

- You install a **new tube, diode module, or fiber source**, or the old one has aged noticeably
- You change **lenses**, or have just cleaned or replaced optics and mirrors
- You start a **new material batch or supplier**, even for the same material
- You change your **air assist**, nozzle, or exhaust setup
- You move to a **different machine**, or re-level the bed or re-do focus
- A job that used to work suddenly does not

When a job fails after a hardware change, assume settings need a re-grid. Do not blame the file first.

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

## Related reading

- [What you can laser](what-you-can-laser.md)
- [Engraving slate](engraving-slate.md) — a worked example of this method
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
