---
title: OneLaser Hydra Gen2 Setup Guide — reference
---

# OneLaser Hydra Gen2 Setup Guide

!!! warning "DRAFT — internal reference, not published"
    OneLaser-specific companion to the [OMTech setup guide (reference)](omtech-setup-guide.md). Specs come from OneLaser's official Hydra Gen2 product pages and the **ONELASER Hydra Gen 2 User's Manual (rev. 251126)**, captured Nov 14, 2026. Anything not published by OneLaser is marked **Unknown**.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Running a Hydra? Master LightBurn shows you how to get production-speed results from it.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup)
</div>

Hydra Gen2 is OneLaser's floor-standing production line. It's a **CO₂** laser on a gantry with servo motion, sold in two setups:

- **Pro:** a 70W **RF metal** CO₂ tube only. Air-cooled, no chiller. Comes in sizes 7, 9, 13 and 16.
- **Hybrid:** a 38W RF tube for engraving plus a **glass DC** CO₂ tube for cutting (100W on the 9, 130W on the 13, 150W on the 16). The RF tube is air-cooled, but the glass tube **needs a water chiller**.

Models: [Hydra 7 Gen2](https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 9 Gen2](https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 13 Gen2](https://www.1laser.com/products/hydra-13-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 16 Gen2](https://www.1laser.com/products/hydra-16-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

## At a glance

| Spec | Value | Source |
|---|---|---|
| Work area | Hydra 7: 700 × 500 mm (27.6″ × 19.7″) · Hydra 9: 900 × 600 mm · Hydra 13: 1,300 × 900 mm · Hydra 16: 1,600 × 1,000 mm | Spec table / manual |
| Z travel / pass-through | 225 mm (8.85″) · front-to-back pass-through, 20 mm (0.78″) | Manual / spec table |
| Speed | Up to 2,000 mm/s, 4G | Product pages |
| RF lifespan | 20,000–30,000 h | Product pages |
| Cooling | RF: air (4 fans, 90.4 CFM max each, no preheat, about 20 s pre-ionization) · Hybrid glass tube: water chiller | Manual / spec table |
| Power | 110V 60Hz (US, set at the factory) / 220V 50Hz, single phase. **Amperage and watts: Unknown** | Manual / spec table |
| Ambient | 59–95°F (15–35°C), 40–70% RH non-condensing | Manual |
| Size (W×D×H) | Hydra 7: 1700 × 1045 × 1035 mm (manual) · Hydra 9 Pro: 1,500 × 1,045 × 1,035 mm · Hydra 9 Hybrid: 1,900 × 1,045 × 1,035 mm (spec table; the manual lists Hydra 9 at 1500 × 1145 × 1035) · 13/16: **Unknown** | Manual / spec table |
| Net weight | 175 kg / 311 kg (Hydra 7 / Hydra 9 columns in the manual) · 13/16: **Unknown** | Manual |
| Air assist | Built-in air pump plus Smart Dual Air Assist (auto low/high). Machine port rated **55 PSI / 400 kPa max**. An external compressor with a filter/regulator is recommended for a wider range of materials | Manual |
| Controller / software | GT5 DSP, 5″ touchscreen · LightBurn, RDWorks, MakerBoost AI · USB / Ethernet / Wi-Fi · Windows & macOS | Spec table / manual |
| Focus | Autofocus, red dot, camera · standard 2.5″ lens (1.5 / 2 / 3 / 4″ optional) | Spec table |
| Safety | Lid and side-panel interlocks · lens temperature, workbench temperature and PM2.5 monitoring · rail over-temperature shutoff · **Class: conflicting** (manual says Class II, product page says Class 1) | Manual / product pages |

!!! note "Spec conflict"
    The Hydra 7 Gen2 product description says "1300 by 900 mm working area," but the spec table and manual say **700 × 500 mm**. Go with 700 × 500 mm until OneLaser confirms.

## How the OMTech guide maps to Hydra Gen2

| OMTech guide step | Hydra Pro (70W RF) | Hydra Hybrid (38W RF + glass) |
|---|---|---|
| 1. Install laser tube | **Skip** | **Usually skip.** Tubes ship installed. Confirm the glass tube on delivery and check that its high-voltage connections are secure. Never solder them. |
| 2. Pump / chiller | **Skip.** Keep the room under 95°F and the fan intakes clear | **Required.** Machine *Water OUT* → chiller *INLET*, chiller *OUTLET* → machine *Water IN*. Connect the **water-error signal cable** to the chiller's ALARM OUTLET and run the chiller power cable from the machine. Fill with **distilled water** to the green band, run it, top up, and squeeze out any bubbles. Never fire the glass tube without working cooling. Protect it from freezing. Chiller: [OneLaser Chiller for Hydra & Cobra](https://www.1laser.com/products/onelaser-industrial-chiller-for-hydra-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } (1400W cooling, sized for one 150W or two 100W tubes, Constant and Intelligent modes, ±0.3°C) |
| 3. Inline fan | **Changes:** an exhaust fan ships with the machine. Run the gray pipe from the machine's exhaust to the fan inlet, then from the fan outlet to the outdoors. Use a fume filter if you can't vent outside. Never start without adequate exhaust (manual). | Same |
| 4. Lens orientation | Still check the 2.5″ lens, curved side up | Same |
| 5. Bed level | The honeycomb sits on indexing pins over the blade bed. Autofocus handles focus. Spot-check the corners | Same |
| 6. Power on | **Changes:** plug into a protected outlet that matches the factory voltage. Check exhaust, cooling and air-assist indicators before running (manual). No mA dial in OneLaser's steps | Same, and **turn the chiller on first** |
| 7. Mirror alignment | **Changes:** aligned at the factory. The manual says to run an **engraving test** first, since parts can shift in shipping. Use MakerBoost "Scanning offset adjust" to fix line shift. The panel has an *Alignment* function for checking the beam | Same, plus the beam combiner on dual-laser setups |
| 8. Clean optics | Same: mirrors, lens and beam combiner, 99% IPA | Same |
| 9. Install LightBurn | Same. Manual links the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial). MakerBoost AI also supported | Same. Laser switching works in LightBurn and MakerBoost |
| 10. Controller setup | USB, Ethernet or Wi-Fi. Enter your model's bed size | Same |
| 11. Save machine settings | Same | Same |
| 12. Ramp test | Optional focus check | Same, for each tube |
| 13. Test cards | Same | Run separate cards for the RF tube and the glass tube |

## Home/shop setup checklist

1. **Delivery and space:** this is a floor machine weighing roughly 175–311 kg or more. Confirm doorway width and floor access *before* delivery, as OneLaser's spec table advises. Leave room behind it for the exhaust and chiller.
2. **Electrical:** a US Hydra is 110V. OneLaser says to "confirm circuit capacity," but amperage isn't published, so ask OneLaser for the draw. On Hybrids the chiller is powered from the machine. A dedicated circuit is the Bearded Builds recommendation.
3. **Exhaust:** use the supplied fan and pipe, vent outdoors, and keep runs short. Required CFM isn't published. See [Ventilation and safety](../machines/ventilation-and-safety.md).
4. **Air:** the built-in pump is fine for thin sheets. For production cutting, the manual recommends an external compressor feeding a filter/regulator and then the Air Assist kit, at **55 PSI max** into the machine. Option: [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }. For a quiet compressor and regulator, see [Gear we use](../buying-guides/gear-we-use.md).
5. **Cooling (Hybrid only):** chiller, distilled water, alarm cable connected, and a plan for winter.
6. **Safety:** CO₂ extinguisher nearby, never run unattended, interlocks intact. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).
7. **First jobs:** engraving test, save machine settings, then [Starter settings](../materials/starter-settings.md).

## Unknown / confirm with OneLaser

- Amperage and wattage for any Hydra Gen2, and circuit size.
- Exhaust port diameter and the required airflow for the exhaust.
- Machine size and weight for the Hydra 13 and 16.
- Whether a chiller is included with Hybrid packages. The spec table says "confirm suitable chiller and package inclusions."
- Laser class (Class 1 vs Class II).

**Official manual:** [ONELASER Hydra Gen 2 User's Manual (PDF)](https://cdn.shopify.com/s/files/1/0747/8748/7778/files/ONELASER_Hydra_Gen_2_Users_Manual-251126.pdf?v=1773987311) · Accessories: [Multi-Function Rotary (Hydra & Cobra)](https://www.1laser.com/products/multi-function-rotary-axis-57-motor?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Focal lens (Hydra & X Series)](https://www.1laser.com/products/2-inch-focal-lens-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

<div class="bb-cta" markdown="1">
**Buying a Hydra?** Use our partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then dial in production with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner, so OneLaser links include our referral and we may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.**
