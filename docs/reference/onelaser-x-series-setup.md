---
title: OneLaser X-Series (XT / XRF) Setup Guide
description: How I set up a OneLaser XT or XRF desktop CO2 laser, with OneLaser's official steps, my own shop notes, and video walkthroughs.
---

<!-- DRAFT (not rendered): companion to the OMTech setup guide. Sources: 1laser.com product pages, 2025 X Series manual (PDF), OneLaser Wiki (wiki.1laser.com), Brandt's YouTube videos. Captured Nov 14, 2026. -->

# OneLaser X-Series (XT & XRF) Setup Guide

I run an XRF in my own shop every day: tumblers, hat patches, cutting boards and award plaques. This is how I'd set up an X-Series from the crate. It combines OneLaser's official instructions with what I've learned running mine.

Coming from an OMTech? Start with the [OMTech setup guide](omtech-setup-guide.md) for background. A lot of those steps are simpler or already done for you on the X-Series.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Unboxed your X-Series? Master LightBurn gets you from first test cut to sellable work.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-x-series-setup)
</div>

Both machines are **CO₂ lasers** (10.6 µm) on a gantry. The difference is the laser source:

- [**OneLaser XT**](https://www.1laser.com/products/onelaser-xt-desktop-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }: a 55 W **glass** tube, cooled by a small built-in water tank and pump.
- [**OneLaser XRF**](https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }: a 38 W **RF metal** tube that's air-cooled. There's no water, so cold or hot shop temperatures are much less of a worry.

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/5q2-Iy9Nhdc" title="OneLaser XRF Unboxing — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## At a glance

| Spec | XT | XRF | Source |
|---|---|---|---|
| Laser source | 55 W CO₂ glass tube | 38 W CO₂ RF metal tube (rated up to 30,000 h) | Product pages / manual |
| Cooling | Built-in water tank and pump | Air-cooled, no chiller | Product pages / manual |
| Work area | 23.6″ × 11.8″. Enter **600 × 300 mm** in LightBurn | 24″ × 12″ (610 × 305 mm). Enter **600 × 300 mm** in LightBurn | Product pages / OneLaser Wiki |
| Machine size (L×W×H) | 43.2″ × 28.5″ × 10.5″ | 43.2″ × 28.5″ × 10.5″ | Product pages |
| Weight | 119 lb (54 kg) | 127–128 lb (58 kg). My XRF plus riser base came in at **235 lb crated** | Product pages / my unboxing |
| Max speed / accel | 1,000 mm/s, 3G | 1,200 mm/s, 3G | Product pages |
| Exhaust | 3.94″ (≈100 mm) port. Fan and duct included | Same | Spec table / my unboxing |
| Air assist | Built-in pump; optional Smart Air Assist | Same | Manual / product pages |
| Power | 100–240 V single phase, set at the factory to 115 V or 230 V; ≈384 W at 115 V | Same; ≈670 W at 115 V. My XRF's label reads **4 A full-load current** at 110 V | Manual / XRF page / my unboxing |
| Room conditions | 59–95 °F (15–35 °C), 40–70 % RH non-condensing | Same | Manual |
| Software | LightBurn, RDWorks | LightBurn, RDWorks, MakerBoost AI | Product pages |
| Connection | USB, Wi-Fi, Ethernet (Ruida controller) | Same | OneLaser Wiki |
| Origin | **Rear left** | **Rear left** | OneLaser Wiki |
| Laser safety class | **Conflicting:** manual says Class 2, XRF product page says "Class 1 design" | Same | Manual vs. XRF page |

## How the OMTech setup order maps to the X-Series

| OMTech step | XT | XRF |
|---|---|---|
| 1. Install the tube | **Skip.** The tube ships installed | **Skip.** Sealed RF source |
| 2. Cooling | Fill the internal tank (details below) | **Skip** |
| 3. Inline fan | Mount the included fan on the back port. **Don't remove or modify** anything internal; OneLaser voids the warranty for that | Same |
| 4. Lens orientation | Check it. Curved side up, flat side toward the material | Same |
| 5. Bed tram | Mostly handled by autofocus. Spot-check if engraves fade across the bed | Same |
| 6. Power on | No key or mA dial in OneLaser's steps. Close the lid, switch on, let it home | Same |
| 7. Mirror alignment | Comes aligned from the factory. **Check before you adjust** (see below) | Same |
| 8. Clean optics | Use OneLaser's cleaning solution or **absolute ethanol**. OneLaser says **not** to use IPA on X-Series optics | Same |
| 9–10. LightBurn | Ruida, 600 × 300 mm, origin rear left | Same |
| 11. Back up settings | Same as any Ruida machine | Same |
| 12. Focus test | Autofocus, then verify | Same |
| 13. Test cards | Same idea. OneLaser also publishes starting parameters | Same |

## Step by step

### 1. Unbox and place it

These steps follow OneLaser's [unboxing guide](https://wiki.1laser.com/en/x-series/unboxing):

1. Cut the straps and lift off the crate top and sides.
2. Pull the foam and film, and check the tool bag against OneLaser's [included-parts list](https://wiki.1laser.com/en/x-series/tool-bag-included-parts).

**Plan the move.** My XRF and riser base together weighed 235 lb crated. The machine alone is 120–130 lb, so it's a two-person lift onto a solid bench.

**What was in my box:** the inline fan and ducting, cleaning supplies, power, USB and Ethernet cables, and a thumb drive.

### 2. XT only: fill the cooling tank

OneLaser ships the XT **with the tank drained**. If you power it on dry, you can cause an electrical failure. This follows OneLaser's [water tank guide](https://wiki.1laser.com/en/x-series/how-to-fill-water-tanks):

1. Remove the back cover and left door with an M2 hex key.
2. Pour about **790 ml of distilled or purified water** into the tank. Use only distilled or purified water.
3. Power on and let the pump pull water into the tube.
4. Top off with about **150 ml** more, then cap it and reinstall the covers.
5. Newer XTs have a water-level sensor that stops the pump from running dry.

**Temperature:** OneLaser wants the coolant at **15–25 °C**, and its [cooling and freeze guide](https://wiki.1laser.com/en/x-series/laser-cooling-temperature-freeze-mitigation) is clear that freeze damage isn't covered by the warranty.

**Antifreeze:** if the room drops below about **10 °C (50 °F)**, use one of OneLaser's [approved antifreezes](https://wiki.1laser.com/en/accessories/approved-antifreeze) at their ratio. The starting point is **3 parts antifreeze to 7 parts water**, which protects to roughly −12 to −15 °C.
- Add the water first, then the antifreeze.
- Change it every 2–3 months.
- Don't mix brands.

**Storage:** drain everything if the machine will sit unused for a long time.

### 3. Exhaust

**Fitting the fan:** remove the plate on the back, connect the fan's 24 V plug, screw the fan onto the port, and attach the duct. On mine it's a straight shot out the back.

**Where to vent:** outside is best. If you can't vent outside, OneLaser shows how to connect their [air purifier](https://wiki.1laser.com/en/x-series/how-to-connect-the-air-purifier).

**Upgrading the fan:** OneLaser's [exhaust troubleshooting page](https://wiki.1laser.com/en/x-series/smoke-escaping-exhaust-optimization) gives a target spec for X-Series fans:
- about **366 m³/h** (≈215 CFM)
- **578 Pa** static pressure
- about 3,800 RPM

The [AC Infinity CLOUDLINE S6](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } is a solid choice. It's a 6″ fan, so you'll need a 4″→6″ adapter.

**Fan placement:** OneLaser's advice is that on **flexible duct**, the fan goes close to the machine, and on **rigid pipe** it can sit at the far end. Inline fans do pull better than they push, so on a long rigid run I'd put mine near the outlet.

**Smoke leaking out?** OneLaser says it's an airflow balance problem. Either the air assist isn't feeding enough fresh air in, or the exhaust fan is too weak. A stronger fan plus a compressor for air assist fixes most cases.

### 4. Power

1. Plug into a grounded outlet that matches the voltage on the rear label (115 V in the US).
2. Close all covers, switch on, and let it home.
3. Don't press ESC while it homes.

**Circuit:** my XRF's label says 4 A full-load current, so a normal 15 A household circuit handles the laser itself.

### 5. Connect LightBurn

These settings follow OneLaser's [USB](https://wiki.1laser.com/en/x-series/connect-lightburn-via-usb-cable), [Ethernet](https://wiki.1laser.com/en/x-series/connect-lightburn-via-ethernet) and [Wi-Fi](https://wiki.1laser.com/en/x-series/connect-lightburn-via-wifi) guides.

**USB:** install the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial) along with its USB driver. Then add a device:
- choose **Ruida**, then **Serial/USB**
- enter a work area of **600 × 300 mm**
- set the origin to **Rear Left**

**Ethernet:** this one isn't plug-and-play, and "Find My Laser" won't find it.
1. Give your computer the static IP **192.168.1.30**, subnet 255.255.255.0.
2. In LightBurn, choose Ruida, then **Ethernet/UDP**, and enter the laser's default IP, **192.168.1.100**.

**Scanning offsets:** your machine ships with scanning-offset values (OneLaser also calls them reverse compensation). Enter them in LightBurn so bidirectional engraving lines up. OneLaser has a [tuning guide](https://wiki.1laser.com/en/x-series/how-to-apply-and-fine-tune-your-scanning-offset-settings) for them.

**Back up your machine settings** before you change anything: *Edit → Machine Settings → Save*.

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/0PePexQ1l3Y" title="OneLaser X Series Camera Setup — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Camera tip from my setup video:** for the LightBurn *lens* calibration, you don't need the card flat on the bed. Open the lid and hold the card up where it matches the preview. That's much easier. For the camera *alignment* step, put tape on the bed, focus on it, and run the target pattern at low power.

### 6. Check alignment (don't just start turning knobs)

OneLaser aligns these at the factory. Their [light-path guide](https://wiki.1laser.com/en/x-series/how-to-adjust-laser-light-path) warns that once you loosen a mirror knob, getting it back can take **four hours or more**. So check first.

**How I check:**
1. Put masking tape over the nozzle. Ignore the red dot, because it's independent of the beam.
2. Pulse once with the head at the **back left**, closest to the tube.
3. Move to the **front right**, farthest from the tube, and pulse again.
4. If the two marks land on top of each other, leave it alone.

**Mirror tip:** the X-Series mirrors slide out after you loosen a thumb screw. When you put them back, snug the screw **finger-tight**, not cranked down.

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/p1iuqyp2FLw" title="Perfect Laser Beam Alignment | OneLaser X Series Tutorial — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 7. Focus

**Autofocus** handles most jobs.

**Manual focus:** on mine, the focal distance is about **10 mm from the nozzle tip** with the stock lens. I keep a step gauge on hand to set it by hand.

**Testing focus:** OneLaser has a [dot test for finding focal length](https://wiki.1laser.com/en/x-series/test-optimal-laser-focal-length) if you want to confirm the right number for your lens. A ramp test works too.

**Changing lenses:** if you swap to the optional 2″ lens, read OneLaser's note on [installing a 2.5″ lens in the 2″ position](https://wiki.1laser.com/en/x-series/change-the-position-of-the-focusing-lens). Getting it wrong causes a hidden misalignment.

### 8. Air assist

**Stock air:** the built-in pump is fine for engraving.

**For clean cuts:** feed it from a shop compressor. OneLaser shows how to [connect an external blower](https://wiki.1laser.com/en/x-series/connect-external-blower-laser-machine). Pull the built-in line off the blue valve and push your compressor line in.

**Upgrades:** the [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } switches automatically between low air for engraving and high air for cutting. I've also installed a Liberty Controls kit on my XRF: [video](https://youtu.be/0-u7x1t1lZ0).

**Compressor gear:** see [Gear we use](../buying-guides/gear-we-use.md) for the regulator and hose I run.

### 9. Maintenance rhythm

This is OneLaser's recommended rhythm from their [maintenance guide](https://wiki.1laser.com/en/x-series/maintenance-guide):

| How often | What to clean or check |
|---|---|
| Daily | Lens, auto-focus sensor |
| Weekly | Mirrors 2 and 3, work table, cooling fan, beam combiner |
| Every 3 months | Mirror 1, exhaust fan, the XT's water tank, vent slots |
| Every 6 months | Belts, bearings and rails |
| Yearly | Whole machine |

**Cleaners:** use OneLaser's cleaning solution or absolute ethanol on the optics.

**Guide wheels:** I made a video on [replacing worn guide wheels on the XRF](https://youtu.be/gH1tgOSi23w).

### 10. First job

1. Run test cards (see the [OMTech guide](omtech-setup-guide.md#13-test-cards)).
2. Start from OneLaser's published starting parameters: [38 W RF](https://wiki.1laser.com/en/knowledge-base/material-processing/different-materials-parameters/38w) or [55 W glass](https://wiki.1laser.com/en/knowledge-base/material-processing/different-materials-parameters/55w).
3. Use my [starter settings](../materials/starter-settings.md).

My [acrylic tips video](https://youtu.be/F3Cgcyrk6iM) was shot on the XRF.

## Home setup checklist

1. **Bench:** solid and big enough for 43″ × 29″ and about 130 lb, with room behind for the duct and cord.
2. **Exhaust:** included fan on the 4″ port, vented outside. Upgrade to OneLaser's fan spec if smoke escapes. See [Ventilation and safety](../machines/ventilation-and-safety.md).
3. **Power:** grounded outlet that matches the label voltage. A normal circuit is fine.
4. **Cooling:** XT gets distilled water, plus approved antifreeze below 10 °C. XRF needs nothing.
5. **Air:** stock pump to start, compressor for cutting.
6. **Safety:** CO₂ extinguisher nearby, never run unattended, don't defeat the lid interlock. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).

## Still unknown / confirm with OneLaser

- **Laser class:** the manual says Class 2, the XRF product page says Class 1.
- **XT current draw:** the manual lists 383.5 W. I haven't confirmed the label amperage on an XT.

## Sources and more videos

**OneLaser:**
- [X Series Wiki](https://wiki.1laser.com/en/x-series)
- [X Series User Manual (2025, PDF)](https://cdn.shopify.com/s/files/1/0747/8748/7778/files/2025_OneLaser_X_Series_User_Manual_f755315f-1c5e-4a46-9cea-4fe46f786cf9.pdf?v=1750223658)

**My videos:**
- [OneLaser XRF Unboxing](https://youtu.be/5q2-Iy9Nhdc)
- [X Series Camera Setup](https://youtu.be/0PePexQ1l3Y)
- [X Series Beam Alignment](https://youtu.be/p1iuqyp2FLw)
- [XT/XRF Liberty Controls air assist install](https://youtu.be/0-u7x1t1lZ0)
- [XRF guide wheel replacement](https://youtu.be/gH1tgOSi23w)
- [XRF vs xTool P2](https://youtu.be/C2FDjGpLEDA)
- [Best laser for your small business](https://youtu.be/HOh6qitWLqI)

Accessories: [Riser Base](https://www.1laser.com/products/onelaser-x-series-riser-base?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

<div class="bb-cta" markdown="1">
**Buying an X-Series?** Use my partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then learn the software properly with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-x-series-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner. OneLaser links include my referral, and I may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.** OneLaser Wiki content is summarized in my own words and linked as the source.
