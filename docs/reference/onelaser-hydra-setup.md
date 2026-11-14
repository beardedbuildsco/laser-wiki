---
title: OneLaser Hydra Gen2 Setup Guide
description: How to set up a OneLaser Hydra (Gen2 Pro or Hybrid), with OneLaser's official steps, my notes from setting up my Hydra 13, and video walkthroughs.
---

<!-- DRAFT (not rendered): companion to the OMTech setup guide. Sources: 1laser.com product pages, Hydra Gen 2 User's Manual (PDF, rev. 251126), OneLaser Wiki (wiki.1laser.com), Brandt's Hydra 13 setup series on YouTube. Captured Nov 14, 2026. -->

# OneLaser Hydra Gen2 Setup Guide

My Hydra 13 is the big cutter in my shop. It has a 130 W glass tube for cutting plus a 38 W RF tube for detail, and it'll take most of a 4×8 sheet if I trim one end. I filmed the whole setup in five parts, so this page combines OneLaser's official Gen2 instructions with what I ran into doing it myself.

Coming from an OMTech? See the [OMTech setup guide](omtech-setup-guide.md) for the basics. The Hydra handles a lot of them for you.

!!! info "Gen1 vs Gen2"
    My Hydra 13 is a first-generation hybrid (130 W glass + 38 W RF). Most of the setup is the same on Gen2. Where my notes come from my Gen1 machine, I've said so.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Running a Hydra? Master LightBurn shows you how to get production-speed results from it.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup)
</div>

Hydra Gen2 is a floor-standing **CO₂** gantry laser with servo motion. It comes two ways:

- **Pro:** a 70 W **RF** tube only. It's air-cooled and needs no chiller. Available in sizes 7, 9, 13 and 16.
- **Hybrid:** a 38 W RF tube for engraving plus a **glass** tube for cutting: 100 W on the Hydra 9, 130 W on the 13, 150 W on the 16. The glass tube **needs a water chiller**.

Models: [Hydra 7 Gen2](https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 9 Gen2](https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 13 Gen2](https://www.1laser.com/products/hydra-13-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 16 Gen2](https://www.1laser.com/products/hydra-16-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/jIzhCY4Srfo" title="OneLaser Hydra 13 Unboxing & Setup Guide (Part 1) — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## At a glance

| Spec | Value | Source |
|---|---|---|
| Work area | Hydra 7: 700 × 500 mm · Hydra 9: 900 × 600 mm · Hydra 13: 1,300 × 900 mm · Hydra 16: 1,600 × 1,000 mm | Spec table / manual |
| Z travel / pass-through | 225 mm · front-to-back pass-through 20 mm | Manual / spec table |
| Speed | Up to 2,000 mm/s, 4G | Product pages |
| Cooling | RF tube: air (4 fans, 90.4 CFM each) · Hybrid glass tube: water chiller | Manual |
| Power | 110 V 60 Hz in the US (factory-set). OneLaser hasn't published amperage. **Plan for a 20 A circuit**; mine came with a 20 A plug | Manual / my Hydra 13 |
| Room conditions | 59–95 °F (15–35 °C), 40–70 % RH | Manual |
| Air assist | Built-in pump plus Smart Dual Air Assist. Machine air port is rated **55 PSI max** | Manual |
| Controller | GT5 DSP with touchscreen · LightBurn / RDWorks / MakerBoost · USB / Ethernet / Wi-Fi | Spec table |
| Origin | Rear left | My setup video |
| Safety | Lid and side-panel interlocks · lens, bed and PM2.5 monitoring · **Class conflict** (manual says Class II, product page says Class 1) | Manual / product page |

!!! note "Spec conflict"
    The Hydra 7 Gen2 product description says 1300 × 900 mm, but the spec table and manual say **700 × 500 mm**. I'm going with 700 × 500 mm.

## Step by step

### 1. Crate, unwrap, inspect

The Hydra arrives in a big crate.
1. Pull the crate panels and get it onto a level spot.
2. Unwrap it and inspect for shipping damage *before* you power anything.

**Delivery:** confirm the door width and floor access before the truck shows up. A Hydra 9 is roughly 1.5 m wide and the Hybrids are wider.

**Keys:** the machine ships with **two sets**. One opens the doors and panels. The other is the laser power key.

**Parts list:** OneLaser publishes the [Hydra Gen 2 manual](https://wiki.1laser.com/hydra-gen-2) on its wiki if you want to check the box contents.

Videos: [Part 1, crate removal](https://youtu.be/jIzhCY4Srfo) · [Part 2, unwrapping and accessories](https://youtu.be/mvyz4rRrLws)

### 2. Electrical: plan for 20 A

The plugs on my Hydra are **20 A plugs**, and all the accessories plug into the back of the cabinet: the exhaust fan, air pump and chiller. Everything draws through that one cord.

**What I recommend:** a dedicated **20 A circuit with a 20 A receptacle**. On less, you risk tripping the breaker or running the line hot.

**What OneLaser says:** "confirm circuit capacity," but no amperage figure is published for Gen2. Ask them if you're wiring a new circuit.

### 3. Exhaust

The fan and duct come in the box.

**Hooking it up:**
1. Check the arrow on the fan for airflow direction.
2. Run duct from the machine's exhaust to the fan, then from the fan to outside.
3. Clamp every joint with the included band clamps.
4. Plug the fan into the **exhaust fan** socket on the back of the machine.
5. Never run without exhaust.

**Fan placement:**
- **My preference:** put the fan toward the outlet end of the run, because inline fans pull better than they push.
- **OneLaser's guidance:** on flexible duct, put the fan near the machine; on rigid pipe, at the far end.
- On a short flex run, either way works.

**Fan size:** OneLaser says Hydras need a stronger fan than their X-Series target of ~366 m³/h at 578 Pa ([source](https://wiki.1laser.com/en/x-series/smoke-escaping-exhaust-optimization)). They don't publish an exact Hydra number.

### 4. Air assist

**Stock pump:**
1. Thread the line onto the pump. I add Teflon tape for a good seal.
2. Push the blue line into the **Air Assist** fitting on the back.
3. Plug the pump into its socket on the back.

**Removing a line:** these are push-connect fittings. Press the ring and pull the tube at the same time.

**Upgrading to a compressor:** for real cutting, the stock pump isn't enough, and OneLaser's manual agrees. I installed the [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } with a shop compressor.

**My compressor settings:**
- compressor at about **60 PSI**
- inline regulator at about **50 PSI**, never over the machine's 55 PSI limit
- high-flow cutting dialed to about **20 PSI** on the controller

Video: [Hydra compressor air assist install](https://youtu.be/nuc9LDctHps). For a regulator and quiet compressor, see [Gear we use](../buying-guides/gear-we-use.md).

### 5. Chiller (Hybrid only)

Use the OneLaser chiller or an S&A CW-5000-series unit, per the manual. OneLaser sells the [OneLaser Chiller for Hydra & Cobra](https://www.1laser.com/products/onelaser-industrial-chiller-for-hydra-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }. Confirm with OneLaser whether a chiller is included in your package.

**Hookup:**
1. Chiller **OUTLET** → machine **Water IN**.
2. Machine **Water OUT** → chiller **INLET**.
3. Connect the **alarm cable** from the chiller's alarm output to the machine. It tells the laser when the chiller isn't running.
4. Connect the chiller **power cable** to its socket on the machine.
5. Clamp the hoses. I used zip ties until I had proper clamps.

**Filling it:**
- It takes just under **2 gallons**.
- Mine shipped with a bottle of propylene glycol (Gen1, so check yours). I used about a **20 %** mix topped off with **distilled water**.
- Run it for a while, then top it back up to the green zone.
- Small bubbles in the tube clear on their own after it circulates.

**Antifreeze:** OneLaser's [approved antifreeze guide](https://wiki.1laser.com/en/accessories/approved-antifreeze) recommends pure distilled water above 5 °C (41 °F) and a **3:7 antifreeze-to-water** mix going into winter. Don't mix brands, and replace it every 2–3 months.

**Setting the mode:**
- **Intelligent mode** is fine in an air-conditioned shop (mid-70s °F or cooler).
- I'm in an un-air-conditioned garage, so I use **constant mode**.
- On my chiller: hold **Up + SET** until it shows 0, enter password **08**, change **F3** to constant, then set the temperature in **F0**. I use about **18 °C**.
- Menus can vary by chiller, so check yours.

**Chiller won't power on?** OneLaser has a [troubleshooting page](https://wiki.1laser.com/en/hydra-series/chiller-not-power-on-ac-contactor-fix) for that, under the heading "Chiller does not power on (AC contactor blue button not engaging)".

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/or8JsjOrjMM" title="Hydra 13 Laser Setup Part 3 – Inline Fan, Air Pump & Water Chiller — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 6. First power-on

1. Make sure the e-stop is up.
2. Insert the laser key and switch on. Hybrids need the chiller running first.
3. Confirm the homing prompt on the screen.
4. Jog **X, Y and Z** to make sure everything moves the right way.

OneLaser's manual also says to check that the exhaust and cooling indicators show normal before running.

### 7. Check alignment

OneLaser aligns these at the factory. Their manual still says to run a test first, because parts can shift in shipping. I check it this way:

1. Tape over the laser head.
2. On the touchscreen, go to **Menu → Alignment**.
3. Use the preset corners: pulse at **upper left** (closest to the tubes), then **bottom right** (farthest).
4. Do it for **laser 1** and **laser 2**. On my machine I used about **20 %** on the 130 W glass tube and **90 %** on the 38 W RF for the tape test.
5. If the marks stack, you're good.

If they don't stack, see my [alignment principles](https://youtu.be/6GtwjxUpEEs) video before touching anything. You can also run MakerBoost's *Scanning offset adjust* to fix line shift.

Video: [Part 4, controller overview and alignment check](https://youtu.be/I1nl4DLJdhE)

### 8. Connect LightBurn

**Basic setup:**
1. Install the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial).
2. Add the device: **Ruida**, choose your connection, set the origin to **rear left**, then **Finish**.
3. Recent versions (2.0+) make this quicker than the old manual describes.
4. Back up your machine settings right away.

**Wi-Fi:** this follows OneLaser's [Hydra Wi-Fi guide](https://wiki.1laser.com/en/hydra-series/connect-hydra-to-lightburn-via-wifi).
1. Inside the bottom-right door, make sure the network module switch is set to **Wi-Fi** (button 1), not LAN.
2. Join the **"Hydra Hotspot + last five digits of the serial"** network. The default password is 12345678.
3. Set the laser's IP within **192.168.254.x**. Don't reuse an address already on the network.
4. In LightBurn, use **Create Manually** with that IP.

**Using your shop Wi-Fi instead:** you can bridge the hotspot to your shop router. If you have a Wi-Fi 6 router, turn on Wi-Fi 4/5 compatibility.

**Two tubes:** set up laser 1 and laser 2 in LightBurn, and load the test-card settings OneLaser provides for each tube.

Video: [Part 5, connect LightBurn and run your first project](https://youtu.be/uB9iavKPw44)

### 9. Focus

This follows OneLaser's [focus guide](https://wiki.1laser.com/en/hydra-series/how-to-focus-laser).

**Autofocus:** it's a touch probe. Pick **Focus → OK** on the screen.
- **Always have material under the head** when you run it, or the probe can overtravel and damage the head or table.

**Manual focus:** use this for soft or springy material like leather or foam.
1. Cut a gauge from **6 mm acrylic**.
2. Slide it under the head.
3. Raise the bed until the head just touches the gauge.

### 10. Maintenance rhythm

**Cleaning the optics:** OneLaser's [maintenance guide](https://wiki.1laser.com/en/hydra-series/maintenance-guide) says to use their lens cleaning solution or **anhydrous ethanol**, and **not isopropyl alcohol**, which they say can damage the mirror coatings.
- **Heads up:** in my [Hydra 13 cleaning video](https://youtu.be/aefgWz4-gKs) I used 99 % IPA. Go with OneLaser's recommendation to protect your warranty.
- Wipe side to side, not in circles.
- Put the focus lens back **convex side up** (flat side down).

**Schedule (OneLaser):**

| How often | What to clean or check |
|---|---|
| Daily | Focus lens, auto-focus sensor |
| Weekly | Mirrors 2 and 3, work table, cooling fan, beam combiner |
| Every 3 months | Mirror 1 on each tube, dual-source lift mirror, chiller water, rear vent slots |
| Every 6 months | Belts, bearings, rails and interior |
| Every 12 months | Interior (deep clean) |

Also blow out the RF tube cooling fan and exhaust fan, empty the waste hopper, and lightly oil the rails and the Z screw.

## Home/shop checklist

1. **Delivery:** confirm the doorway and floor first, and leave room behind for the exhaust and chiller.
2. **Electrical:** dedicated 20 A circuit and receptacle.
3. **Exhaust:** included fan, vented outside, never off while lasing. See [Ventilation and safety](../machines/ventilation-and-safety.md).
4. **Air:** a compressor (55 PSI max into the machine) if you're cutting.
5. **Cooling (Hybrid):** chiller with distilled water or approved antifreeze, alarm cable connected.
6. **Safety:** CO₂ extinguisher nearby, never run unattended, interlocks intact. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).

## Still unknown / confirm with OneLaser

- **Amperage:** OneLaser hasn't published Gen2 amperage; 20 A is my recommendation based on my machine's plug.
- **Exhaust:** port diameter and the exact fan spec for Hydras ("higher than X-Series").
- **Size and weight:** for the Hydra 13 and 16 Gen2.
- **Chiller:** whether one and an antifreeze bottle come with Gen2 Hybrid packages. Mine (Gen1) came with propylene glycol.
- **Laser class:** Class 1 vs Class II.

## Sources and more videos

**OneLaser:**
- [Hydra Series Wiki](https://wiki.1laser.com/en/hydra-series)
- [Hydra Gen 2 manual (wiki)](https://wiki.1laser.com/hydra-gen-2)
- [Hydra Gen 2 User's Manual (PDF)](https://cdn.shopify.com/s/files/1/0747/8748/7778/files/ONELASER_Hydra_Gen_2_Users_Manual-251126.pdf?v=1773987311)

**My videos:**
- [Hydra 13 Part 1](https://youtu.be/jIzhCY4Srfo) · [Part 2](https://youtu.be/mvyz4rRrLws) · [Part 3](https://youtu.be/or8JsjOrjMM) · [Part 4](https://youtu.be/I1nl4DLJdhE) · [Part 5](https://youtu.be/uB9iavKPw44)
- [Compressor air assist](https://youtu.be/nuc9LDctHps)
- [Lens and mirror cleaning](https://youtu.be/aefgWz4-gKs)
- [Why did they buy a Hydra 9?](https://youtu.be/MHP87JAPBc8)
- [Best laser for your small business](https://youtu.be/HOh6qitWLqI)

**Accessories:**
- [Multi-Function Rotary (Hydra & Cobra)](https://www.1laser.com/products/multi-function-rotary-axis-57-motor?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }
- [Focal lens (Hydra & X Series)](https://www.1laser.com/products/2-inch-focal-lens-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

<div class="bb-cta" markdown="1">
**Buying a Hydra?** Use my partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then dial in production with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner. OneLaser links include my referral, and I may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.** OneLaser Wiki content is summarized in my own words and linked as the source.
