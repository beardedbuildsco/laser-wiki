---
title: OneLaser Cobra Setup Guide — reference
---

# OneLaser Cobra (8 / 10 / 14) Setup Guide

!!! warning "DRAFT — internal reference, not published"
    OneLaser-specific companion to the [OMTech setup guide (reference)](omtech-setup-guide.md). Specs come from OneLaser's official Cobra product pages and the "Cobra Model Comparison & Specs" chart, captured Nov 14, 2026. **OneLaser has not published a Cobra user manual**: its user-manual page lists only the X Series, Hydra and VertiGo. Anything not published is marked **Unknown**.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [New Cobra owner? Master LightBurn takes you from test card to paid jobs.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-cobra-setup)
</div>

Cobra is OneLaser's **glass-tube CO₂** cabinet laser on a gantry. Of the three OneLaser lines, it's the closest match to the OMTech machines in the original guide. Almost every step applies, including the water chiller.

Models: [Cobra 8 (90W)](https://www.1laser.com/products/cobra-8-90w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Cobra 10 (100W)](https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Cobra 14 (130W)](https://www.1laser.com/products/cobra-14-130w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

## At a glance

| Spec | Cobra 8 | Cobra 10 | Cobra 14 |
|---|---|---|---|
| Glass CO₂ tube | 90W | 100W | 130W |
| Work area | 31.50″ × 19.69″ (800 × 500 mm) | 39.37″ × 23.62″ (1,000 × 600 mm) | 55.12″ × 35.43″ (1,400 × 900 mm) |
| Z travel | 5.91″ (150 mm) | 11.02″ (280 mm) | 11.02″ (280 mm) |
| Machine size | 58″ × 41″ × 26″ | 66″ × 43″ × 37″ | 76″ × 54″ × 37″ |
| Weight | 396.8 lb (180 kg) | 595.3 lb (270 kg) | 771.6 lb (350 kg) |
| Cooling | Water cooling. **Chiller sold separately** ("Optional") | Same | Same |
| Exhaust fan | **Sold separately** ("Optional") | Same | Same |
| Air assist | Smart Dual Air-Assist (built in) | Same | Same |
| Power | 110V / 60Hz · **11 A** · 1,200 W | 110V / 60Hz · **11.5 A** · 1,250 W | 110V / 60Hz · **13.5 A** · 1,450 W |
| Speed / accel | Raster 1,200 mm/s · vector 1,500 mm/s · 2G | Same | Same |
| Pass-through door | 1.772″ (45 mm), front and rear | Same | Same |
| Control / software | GT5c touchscreen · 1 GB memory · Wi-Fi · LightBurn, RDWorks · Windows / macOS | Same | Same |
| Focus / vision | Autofocus · red dot · MagSwitch™ lens holder · 16 MP camera | Same | Same |
| Options | 3W/5W IR module for metal engraving (from $599) | Same | Same |
| Warranty | 1 yr mechanical and electrical; optical lenses not covered | Same | Same |

## How the OMTech guide maps to Cobra

| OMTech guide step | Cobra |
|---|---|
| 1. Install laser tube | **Unknown** whether the tube ships installed. Check on delivery. If you have to connect it, the guide's rule applies: never solder, tape or wire-cap the high-voltage leads. |
| 2. Water pump / chiller | **Applies fully.** Cobra is water-cooled and the chiller is sold separately, so budget for one. OneLaser sells the [OneLaser Chiller for Hydra & Cobra](https://www.1laser.com/products/onelaser-industrial-chiller-for-hydra-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } (1400W cooling, rated for one 150W or two 100W tubes, Constant and Intelligent modes) and a [CW-5200 chiller](https://www.1laser.com/products/cw-5200-industrial-water-chiller?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }. Hook-up follows the guide: chiller OUTLET → laser INLET, chiller INLET → laser OUTLET. Use **distilled water**, clamp every hose and purge bubbles. The guide's 18–21°C target is a good default. Whether the Cobra has a chiller alarm cable like the Hydra is **Unknown**. |
| 3. Inline fan | **Applies fully.** The exhaust fan is sold separately, so you **must** add one and vent it outdoors. Exhaust port diameter is **Unknown**; measure it on delivery before buying duct. Suggested fans: [AC Infinity CLOUDLINE S6](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } or [VIVOSUN 6″ 390 CFM](https://www.amazon.com/dp/B01DXYMJ94?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } with [6″ aluminum duct](https://www.amazon.com/dp/B0791V19H7?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }, if the port is 6″. These are Bearded Builds suggestions, not OneLaser specs. |
| 4. Lens orientation | Applies. The MagSwitch™ holder makes this tool-free. Curved side up. |
| 5. Bed level | Applies. The honeycomb is fixed and the Z axis is a ball screw. Check the corners. |
| 6. Power on | Mostly applies, but **chiller first, then laser**. Watch which corner it homes to so you can set the LightBurn origin. Key switch, mA dial and toggle layout are **Unknown** with no manual published. |
| 7. Mirror alignment | Applies, since it's a glass-tube, three-mirror machine. Run test cuts first and align only if needed. Ask OneLaser support before major adjustments to protect the warranty. |
| 8. Clean optics | Applies as written: 99% IPA, mirrors, lens and the tube's output window. |
| 9. Install LightBurn | Applies. Get the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial). OneLaser lists it as plug-and-play with LightBurn. |
| 10. Controller setup | Applies. Enter the bed size for your model (800 × 500, 1,000 × 600 or 1,400 × 900 mm). Wi-Fi is available. |
| 11. Save machine settings | Applies. |
| 12. Ramp test | Optional. Autofocus sets focus; a ramp test confirms it. |
| 13. Test cards | Applies as written. |

## Home/shop setup checklist

1. **Space and delivery:** 400–770 lb, so confirm doorway width and floor capacity. The Cobra 14 is 76″ × 54″. Leave room behind for the chiller and duct.
2. **Electrical:** the laser alone draws **11–13.5 A at 110V**, and the chiller adds more. Bearded Builds recommends a **dedicated 20 A circuit**, especially for the Cobra 10 and 14, since a 15 A circuit shared with the chiller will likely trip. This is our recommendation, not a OneLaser spec.
3. **Cooling:** a compressor chiller with distilled water. Plan for winter so it can't freeze. Related: [CO₂ tube and mirror maintenance](../machines/co2-tube-and-mirror-maintenance.md).
4. **Exhaust:** you have to supply the fan. Vent outdoors and keep the run short. See [Ventilation and safety](../machines/ventilation-and-safety.md).
5. **Air:** Smart Dual Air-Assist is built in. Its air source (internal pump or external compressor) is **Unknown**. The [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } is an add-on.
6. **Safety:** CO₂ extinguisher nearby, never run unattended. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).
7. **First jobs:** test cards, then save machine settings, then [Starter settings](../materials/starter-settings.md).

## Unknown / confirm with OneLaser

- Whether the tube ships installed. Not documented.
- Exhaust port size and required CFM.
- Whether the Cobra has a chiller alarm/flow interlock cable.
- Allowed ambient temperature and humidity, and the coolant temperature target.
- Laser safety class.
- The air source behind the built-in Smart Dual Air-Assist.
- A user manual. Not published; ask OneLaser for one.

<div class="bb-cta" markdown="1">
**Buying a Cobra?** Use our partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then learn LightBurn properly with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-cobra-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner, so OneLaser links include our referral and we may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.**
