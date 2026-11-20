---
title: OneLaser Cobra Setup Guide
description: How to set up a OneLaser Cobra 8, 10 or 14 glass-tube CO2 laser, from OneLaser's official Cobra manual plus my own setup notes.
---

<!-- DRAFT (not rendered): OneLaser setup reference. Sources: 1laser.com product pages and spec chart, OneLaser Wiki Cobra User's Manual (wiki.1laser.com/onelaser-cobra/user-manual), Brandt's general CO2 videos. No Brandt Cobra-specific video exists yet. Captured Nov 14, 2026. -->

# OneLaser Cobra (8 / 10 / 14) Setup Guide

The Cobra is OneLaser's **glass-tube CO₂** cabinet laser, and it's their entry point for a laser business. Of the three OneLaser lines it's the most traditional CO₂ setup: a water chiller, three mirrors and a laser key.

I don't have a Cobra in my shop yet, so this page is built from OneLaser's official [Cobra user manual](https://wiki.1laser.com/onelaser-cobra/user-manual) and spec chart, plus the same glass-tube habits I use on my Hydra.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [New Cobra owner? Master LightBurn takes you from test card to paid jobs.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-cobra-setup)
</div>

Models: [Cobra 8 (90 W)](https://www.1laser.com/products/cobra-8-90w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Cobra 10 (100 W)](https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Cobra 14 (130 W)](https://www.1laser.com/products/cobra-14-130w-co2-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

## At a glance

| Spec | Cobra 8 | Cobra 10 | Cobra 14 |
|---|---|---|---|
| Glass CO₂ tube | 90 W | 100 W | 130 W |
| Work area | 31.5″ × 19.7″ (800 × 500 mm) | 39.4″ × 23.6″ (1,000 × 600 mm) | 55.1″ × 35.4″ (1,400 × 900 mm) |
| Z travel | 150 mm | 280 mm | 280 mm |
| Machine size | 58″ × 41″ × 26″ | 66″ × 43″ × 37″ | 76″ × 54″ × 37″ |
| Weight | 397 lb (180 kg) | 595 lb (270 kg) | 772 lb (350 kg) |
| Power | 110 V / 60 Hz · 11 A · 1,200 W | 110 V / 60 Hz · 11.5 A · 1,250 W | 110 V / 60 Hz · 13.5 A · 1,450 W |
| Cooling | Water. **Chiller not included** | Same | Same |
| In the box | Exhaust fan, two **150 mm (6″)** × 1.5 m exhaust pipes, clamps, water hoses, **chiller alarm cable**, laser and access keys, USB and Ethernet cables | Same | Same |
| Speed | Raster 1,200 mm/s · vector 1,500 mm/s · 2G | Same | Same |
| Pass-through | 45 mm, front and rear | Same | Same |
| Control | GT5c touchscreen · USB / Ethernet / Wi-Fi · LightBurn, RDWorks, MakerBoost | Same | Same |
| Room conditions | 59–95 °F operating, humidity under 70 % | Same | Same |
| Laser class | Class I machine enclosing a Class IV laser (manual) | Same | Same |
| Tube life | About 12,000 h at moderate use. Running above ~70–80 % power shortens it | Same | Same |
| Warranty | 1 yr mechanical and electrical; lenses not covered | Same | Same |

!!! note "Exhaust fan: included or optional?"
    OneLaser's spec chart lists the fume exhaust fan as "Optional," but the Cobra manual's package list includes an exhaust fan and two 6″ pipes. Check your packing list when it arrives.

## Step by step

### 1. Pick the spot

OneLaser's location requirements:
- **Stable, level, dry and climate-controlled.**
- **Temperature:** the manual's spec table says 59–95 °F to operate, and another section allows 40–95 °F. Keep it in the 59–95 °F range.
- **Humidity:** under 70 %.
- **Clearance:** leave room behind for the chiller, the 6″ exhaust run and the cords.

**Delivery:** a Cobra 14 is 76″ × 54″ and nearly 800 lb, so measure doorways first.

### 2. Power and grounding (do this right)

OneLaser's manual is stricter here than most:

- **Dedicated circuit** with an easy-to-reach breaker. Nothing else on that fuse.
- **3-wire, 14 AWG minimum.**
- **No extension cords or power strips.** If you use a surge protector, it should be rated over 2,000 J.
- **Grounded 3-prong outlet**, and never a 3-to-2 adapter. The manual also describes an optional dedicated ground rod.
- **Don't power the chiller from the sockets on the back of the Cobra.** OneLaser says they can't handle the chiller's draw. Give the chiller its own outlet.

**Circuit size:** with the laser pulling 11–13.5 A on its own, I'd run a **20 A** dedicated circuit for the Cobra. That's my recommendation, not OneLaser's.

### 3. Chiller (required)

The Cobra **must** have water cooling, and it doesn't come with a chiller. OneLaser recommends a real industrial chiller over a bucket pump for this much power.

**Chiller options:**
- [OneLaser Chiller for Hydra & Cobra](https://www.1laser.com/products/onelaser-industrial-chiller-for-hydra-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }: 1,400 W cooling, rated for one 150 W or two 100 W tubes, with constant and intelligent modes
- [CW-5200 chiller](https://www.1laser.com/products/cw-5200-industrial-water-chiller?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

**Hookup:**
1. Chiller **OUTLET** → Cobra **water INLET**, using the blue hose.
2. Cobra **water OUTLET** → chiller **INLET**, using the white hose.
3. Connect the included **chiller alarm cable** to the **Chiller Alarm** port.
4. Clamp both hoses.

**Coolant:** fill with **distilled water**. Don't use generic coolant or car antifreeze; OneLaser warns it can leave residue and clog the lines. For winter, use their [approved antifreeze](https://wiki.1laser.com/en/accessories/approved-antifreeze) at the recommended 3:7 mix.

**Chiller settings:** I run constant mode at about 18 °C in my un-air-conditioned shop. Here's how I [program a chiller](https://youtu.be/6aOOl0uVssQ).

### 4. Exhaust

1. Run one 6″ pipe from the machine's exhaust to the fan inlet.
2. Run the second pipe from the fan outlet to outside, or to a purifier.
3. Plug the fan into the **Exhaust Fan** port on the back.

**Automatic run-on:** the Cobra runs the fan automatically and keeps it going about 30 seconds after a job.

**Need more airflow?** The [AC Infinity CLOUDLINE S6](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } and [VIVOSUN 6″ 390 CFM](https://www.amazon.com/dp/B01DXYMJ94?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } are both 6″ fans, so they match the 6″ duct, and [6″ aluminum duct](https://www.amazon.com/dp/B0791V19H7?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } is an easy add.

OneLaser hasn't published a required CFM. See [Ventilation and safety](../machines/ventilation-and-safety.md).

### 5. Air assist

The manual says to connect an **air assist pump** to the machine's air intake with a **6 mm hose**. The pump isn't on the package list.

**What to plan for:** your own pump, or better, a compressor with a regulator. The Cobra's Smart Dual Air-Assist switches between low and high air on its own. The pump runs only during jobs and shuts off 15 seconds after.

**Add-on:** the [OneLaser Air Assist Control](https://www.1laser.com/products/air-assist-for-laser-engraver-cutter?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } is available. For compressor gear, see [Gear we use](../buying-guides/gear-we-use.md).

### 6. Start-up order

OneLaser spells out a start-up order, and it matters. The Cobra's power supplies need to come up in sequence.

1. Flip the circuit breaker on.
2. Turn on the **chiller**.
3. Turn on any extra ventilation or purifier.
4. Twist the **e-stop** up. The head will home.
5. Press the **control power** button.
6. Turn the **laser key**.
7. Wait for standby.

**Shutting down:** go in reverse.
1. Close the software and unplug USB or Ethernet.
2. Remove the laser key, then turn off control power and press the e-stop.
3. Let the fans and chiller run a bit.
4. Shut off the chiller, then the breaker.

### 7. Pre-use safety tests

OneLaser wants you to run these before the first job. They take five minutes.

1. **E-stop:** press it mid-fire. The beam should stop.
2. **Lid interlock:** open the lid mid-fire. The beam should stop.
3. **Water interlock:** pinch the hoses briefly. The beam should stop.
4. **Beam check:** tape over the nozzle and fire. You want the hole centered.
5. **Air assist:** confirm it's connected and blowing.

If any test fails, fix it before running jobs.

### 8. Alignment

OneLaser aligns the Cobra at the factory but recommends checking it **on arrival and weekly after that**.

**Their method:** tape at each stage (never directly on a mirror), max power at **15 % or less** so the tape marks instead of burning, then pulse. Work through it in order: tube → mirror 1 → mirror 2 → mirror 3 → bed. Adjust with the tube brackets or the mirror set screws.

**My videos:** these walk through the same principles on other glass-tube machines.
- [Laser alignment principles](https://youtu.be/6GtwjxUpEEs)
- [CO₂ mirror and beam alignment](https://youtu.be/tFbuOs_98n8)

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/6GtwjxUpEEs" title="Laser Alignment Principles — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 9. Connect LightBurn

**Install:** get the [LightBurn trial](https://lightburnsoftware.com/pages/download-trial) and install the USB driver if you're going over USB.

**USB or Ethernet cable:**
- Use **Devices → Find My Laser**.
- Keep the USB cable under **15 ft**.
- Mac users may need a USB or Ethernet adapter or dock.

**Network (Ethernet or Wi-Fi):**
1. Use **Create Manually** and choose **Ruida**. The IP has to match the Cobra's exactly.
2. The computer and Cobra must be on the same subnet, for example 192.168.1.x.

**Wi-Fi hotspot mode:**
- Join the 2.4 GHz network named after the model, for example "Cobra 8". It has no default password.
- Set the Cobra's IP within **192.168.20.x**, with a last number that doesn't match the hotspot's.

**Wi-Fi repeater mode:** bridges the Cobra to your shop Wi-Fi. Your router must be **Wi-Fi 4/5**; Wi-Fi 6 or newer won't bridge.

**Scanning offsets:** your Cobra ships with them on the USB drive and the anodized card. LightBurn can't read them from the machine, so enable *Scanning Offset Adjustment* and type them in.

**Back up your machine settings** next.

### 10. Focus and first job

**Autofocus:** press the AF button **once** and let it finish. Keep the material clear of the head as the bed rises.

**Manual focus:** the laser key ring includes a **focal-length ruler**.

**First job:**
1. Run test cards.
2. Start from OneLaser's [100 W](https://wiki.1laser.com/en/knowledge-base/material-processing/different-materials-parameters/100w) or [130 W](https://wiki.1laser.com/en/knowledge-base/material-processing/different-materials-parameters/130w) parameter pages.
3. Use the [finding your settings](../materials/starter-settings.md) method to dial it in.

### 11. Maintenance rhythm

This is from OneLaser's Cobra manual:

| How often | What to do |
|---|---|
| Daily | Clean the work table. Check mirror 3 and the focus lens |
| Weekly | Check the other mirrors, exhaust, and air-assist intake filter. Check beam alignment. Check wiring for loose connections, especially the tube power supply |
| Twice a month | Clean and lube the rails |
| Monthly | Check air assist. Check the whole machine, including the chiller |

**Cleaners:** OneLaser's Cobra manual allows lens tissue, lens cleaning fluid **or** isopropyl alcohol on the optics. I use 99 % IPA and Q-tips, wiping side to side. Video: [Lens removal and cleaning](https://youtu.be/HpaPEYRWnzw)

## Home/shop checklist

1. **Space and delivery:** 400–770 lb, so check the doorway. Leave room for the chiller and duct.
2. **Electrical:** dedicated circuit, 14 AWG minimum, grounded, no power strips. I'd use 20 A. The chiller goes on its own outlet.
3. **Cooling:** your own chiller, distilled water, alarm cable connected.
4. **Exhaust:** included fan and 6″ pipe, vented outside.
5. **Air:** your own pump or compressor on the 6 mm intake.
6. **Safety:** extinguisher nearby, never run unattended, pre-use tests done. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).

## Still unknown / confirm with OneLaser

- **Air pump:** whether one ships with any Cobra package. The manual references one, but it's not on the package list.
- **Exhaust:** the required CFM, and which is right on the fan (spec chart says optional, manual says included).
- **Coolant temperature:** the target coolant temperature for the Cobra specifically. I use 18 °C, following common glass-tube practice.
- **My own Cobra video:** I haven't filmed a Cobra yet.

## Sources and more videos

**OneLaser:**
- [Cobra Series Wiki](https://wiki.1laser.com/en/onelaser-cobra)
- [Cobra User's Manual (wiki)](https://wiki.1laser.com/onelaser-cobra/user-manual)

**My glass-tube videos:**
- [Alignment principles](https://youtu.be/6GtwjxUpEEs)
- [Mirror and beam alignment](https://youtu.be/tFbuOs_98n8)
- [Program your chiller](https://youtu.be/6aOOl0uVssQ)
- [Lens cleaning](https://youtu.be/HpaPEYRWnzw)
- [Best laser for your small business](https://youtu.be/HOh6qitWLqI)

<div class="bb-cta" markdown="1">
**Buying a Cobra?** Use my partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then learn LightBurn properly with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-cobra-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner. OneLaser links include my referral, and I may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.** OneLaser Wiki content is summarized in my own words and linked as the source.
