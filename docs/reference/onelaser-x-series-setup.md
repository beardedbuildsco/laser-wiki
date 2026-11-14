---
title: OneLaser X-Series (XT / XRF) Setup Guide — reference
---

# OneLaser X-Series (XT & XRF) Setup Guide

!!! warning "DRAFT — internal reference, not published"
    OneLaser-specific companion to the [OMTech setup guide (reference)](omtech-setup-guide.md). Specs below come from OneLaser's official product pages and the **2025 OneLaser X Series User Manual** (captured Nov 14, 2026). Anything not published by OneLaser is marked **Unknown** — confirm with OneLaser before telling a customer.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Unboxed your X-Series? Master LightBurn gets you from first test cut to sellable work.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-x-series-setup)
</div>

The X-Series is OneLaser's all-in-one desktop line. Both machines are **CO₂ lasers** (10.6 µm) with gantry motion — the difference is the laser source:

- [**OneLaser XT**](https://www.1laser.com/products/onelaser-xt-desktop-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } — 55W **glass** CO₂ tube, built-in water cooling.
- [**OneLaser XRF**](https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } — 38W **RF metal** CO₂ tube, air-cooled (no chiller).

## At a glance

| Spec | XT | XRF | Source |
|---|---|---|---|
| Laser source | 55W CO₂ glass tube | 38W CO₂ RF metal tube (rated up to 30,000 h) | Product pages / manual |
| Cooling | Built-in water cooling (internal reservoir + pump) | Air-cooled, no chiller | Product pages / manual |
| Work area | 23.6″ × 11.8″ (≈610 × 305 mm) | 23.6″ × 11.8″ (24″ × 12″, 610 × 305 mm) | Product pages |
| Machine size (L×W×H) | 43.2″ × 28.5″ × 10.5″ | 43.2″ × 28.5″ × 10.5″ (1085 × 725 × 268 mm) | Product pages |
| Weight | 119 lb (54 kg) | 127–128 lb (58 kg) | Product pages |
| Max speed / accel | 1,000 mm/s, 3G | 1,200 mm/s, 3G | Product pages |
| Exhaust port | 3.94″ (≈100 mm), built-in exhaust fan | 3.94″ (≈100 mm), built-in exhaust fan | Spec table / manual |
| Air assist | Built-in air pump; optional Smart Air Assist control | Same | Manual / product pages |
| Power | 100–240V AC single phase, factory-set to 115V or 230V; ≈384W @115V | Same; ≈670W @115V (page lists 672.9W) | Manual / XRF page |
| Ambient | 59–95°F (15–35°C), 40–70% RH non-condensing | Same | Manual |
| Software | LightBurn, RDWorks | LightBurn, RDWorks, MakerBoost AI | Product pages |
| Connection | USB, Wi-Fi | USB, Ethernet, Wi-Fi (Ruida controller) | Product pages / manual |
| Focus | XFocus™ motorized autofocus, MagSwitch™ magnetic lens holder, red dot, camera | Same; standard 2.5″ lens | Product pages |
| Laser safety class | **Conflicting:** manual says Class 2; XRF product page says "Class 1 design" | Same conflict | Manual vs. XRF page |
| Height / pass-through | Optional [Riser Base](https://www.1laser.com/products/onelaser-x-series-riser-base?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } (XRF page: up to 8.5″ work height; riser listing: pass-through up to 160 mm) | Same | Product pages |

## How the OMTech guide maps to the X-Series

| OMTech guide step | XT | XRF |
|---|---|---|
| 1. Install laser tube | **Skip** — tube ships installed inside the enclosure | **Skip** — sealed RF source |
| 2. Water pump / chiller | **Changes:** no bucket or external chiller. Remove the back cover and left door (M2 hex), fill the internal reservoir with **≈790 ml distilled water**, power on, then top up **≈150 ml** after water stops flowing into the tube. Never power on dry — the manual warns of electrical failure. | **Skip** — air-cooled. Keep the room within 59–95°F and keep intake/fan vents clear. |
| 3. Inline fan | **Changes:** a fan is built in (3.94″ port). Do **not** remove it — the manual voids the warranty for unauthorized modifications. Duct it outside; the manual says never run without an adequate exhaust system. | Same as XT |
| 4. Lens orientation | Still check. Lens sits in the magnetic MagSwitch™ holder; curved side up. | Same |
| 5. Bed level | Mostly handled by autofocus; still spot-check the nozzle-to-bed distance in the corners. | Same |
| 6. Power on | **Changes:** no key switch or mA dial in OneLaser's steps. Plug into a protected outlet that matches the factory voltage, close all covers, switch on, and let it home. Don't press ESC while it homes. | Same |
| 7. Mirror alignment | **Changes:** aligned at the factory. Run test engraves first and only adjust if results show a problem. Alignment that follows OneLaser's best practices is allowed under warranty; contact OneLaser support if unsure. | Same |
| 8. Clean mirrors & lens | Same idea: 3 mirrors plus the focus lens, per manual §5.2. Use 99% IPA and swabs. | Same |
| 9. Install LightBurn | Same. The manual links the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial); install the USB driver. | Same. MakerBoost AI is also supported. |
| 10. Controller setup | Same flow ("Find My Laser"; Ruida/DSP). Bed = 610 × 305 mm. | Same; Ethernet is recommended for a fixed shop setup (OneLaser FAQ). |
| 11. Save machine settings | Same — do it before changing anything | Same |
| 12. Ramp test | Optional check. Autofocus sets focus, but a ramp test confirms it on your lens. | Same; 2″ lens is optional |
| 13. Test cards | Same | Same |

## Home setup checklist

1. **Space:** a solid table for about 43″ × 29″ and 120–130 lb, with room behind for the duct and power cord.
2. **Exhaust:** run 4″ duct from the 3.94″ port to a window or wall vent, keeping it short with few bends. If venting outside isn't possible, use a filter unit (manual: "in-line filtering system"). For long runs, a booster fan such as the [AC Infinity CLOUDLINE S6](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } (6″, needs a 4″→6″ adapter) is a Bearded Builds suggestion, not a OneLaser requirement. See [Ventilation and safety](../machines/ventilation-and-safety.md).
3. **Power:** a grounded outlet that matches the factory voltage on the label (115V in the US). Draw is under 700W, so a normal 15A circuit works; a dedicated circuit is still nice to have.
4. **Cooling:** XT — distilled water only (as above). XRF — nothing to fill.
5. **Air assist:** built-in pump. Always use air assist when cutting (manual). The optional [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } switches between low-air engraving and high-air cutting.
6. **Safety:** keep a CO₂ fire extinguisher nearby (manual), never run unattended, and don't bypass the lid interlock. The table heat alarm trips at 55°C (131°F). See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).
7. **Software:** LightBurn → Find My Laser → set origin → save machine settings → [Starter settings](../materials/starter-settings.md).

## Unknown / confirm with OneLaser

- Required exhaust airflow (CFM) for the built-in fan, and the recommended duct length. Not published.
- Coolant temperature target for the XT's internal water system. Not published; the manual only gives the 59–95°F room range.
- Whether the X-Series is Class 1 or Class 2. The manual and product page conflict.
- XT power draw: the manual lists 383.5W; no figure on the XT product page.

**Official manual:** [OneLaser X Series User Manual (2025, PDF)](https://cdn.shopify.com/s/files/1/0747/8748/7778/files/2025_OneLaser_X_Series_User_Manual_f755315f-1c5e-4a46-9cea-4fe46f786cf9.pdf?v=1750223658)

<div class="bb-cta" markdown="1">
**Buying an X-Series?** Use our partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then learn the software properly with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-x-series-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner, so OneLaser links include our referral and we may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.**
