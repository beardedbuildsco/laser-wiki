# CO₂ common problems

When a CO₂ cabinet that “used to cut fine” starts struggling, work the physical stack before rewriting every LightBurn layer. Forum threads across LightBurn and Sawmill Creek repeat the same shortlist.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Diagnose hardware first — then sharpen LightBurn skill with Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=co2-common-problems)
</div>


## Symptom → first checks

| Symptom | Check first |
| --- | --- |
| Cuts weaken after 10–20 minutes | Coolant temperature rising, chiller not holding, tube current dropping with heat |
| Sudden weak cuts after a crash / move | Alignment, loose mirror/lens rings |
| Gradual fade over weeks | Dirty lens/mirrors, failing exhaust allowing more smoke on optics |
| Tube ran with little/no water | Assume tube damage; verify TEM00 spot at M1; budget for replacement |
| Cuts OK at mid-bed, weak in a corner | Alignment at near vs far positions |
| mA meter much lower than historical | LPS, PWM path, tube health — measure before guessing |

## Power that fades mid-session

Operators commonly see higher effective power on a cold tube that settles as water temperature rises. Aim for a **stable** chiller setpoint (many report ~18–20 °C) and confirm the chiller actually cools under load — a display that says “cool” while the tube warms is a classic trap. Ice-bucket cooling can “prove” temperature sensitivity but creates swings that ruin consistency.

If a new tube did not fix fade-out, the next community suspects are **laser power supply** health and wiring — not another Material Library entry.

## “Not cutting like last month”

A calm order used often on the LightBurn forum:

1. Pulse a low-power target at **M1** — look for a clean TEM00-style spot (not a ring/blotch).
2. Inspect and clean mirrors + lens; confirm lock rings.
3. Verify focus and air assist.
4. Re-check alignment centers.
5. Only then chase controller/LightBurn oddities (for example Ruida min-power behavior at very low speeds).


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=co2-common-problems) walks the tools and workflows step by step — lifetime access, one clear path.
</div>


## Water protect exists for a reason

Running jobs after unnoticed coolant loss is a recurring tube autopsy. Wire and respect water-protect / flow interlocks. A saved tube is cheaper than a replacement Reci-class tube and a week of downtime.

## Related reading

- [CO₂ tube and mirror maintenance](../machines/co2-tube-and-mirror-maintenance.md)
- [Focus and alignment](../machines/focus-and-alignment.md)
- [Common LightBurn errors](common-lightburn-errors.md)

## Sources and further reading

- LightBurn forum: [CO₂ laser losing power](https://forum.lightburnsoftware.com/t/co2-laser-losing-power/185920)
- LightBurn forum: [Cut power declining after no cooling](https://forum.lightburnsoftware.com/t/50w-co2-laser-cut-power-seem-to-continue-declining-after-a-job-with-no-cooling/73022)
- LightBurn forum: [CO₂ chiller / temperature consistency](https://forum.lightburnsoftware.com/t/co2-laser-chiller/190618)
- LightBurn forum: [Laser not cutting like a month ago](https://forum.lightburnsoftware.com/t/laser-not-cutting-anymore-like-it-did-a-month-ago/100142)
- Sawmill Creek: [Overheated tube?](https://sawmillcreek.org/threads/overheated-tube.234497/)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=co2-common-problems){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=co2-common-problems-hub)
</div>

