# Winterizing your laser shop

A cold shop is hard on a laser, and a frozen glass tube is the expensive way to learn that. Water expands when it turns to ice, and a CO₂ glass tube's cooling jacket has nowhere for that expansion to go. The usual result is a cracked tube, and OneLaser and Thunder say freeze damage is not covered by warranty.

This page is practical guidance for small shops. Makers do not all publish the same temperature or mix numbers, so treat your tube, chiller, and machine manuals as the final word. Where sources disagree, I give the range and tell you to check yours.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [A winter-ready shop still needs solid LightBurn skills — see Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=winterization)
</div>

## Why cold matters, by laser type

[Laser types](laser-types.md) are diode, CO₂, fiber, and UV. Galvo and gantry are motion systems, not types — a fiber marker can be a galvo, and a CO₂ cabinet is usually a gantry, but the winter risk follows the *source* and how it is cooled.

### CO₂ glass tubes (highest risk)

These DC-excited glass tubes are water-cooled. If the coolant freezes in the jacket, the glass can split. That is a common winter failure on machines like the [OneLaser XT](../reference/onelaser-x-series-setup.md), [Cobra](../reference/onelaser-cobra-setup.md), and [Hydra Hybrid](../reference/onelaser-hydra-setup.md).

Even if the coolant never quite freezes, a tube that is far too cold, or that you fire while it is still warming up, is under thermal stress. Keep the coolant circulating and in the range your tube maker specifies before you fire.

### CO₂ RF tubes

Many RF metal tubes are air-cooled — the [OneLaser XRF](../reference/onelaser-x-series-setup.md) and Hydra Pro are good examples — so there is no water jacket to crack. Some RF sources are still water-cooled; those follow the same freeze and drain rules as any other chilled laser.

The remaining winter issues are condensation on the source and optics, cold electronics, and stiff mechanics. Air-cooled RF still needs a room in the maker's operating range.

### Diode

Desktop diodes are air-cooled, so there's no coolant to freeze. The risks are more ordinary: condensation on the laser window and lens when a cold machine meets warm, humid air; thick lubricant on the rails; and, on battery-powered or portable units, charging or storing a cold battery outside the maker's temperature range.

### Fiber and UV

Fiber markers in the hobby and small-shop range are air-cooled, so like diodes there's no coolant to freeze. They mainly need a warm, dry start and no condensation on the lens. (Water-cooled fiber shows up on industrial cutting lasers, typically a kilowatt and up, which are outside the scope of this wiki.)

Some UV markers use a small water chiller. If yours does, follow the UV source maker's coolant spec, which may not be the same mix a glass CO₂ tube uses, plus the dew-point rule below.

!!! warning "Follow the source manual on UV coolant"
    SPT, for its RF lasers, says not to substitute ethanol for a dedicated antifreeze. Do not assume a CO₂ glass-tube recipe is safe in a UV chiller.

## Coolant: distilled water, antifreeze, and what not to use

### Start with distilled or purified water

Clean, low-mineral water is the default coolant for glass-tube CO₂ machines. OneLaser, Thunder, TEYU (the CW-5000 / CW-5200 chiller maker), RECI, and SPT all point to distilled, purified, or otherwise softened water for everyday use. Distilled water stays low in electrical conductivity, which matters because a DC glass tube is running tens of thousands of volts through the same assembly as the cooling jacket. Tap water brings minerals, scale, and higher conductivity.

Change the water on a schedule. Several makers suggest every two to three months at room temperature; your chiller or tube manual may be tighter or looser.

### When freeze protection is needed

Makers do not draw the line in the same place:

- OneLaser's [approved antifreeze guide](https://wiki.1laser.com/en/accessories/approved-antifreeze) says to stay with pure distilled or purified water above **5 °C (41 °F)**, and to add an approved antifreeze as winter arrives.
- OneLaser's [XT water-tank guide](https://wiki.1laser.com/en/x-series/how-to-fill-water-tanks) says to add approved antifreeze when the indoor temperature drops below **10 °C (50 °F)**.
- Trotec wants the *room* at **15–25 °C (59–77 °F)** and recommends heating the shop so it stays in that range. Other makers publish slightly wider room ranges, often **15–27 °C** or **15–35 °C** — check your manual.
- TEYU's CW-5000 / CW-5200 manual says that if a chiller will be stored with water below **2 °C**, add antifreeze (no more than 30%). For a long shutdown in freezing conditions, drain it and blow the lines out.

Use your machine and chiller manuals. If the shop can drop near freezing overnight, you need a plan before that night happens.

### What to use (and the mix)

The product most often named by laser and tube makers is **Clariant Antifrogen** — **N** (industrial) or **L** (the food-industry option). OneLaser, Thunder, and SPT recommend it. Thunder also notes that TEYU and RECI point to Clariant in their ecosystem.

OneLaser and Thunder publish this mixing chart for Antifrogen and distilled water:

| Antifreeze : distilled water | Protection down to (OneLaser / Thunder) |
| --- | --- |
| 3 : 7 | −12 to −15 °C (10 to 5 °F) |
| 4 : 6 | −22 to −25 °C (−8 to −13 °F) |
| 5 : 5 | −32 to −35 °C (−25 to −31 °F) |
| 6 : 4 | −42 to −45 °C (−43 to −49 °F) |

A **3 : 7** mix (about 30% antifreeze) is the usual starting point those makers recommend. Two important disagreements:

- **SPT** quotes the same 3 : 7 mix as protecting to about **−20 °C**, which is colder than OneLaser and Thunder claim. Treat the table as a guide and confirm against the Antifrogen datasheet and your lowest expected shop temperature.
- **TEYU** tells chiller owners to keep antifreeze **under about 30%** (not stronger than 3 : 7) because a richer mix can cause pipe blockages and corrosion. **Trotec** is stricter still: its water-cooled manuals say to use distilled water plus Trotec's own water-treatment kit and **not** to add glycol.

!!! note "Check the manual before you pick a ratio"
    If OneLaser, Thunder, or SPT is your machine or tube maker, 3 : 7 is the documented baseline. If you run a TEYU chiller, do not exceed that chiller's concentration limit. If you run Trotec, do not add glycol at all — heat the room or drain the circuit instead.

**How to mix it** (OneLaser, Thunder):

1. Power off the laser and the chiller.
2. Drain the old water and clean scale or slime out of the tank.
3. Add the **water first**, then the antifreeze.
4. Fill to the high end of the chiller's green level zone.
5. Run the chiller alone for **5–10 minutes** to mix, then start work.

Do not mix brands or types. Antifreeze packages differ, and mixing them can cause precipitation or bubbles. Replace the mix on a regular schedule (often every 2–3 months). When the freeze risk is over, drain it, flush with distilled or purified water, and go back to plain distilled water. SPT is blunt: antifreeze is not a year-round substitute for purified water.

On my Hydra I have used about a **20%** propylene glycol mix topped off with distilled water, and I hold the chiller around **18 °C**. Details are on the [Hydra setup page](../reference/onelaser-hydra-setup.md).

### RV antifreeze, used carefully

OneLaser and Thunder allow a standard **RV / marine antifreeze** (they point to a pink Super Tech product, or an equivalent) as a budget option. Their rule is: use it **undiluted, only when necessary**, then flush and refill with distilled water as soon as freezing is no longer a concern. Do not assume every RV jug is the same chemistry. If your machine maker names a product, use that one or an equivalent they approve.

!!! tip "Check whether the jug is already diluted"
    The RV product OneLaser and Thunder point to is meant to be used **straight from the bottle**, not mixed with water. Read the label: if it says ready-to-use, premixed, or "do not dilute," pour it in undiluted. Diluting a premix weakens its freeze protection. Only a jug sold as a concentrate gets mixed, and then only to the ratio on the label or in your machine maker's guidance.

### Do not use automotive engine coolant

Car and truck antifreeze is mixed for engines, not laser tubes. Thunder recommends against it: automotive ethylene-glycol coolant can have high conductivity and can contaminate or degrade parts of a laser cooling loop. OneLaser's Cobra manual says not to use generic coolant or antifreeze, because they may leave corrosive residues and solidify in the hoses and piping. LightBurn forum threads report the same core risk: engine-package additives can make the coolant conductive enough that high voltage finds its way into the water loop.

Use a laser-approved heat-transfer fluid, the mix your maker specifies, or a maker-approved RV product — not the jug from the auto aisle.

!!! danger "Antifreeze is not a set-and-forget plan"
    Thunder notes that tubes can still crack even with antifreeze in the system, and OneLaser, Thunder, and SPT all say that if the machine will sit unused for a long stretch, you should **drain** the tube, chiller, and lines. A power outage on a sub-freezing night will also stop a 24/7 circulating pump or tank heater.

### Other ways shops keep water from freezing

These are supplements, not replacements for a drain plan if the shop can go below freezing with the power out:

- **Heat the room** so it stays in the machine's operating range. Trotec's water-cooled manuals forbid glycol, so keeping the room in range is their path.
- **Keep the chiller circulating** in deep cold, if the maker allows it and the power is reliable. TEYU suggests 24/7 operation below 0 °C when you can. SPT, for some RF sources, suggests a temporary low circulating setpoint around 5–10 °C in winter so the water keeps moving — only if that source manual says so, and watch the dew point.
- **An inline or tank water heater**, set **at least 2 °C below** the chiller setpoint so the two are not fighting (OneLaser and Thunder). The heater does nothing if the power fails.

## Draining a glass tube and chiller for unheated storage

If the machine will sit in an unheated space, or you expect a long winter power cut, drain it completely. RECI's glass-tube manuals require the coolant to be emptied for storage or transport. OneLaser and Thunder say the same for extended idle time, and they will not warranty a tube that froze because it was left full.

This follows TEYU's CW-5200 winter storage steps and Thunder's tube-and-chiller drain procedure. Use low pressure. You are pushing leftover water out of hoses and the tube jacket, not pressure-testing the glass.

1. **Power off** the laser and the chiller. Unplug them if you can.
2. Put a bucket under the chiller. Open the **drain valve** or drain port (on many CW-5000 / CW-5200 units it is on the back or bottom) and empty the tank.
3. **Disconnect the inlet and outlet hoses** from the machine and the chiller. Drain them into the bucket. Open the chiller fill cap so the tank can finish draining.
4. **Raise the machine's outlet hose** so gravity can pull water out of the tube jacket. You can also lower the free end into the bucket.
5. **Blow the lines and the tube jacket out with low-pressure air.** Thunder says to blow gently through the hose, or use low-pressure air, to push coolant out of low spots. TEYU says to dry the chiller's internal piping with a compressed-air gun after you drain it, and **not** to blow into the inlet/outlet joints that carry a yellow warning tag — those fittings can be damaged.
6. **Look at the glass jacket.** If you still see water, repeat the low-pressure blow until it runs clear and the jacket looks empty. A little mist on the glass should dry; standing water should not stay.
7. **Built-in tanks**, such as the [OneLaser XT](../reference/onelaser-x-series-setup.md) internal tank, get the same treatment: drain the tank and blow the tube and lines until they are empty.
8. Leave the drain open or reseal the ports as your chiller manual specifies. Coil the empty hoses so they are not holding a trap of water.

!!! warning "Gentle air only"
    High-pressure air into a glass cooling jacket is a good way to turn a drain job into a broken tube. Keep the pressure low, and stop when the water is out.

When you recommission in the spring, refill with distilled or purified water (plus approved antifreeze only if the shop still needs it), bleed the bubbles, check for leaks, and circulate before you fire. See the [Hydra](../reference/onelaser-hydra-setup.md), [X-Series](../reference/onelaser-x-series-setup.md), and [Cobra](../reference/onelaser-cobra-setup.md) setup pages for fill and hookup details.

## Cold-start routine

Do not walk into a frozen shop, hit the key, and send a job. Warm first, then fire.

1. **Bring the room up slowly.** Trotec's winter advice is to warm the space before you use the laser, and not to park the machine against the heater — the fans can ingest hot air and overheat the source.
2. **Let the machine itself reach room temperature.** If it sat in the cold, or you just rolled a cold diode or fiber unit into a warm room, wait until the chassis and optics are no longer cold to the touch. Trotec says that after a large temperature swing, the system must return to room temperature before commissioning. xTool's winter guidance is the same idea: wait, then inspect for fogging.
3. **Confirm the coolant is liquid, at a sensible temperature, and flowing.** Published coolant ranges are not identical: OneLaser and Thunder commonly want **15–25 °C** water; SPT's glass-tube guidance is **15–30 °C**; RECI's glass-tube manuals allow a wider **10–50 °C**. A lot of shops, including mine, settle near **18–20 °C** for everyday glass-tube work. Trotec says a water-cooled machine should not be switched on if the coolant is below **15 °C**. If the display says the water is in range but you have no flow, fix that first — see [CO₂ tube and mirror maintenance](co2-tube-and-mirror-maintenance.md).
4. **Look for condensation** on the tube, the high-voltage end, the lens, and any windows. If you see beads or fog, wait until it is dry. Do not fire through a wet optic or a sweating HV connection.
5. **Start the chiller first**, let it circulate and settle, then power the laser. On a Hydra Hybrid, the chiller should already be running before the key switch. Jog the axes, listen for binding, and check [focus and alignment](focus-and-alignment.md) if the first test burn looks off.

Room-temperature specs also vary: OneLaser's X-Series and Hydra manuals list **15–35 °C (59–95 °F)**; OneLaser's freeze-mitigation page and Thunder often quote a tighter storage/operating band around **15–27 °C (60–80 °F)**; Trotec wants **15–25 °C**. Stay inside *your* manual, not the widest number on this page.

## Condensation and dew point

Colder water is not always better. If the coolant is below the **dew point** of the room air, moisture will condense on the tube, fittings, and optics.

The dew point is the temperature at which the air in the shop starts dropping its moisture as liquid water. Cool any surface below that, and it sweats. This is a classic problem when a refrigerated chiller is set much colder than the room, and it also happens when you carry a cold machine into warm, humid air.

RECI's RF manuals say the coolant must stay above the dew point. SPT's glass-tube manual warns that coolant that's too cold can cause condensation on the tube wall and water jacket. BRM's chiller guidance is the clearest practical rule: **keep the cooling water above the room dew point**, and only then as cool as the source likes. BRM also warns that condensation on a high-voltage glass tube is not cosmetic: it can create a path for arcing.

**A simple check:**

1. Put a thermometer-hygrometer next to the machine.
2. Read room temperature and relative humidity, then look up the dew point (many hygrometers display it).
3. Set the chiller **above** that number, with a little margin, while still staying inside the tube maker's coolant range.
4. Recheck when the weather or the shop humidity changes. A setpoint that was safe on a dry winter day can start sweating the tube in a damp week.

If you would have to run the water warmer than the source allows just to stay above the dew point, dehumidify or condition the room instead of chasing an unsafe chiller setting.

## Mechanical issues: grease, rails, and belts

Trotec's winter FAQ is direct: greases and oils can harden in the cold and affect the mechanical parts. Stiff rails and sticky bearings make the motion system work harder. On a stepper machine that can show up as missed steps, stalled moves, or a jog that sounds unhappy. On a servo machine you may get following errors.

Before the first job on a cold morning:

- Let the machine warm with the room, then jog slowly through the travel and listen.
- Check that belts are on their pulleys and that the gantry moves freely. xTool's winter maintenance notes say to inspect belts and motion, and to add lubricant only where that model's guide says to.
- Do not "fix" a cold, tight machine by cranking belt tension or flooding the rails with a random oil. Warm it up, clean off gummy lube if needed, and relube with what the manufacturer specifies.

If cuts look shifted or the head binds after a cold night, stop and sort the motion before you chase new LightBurn settings.

## Air assist and compressor moisture

Compressed air always carries some water. In winter it gets more obvious: warm, wet air leaves the compressor, hits a cold hose or filter bowl, and dumps liquid water. That water can rust fittings, and it can spray out the nozzle onto the lens and the work.

Thunder notes that water in the air stream can ruin a lens, and that an undersized compressor runs hotter and makes more moisture.

- Drain the compressor tank regularly, especially at the end of the day.
- Use a **moisture trap / filter** at the machine, and actually empty the bowl. Thunder lists moisture traps and, if you still get water, a refrigerated dryer for general shop air or a desiccant dryer when you need drier air.
- Keep the compressor intake in the driest air you reasonably can.

A little hiss of water onto a lens looks like a mystery "weak laser" until you check the optic. See [focus and alignment](focus-and-alignment.md) if the beam suddenly goes soft after you switched to compressor assist.

## Ventilation in winter

Do not seal the shop just because it is cold. You still have to move fumes out while the laser is running. See [ventilation and safety](ventilation-and-safety.md).

What *does* change in winter:

- **When you are cutting or engraving, exhaust still goes outside**, and you still need make-up air. A plastic-wrapped, airtight shop will fill with smoke and starve the fan.
- **When the machine is idle**, close a blast gate or disconnect the outdoor duct so you are not pouring arctic air through the cabinet all night. Thunder says to disconnect the exhaust or close it with a blast gate; OneLaser says to disconnect the exhaust duct so cold outdoor air cannot enter the system. Thunder also suggests opening the main lid and the tube-box door while the machine sits idle, so the inside of the cabinet can stay at room temperature — that only helps if the room itself is being kept warm.
- **Space heaters take a lot of current.** xTool notes that a typical 1,500 W heater draws about 12.5 A at 120 V, already a heavy load on a 15 A circuit. Do not share that circuit casually with the laser, chiller, and exhaust if you are going to trip the breaker mid-job.

## Winter checklist

Print this section and hang it near the machine.

**Before the first hard freeze**

- Know whether your source is water-cooled or air-cooled
- Read the coolant and ambient range in your tube, chiller, and machine manuals
- Decide your plan: heat the room, approved antifreeze, full drain, or a combination
- If you are adding antifreeze, drain, clean, mix as specified, and circulate 5–10 minutes
- Confirm the chiller flow / water-protect interlock still works
- Put a moisture trap on compressor air assist and test that the bowl drains
- Add a blast gate (or a plan to disconnect the duct) for overnight

**If the shop can freeze and the machine will sit unused**

- Power off the laser and chiller
- Drain the chiller, hoses, and tube jacket
- Blow the lines out with low-pressure air
- Confirm the glass jacket is empty
- Do not rely on antifreeze alone for long storage

**Cold-morning startup**

- Warm the room; keep the heater from blowing directly into the machine's intakes
- Wait until the machine and coolant are at a normal working temperature
- Confirm coolant is liquid, in range, and flowing
- Check the tube, HV end, and optics for condensation; wait until dry
- Jog the axes and listen for stiff grease or missed steps
- Start the chiller, then the laser, then a small test burn

**When the freeze risk is over**

- Drain the antifreeze mix
- Flush with distilled or purified water
- Refill with distilled or purified water and get the bubbles out
- Put the chiller back on its normal setpoint and recheck the dew point

<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=winterization) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## Related reading

- [Laser types](laser-types.md)
- [Ventilation and safety](ventilation-and-safety.md)
- [Focus and alignment](focus-and-alignment.md)
- [CO₂ tube and mirror maintenance](co2-tube-and-mirror-maintenance.md)
- [OneLaser Hydra Gen2 setup](../reference/onelaser-hydra-setup.md)
- [OneLaser X-Series setup](../reference/onelaser-x-series-setup.md)
- [OneLaser Cobra setup](../reference/onelaser-cobra-setup.md)
- [CO₂ common problems](../troubleshooting/co2-common-problems.md)

## Sources and further reading

- OneLaser Wiki: [Approved antifreeze](https://wiki.1laser.com/en/accessories/approved-antifreeze)
- OneLaser Wiki: [Laser cooling, temperature, and freeze mitigation](https://wiki.1laser.com/en/x-series/laser-cooling-temperature-freeze-mitigation) (X-Series)
- OneLaser Wiki: [How to fill water tanks for the XT](https://wiki.1laser.com/en/x-series/how-to-fill-water-tanks) (the 10 °C antifreeze threshold)
- OneLaser Wiki: [Cobra user's manual](https://wiki.1laser.com/onelaser-cobra/user-manual)
- OneLaser: [Best antifreeze for laser engraver and cutter](https://www.1laser.com/blogs/topic/antifreeze-for-laser-engraver-cutter)
- Thunder Laser USA: [Approved antifreeze](https://www.thunderlaserusa.com/knowledge/thunder-laser-approved-antifreeze)
- Thunder Laser USA: [Cooling, temperature, and freeze mitigation](https://www.thunderlaserusa.com/knowledge/thunder-laser-cooling-temperature-freeze-mitigation)
- Thunder Laser USA: [Laser water coolants and additives](https://www.thunderlaserusa.com/knowledge/laser-water-coolants-additives)
- Thunder Laser USA: [Mitigating condensate in pneumatic air-assist systems](https://www.thunderlaserusa.com/knowledge/mitigating-excessive-condensate-in-pneumatic-air-assist-systems)
- Thunder Laser Canada: [Winterize your laser cutter with antifreeze](https://www.thunderlaser.ca/winterize-your-laser-cutter-with-anti-freeze/)
- TEYU S&A: [Winter maintenance guidelines for TEYU water chillers](https://www.teyuchiller.com/winter-maintenance-guidelines-for-teyu-water-chillers.html)
- TEYU S&A: [How to drain a CW-5200](https://www.teyuchiller.com/how-to-drain-down-s-a-teyu-small-water-chiller-cw-5200_n1881.html)
- TEYU S&A: CW-5000/5200 Industrial Chiller User Manual (TY-JS-220209-003) — 2 °C storage threshold and 30% antifreeze cap
- Trotec: [Optimal laser conditions](https://www.troteclaser.com/en/learn-support/faqs/perfect-laser-conditions)
- Trotec: [Looking after and recommissioning your laser after a break](https://www.troteclaser.com/en/recommissioning-your-laser-after-a-break)
- Trotec: [Speedy 400 operating manual](https://www.troteclaser.com/static/pdf/speedy-400/8070_Speedy_400_Operating_manual_EN.pdf) (no glycol; return to room temperature after large swings)
- RECI: [CO₂ laser tube Model T instruction manual](https://www.reci-laser.com/wp-content/uploads/2022/03/CO2-laser-tube-manual-T-series.pdf) (coolant is pure water, 10–50 °C; drain for storage)
- SPT: [How to protect your laser tube from frozen water in winter](https://www.sptlaser.net/solution/37)
- SPT: [Tips for antifreezing of RF lasers](https://www.sptlaser.net/newsdetail/55)
- BRM Lasers: [What temperature should the water chiller be set to?](https://support.brmlasers.com/en/peripherals/water-chiller/what-temperature-should-the-water-chiller-be-set-to)
- LightBurn forum: [Laser coolant freezing and breaking tube](https://forum.lightburnsoftware.com/t/laser-coolant-freezing-and-breaking-tube/126161)
- LightBurn forum: [Running a CO₂ laser in winter / freezing temperatures](https://forum.lightburnsoftware.com/t/running-a-co2-laser-in-the-winter-freezing-temperatures/157136)
- xTool: [Laser machine maintenance in the winter](https://www.xtool.com/blogs/xtool-academy/laser-maintenance-in-winter) (diode warm-up, condensation, and motion checks)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=winterization){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=winterization-hub)
</div>
