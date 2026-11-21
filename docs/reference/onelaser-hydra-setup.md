---
title: OneLaser Hydra Gen2 Setup Guide
description: How to set up a OneLaser Hydra (Gen2 Pro or Hybrid), with OneLaser's official steps, my notes from setting up my Hydra 13, and video walkthroughs.
---

<!-- DRAFT (not rendered): OneLaser setup reference. Sources: 1laser.com product pages, Hydra Gen 2 User's Manual (PDF, rev. 251126), OneLaser Wiki (wiki.1laser.com), Brandt's Hydra 13 setup series on YouTube. Captured Nov 14, 2026. -->

# OneLaser Hydra Gen2 Setup Guide

My Hydra 13 is the big cutter in my shop. It has a 130 W glass tube for cutting plus a 38 W RF tube for detail, and it'll take most of a 4×8 sheet if I trim one end. I filmed the whole setup as a five-part series, and each step below links the part (and the spot in it) where I do that step. This page combines OneLaser's official Gen2 instructions with what I ran into doing it myself.

!!! info "Gen1 vs Gen2"
    My Hydra 13 is a first-generation hybrid (130 W glass + 38 W RF), and **every video in my Hydra series was filmed on that Gen1 machine**. Most of the setup is the same on Gen2. Where my notes or videos show Gen1 hardware, I've said so.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Running a Hydra? Master LightBurn shows you how to get production-speed results from it.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup)
</div>

Hydra Gen2 is a floor-standing **CO₂** gantry laser with servo motion. It comes two ways:

- **Pro:** a 70 W **RF** tube only. It's air-cooled and needs no chiller. Available in sizes 7, 9, 13 and 16.
- **Hybrid:** a 38 W RF tube for engraving plus a **glass** tube for cutting: 100 W on the Hydra 9, 130 W on the 13, 150 W on the 16. The glass tube **needs a water chiller**.

Models: [Hydra 7 Gen2](https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 9 Gen2](https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 13 Gen2](https://www.1laser.com/products/hydra-13-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" } · [Hydra 16 Gen2](https://www.1laser.com/products/hydra-16-gen-2-70w-rf-co2-dual-laser-machine?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

!!! tip "Full Hydra series (my YouTube playlist)"
    Filmed on my Gen1 Hydra 13. Watch the whole thing in the [Hydra Setup From One Laser playlist](https://www.youtube.com/playlist?list=PLCIBAT87HNgY5HlJub9LA7I58HGqKWCo6).

    1. [Part 1 – OneLaser Hydra 13 Unboxing & Setup Guide | Laser Machine Crate Removal](https://youtu.be/jIzhCY4Srfo)
    2. [Part 2 – Unwrapping, Inspection & Accessories Overview](https://youtu.be/mvyz4rRrLws)
    3. [Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM)
    4. [Part 4 – How to Check CO2 Laser Alignment (Glass + RF)](https://youtu.be/I1nl4DLJdhE)
    5. [Part 5 – Connect to LightBurn & Run Your First Project](https://youtu.be/uB9iavKPw44)

    Follow-ups: [Install Compressor Air Assist for Cleaner Cuts & Engraving](https://youtu.be/nuc9LDctHps) · [How to Clean a CO2 Laser Lens & Mirrors | Hydra 13](https://youtu.be/aefgWz4-gKs) · [Why did they buy a Hydra 9??? (Hooks Design Co)](https://youtu.be/MHP87JAPBc8)

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

**What I found unwrapping mine (Gen1):**
- Check the crate itself first. Crate damage is your cue to contact OneLaser before you go further.
- Open the rear and side doors with the panel keys and look over the glass tube closely. A few water spots inside are normal, since they test-fire before shipping.
- The toolbox had a lens/mirror tool, a second wider nozzle (handy for longer focal lenses), power cords, the chiller alarm cable, network and USB cables, chiller hoses, Allen keys and a bottle of antifreeze.
- The exhaust kit was an **8″ fan with 8″ duct**, matching an 8″ port on the machine, plus a good-sized stock air pump.
- The chiller rode in my crate, but it's a separate purchase. Make sure it's in your cart.

**Getting it off the pallet:** the Hydra sits on real casters. Raise the leveling feet, unlock the wheels, and roll it down a ramp. I built mine from the crate panels with some plywood strips under the wheel paths. Two people handled it. A forklift or skid steer works too.

**Watch:** [Hydra series Part 1 – OneLaser Hydra 13 Unboxing & Setup Guide | Laser Machine Crate Removal](https://youtu.be/jIzhCY4Srfo) — ramp plan at [3:11](https://youtu.be/jIzhCY4Srfo?t=191s), casters at [3:31](https://youtu.be/jIzhCY4Srfo?t=211s), rolling it off at [4:57](https://youtu.be/jIzhCY4Srfo?t=297s).

**Watch:** [Hydra series Part 2 – Unwrapping, Inspection & Accessories Overview](https://youtu.be/mvyz4rRrLws) — inspection and accessories walkthrough (no chapters or timestamps available).

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/jIzhCY4Srfo" title="Hydra series Part 1 – Crate Removal — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 2. Electrical: plan for 20 A

The plugs on my Hydra are **20 A plugs**, and all the accessories plug into the back of the cabinet: the exhaust fan, air pump and chiller. Everything draws through that one cord.

**What I recommend:** a dedicated **20 A circuit with a 20 A receptacle**. On less, you risk tripping the breaker or running the line hot.

**What OneLaser says:** "confirm circuit capacity," but no amperage figure is published for Gen2. Ask them if you're wiring a new circuit.

**Watch:** [Hydra series Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM?t=20s) at 0:20 — the 20 A plug on my Gen1 machine.

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

**Fan size:** OneLaser says Hydras need a stronger fan than their X-Series target of ~366 m³/h at 578 Pa ([source](https://wiki.1laser.com/en/x-series/smoke-escaping-exhaust-optimization)). They don't publish an exact Hydra number. My Gen1 Hydra 13 shipped with an 8″ fan and 8″ duct to an 8″ port, so no 6″-to-8″ adapter.

**Watch:** [Hydra series Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM?t=62s) — fan direction and placement at [1:02](https://youtu.be/or8JsjOrjMM?t=62s), clamps at [1:44](https://youtu.be/or8JsjOrjMM?t=104s), plugging into the back at [2:06](https://youtu.be/or8JsjOrjMM?t=126s).

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

**High vs low air from LightBurn:** with the Air Assist Control installed, turning **Air** on in a layer asks for high flow and turning it off gives low flow. I leave it off for engraving and on for cuts.

**Smart fan and pump control:** the controller's **Menu → External devices** has an intelligent mode that runs the pump and exhaust with start and end delays. I turn it off so both run at 100 % the whole time.

For a regulator and quiet compressor, see [Gear we use](../buying-guides/gear-we-use.md).

**Watch:** [Hydra series Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM?t=146s) — stock air pump hookup at [2:26](https://youtu.be/or8JsjOrjMM?t=146s), external-devices smart mode at [12:27](https://youtu.be/or8JsjOrjMM?t=747s).

**Watch:** [Hydra follow-up: Install Compressor Air Assist for Cleaner Cuts & Engraving](https://youtu.be/nuc9LDctHps) — what's in the kit at [0:41](https://youtu.be/nuc9LDctHps?t=41s), bypassing the stock solenoid at [1:22](https://youtu.be/nuc9LDctHps?t=82s), compressor and regulator pressures at [13:19](https://youtu.be/nuc9LDctHps?t=799s), high/low flow in LightBurn at [14:22](https://youtu.be/nuc9LDctHps?t=862s).

### 5. Chiller (Hybrid only)

Use the OneLaser chiller or an S&A CW-5000-series unit, per the manual. OneLaser sells the [OneLaser Chiller for Hydra & Cobra](https://www.1laser.com/products/onelaser-industrial-chiller-for-hydra-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }. My chiller was a separate purchase (it shipped in the same crate). Whatever you buy, make it a real refrigerated chiller, a 5000-series or higher, not a passive radiator unit.

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

**Antifreeze:** OneLaser's [approved antifreeze guide](https://wiki.1laser.com/en/accessories/approved-antifreeze) recommends pure distilled water above 5 °C (41 °F) and a **3:7 antifreeze-to-water** mix going into winter. Don't mix brands, and replace it every 2–3 months. Cold shop? See [Winterizing your laser shop](../machines/winterization.md).

**Setting the mode:**
- **Intelligent mode** is fine in an air-conditioned shop (mid-70s °F or cooler).
- I'm in an un-air-conditioned garage, so I use **constant mode**.
- On my chiller: hold **Up + SET** until it shows 0, enter password **08**, change **F3** to constant, then set the temperature in **F0**. I use about **18 °C**.
- Menus can vary by chiller, so check yours.

**Chiller won't power on?** OneLaser has a [troubleshooting page](https://wiki.1laser.com/en/hydra-series/chiller-not-power-on-ac-contactor-fix) for that, under the heading "Chiller does not power on (AC contactor blue button not engaging)".

**Watch:** [Hydra series Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM?t=229s) — alarm cable and hoses at [3:49](https://youtu.be/or8JsjOrjMM?t=229s), coolant and filling at [4:10](https://youtu.be/or8JsjOrjMM?t=250s), hookup at [5:26](https://youtu.be/or8JsjOrjMM?t=326s), checking the tube for leaks and bubbles at [8:14](https://youtu.be/or8JsjOrjMM?t=494s), intelligent vs constant mode at [9:18](https://youtu.be/or8JsjOrjMM?t=558s), programming F3/F0 at [10:01](https://youtu.be/or8JsjOrjMM?t=601s).

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/or8JsjOrjMM?start=229" title="Hydra series Part 3 – Chiller, Exhaust & Air Pump — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 6. First power-on

1. Make sure the e-stop is up.
2. Insert the laser key and switch on. Hybrids need the chiller running first.
3. Confirm the homing prompt on the screen.
4. Jog **X, Y and Z** to make sure everything moves the right way.

OneLaser's manual also says to check that the exhaust and cooling indicators show normal before running.

**Test the interlocks:** **Menu → Diagnostics** shows each sensor live. Open a door or the lid and confirm it registers before you fire anything.

**Watch:** [Hydra series Part 3 – How to Set Up a CO2 Laser Chiller, Exhaust & Air Pump](https://youtu.be/or8JsjOrjMM?t=408s) at 6:48 — keys, e-stop, first power-on and homing.

**Watch:** [Hydra series Part 4 – How to Check CO2 Laser Alignment (Glass + RF)](https://youtu.be/I1nl4DLJdhE?t=20s) — controller tour at [0:20](https://youtu.be/I1nl4DLJdhE?t=20s), manual nudge moves at [1:45](https://youtu.be/I1nl4DLJdhE?t=105s), diagnostics and interlocks at [4:14](https://youtu.be/I1nl4DLJdhE?t=254s).

### 7. Check alignment

OneLaser aligns these at the factory. Their manual still says to run a test first, because parts can shift in shipping. I check it this way:

1. Tape over the laser head.
2. On the touchscreen, go to **Menu → Alignment**.
3. Use the preset corners: pulse at **upper left** (closest to the tubes), then **bottom right** (farthest).
4. Do it for **laser 1** and **laser 2**. On my machine I used about **20 %** on the 130 W glass tube and **90 %** on the 38 W RF for the tape test.
5. If the marks stack, you're good.

If they don't stack, see my [alignment principles](https://youtu.be/6GtwjxUpEEs) video before touching anything. You can also run MakerBoost's *Scanning offset adjust* to fix line shift.

**Watch:** [Hydra series Part 4 – How to Check CO2 Laser Alignment (Glass + RF)](https://youtu.be/I1nl4DLJdhE?t=527s) — alignment menu and pulse power at [6:20](https://youtu.be/I1nl4DLJdhE?t=380s), tape check at [9:09](https://youtu.be/I1nl4DLJdhE?t=549s), glass tube at [9:50](https://youtu.be/I1nl4DLJdhE?t=590s), RF tube at [10:32](https://youtu.be/I1nl4DLJdhE?t=632s), where the adjustments are (including the RF lift mirror) at [11:33](https://youtu.be/I1nl4DLJdhE?t=693s).

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/I1nl4DLJdhE?start=527" title="Hydra series Part 4 – Check CO2 Laser Alignment — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 8. Connect LightBurn

**Basic setup:**
1. Install [LightBurn](https://lightburnsoftware.com/pages/download-trial) (the trial works to start). Ruida/DSP machines need the **Pro** license after the trial, and you must install the **DSP/Ruida drivers** during setup or the computer can't talk to the laser.
2. With the laser on and connected by USB, go to **Devices → Find My Laser**, pick the serial option and **Add Device**.
3. Name it, set the origin to **rear left**, then **Finish**. LightBurn 2.0+ means you can skip the RDWorks steps in the manual.
4. In **Device Settings → Basic**, turn on **Enable Laser 2 controls** and **Laser 2 is RF tube**. Each layer then gets a Laser 1 / Laser 2 choice.
5. Switch LightBurn to **millimeters**, enable **Scanning Offset Adjustment**, and type in the values from the card OneLaser includes, one column per tube.
6. Back up your machine settings right away.

**Wi-Fi:** this follows OneLaser's [Hydra Wi-Fi guide](https://wiki.1laser.com/en/hydra-series/connect-hydra-to-lightburn-via-wifi).
1. Inside the bottom-right door, make sure the network module switch is set to **Wi-Fi** (button 1), not LAN.
2. Join the **"Hydra Hotspot + last five digits of the serial"** network. The default password is 12345678.
3. Set the laser's IP within **192.168.254.x**. Don't reuse an address already on the network.
4. In LightBurn, use **Create Manually** with that IP.

**Using your shop Wi-Fi instead:** you can bridge the hotspot to your shop router. If you have a Wi-Fi 6 router, turn on Wi-Fi 4/5 compatibility.

**Watch:** [Hydra series Part 5 – Connect to LightBurn & Run Your First Project](https://youtu.be/uB9iavKPw44) — skipping RDWorks in 2.0 at [0:23](https://youtu.be/uB9iavKPw44?t=23s), Pro license and drivers at [0:45](https://youtu.be/uB9iavKPw44?t=45s), Find My Laser at [1:05](https://youtu.be/uB9iavKPw44?t=65s), rear-left origin at [1:53](https://youtu.be/uB9iavKPw44?t=113s), laser 2 controls at [2:34](https://youtu.be/uB9iavKPw44?t=154s), scanning offsets at [3:17](https://youtu.be/uB9iavKPw44?t=197s).

**Wi-Fi:** I haven't filmed the Hydra Wi-Fi setup. The IP settings menu on the controller shows up in [Part 4 at 3:51](https://youtu.be/I1nl4DLJdhE?t=231s).

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/uB9iavKPw44" title="Hydra series Part 5 – Connect to LightBurn — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 9. Focus

This follows OneLaser's [focus guide](https://wiki.1laser.com/en/hydra-series/how-to-focus-laser).

**Autofocus:** it's a touch probe. Pick **Focus → OK** on the screen.
- **Always have material under the head** when you run it, or the probe can overtravel and damage the head or table.

**Manual focus:** use this for soft or springy material like leather or foam.
1. Cut a gauge from **6 mm acrylic**.
2. Slide it under the head.
3. Raise the bed until the head just touches the gauge.

**Watch:** [Hydra series Part 4 – How to Check CO2 Laser Alignment (Glass + RF)](https://youtu.be/I1nl4DLJdhE?t=483s) at 8:03 — the autofocus button and its "put something under the head" warning.

### 10. Maintenance rhythm

**Cleaning the optics:** OneLaser's [maintenance guide](https://wiki.1laser.com/en/hydra-series/maintenance-guide) says to use their lens cleaning solution or **anhydrous ethanol**, and **not isopropyl alcohol**, which they say can damage the mirror coatings.
- **Heads up:** in my cleaning video below I used 99 % IPA. Go with OneLaser's recommendation to protect your warranty.
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

**Watch:** [Hydra follow-up: How to Clean a CO2 Laser Lens & Mirrors | Hydra 13](https://youtu.be/aefgWz4-gKs) — supplies at [0:20](https://youtu.be/aefgWz4-gKs?t=20s), mirrors at [1:22](https://youtu.be/aefgWz4-gKs?t=82s), the pass-through mirror at [3:04](https://youtu.be/aefgWz4-gKs?t=184s), the focus lens at [3:46](https://youtu.be/aefgWz4-gKs?t=226s), lens orientation at [5:18](https://youtu.be/aefgWz4-gKs?t=318s). Swap the IPA for OneLaser's cleaner or anhydrous ethanol.

<div class="bb-video" markdown="0">
<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/aefgWz4-gKs" title="How to Clean a CO2 Laser Lens & Mirrors – Hydra 13 — Bearded Builds Co" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 11. First project

Once LightBurn shows **Ready** and the offsets are in, run a small engrave on the RF tube and a cut on the glass tube. Start from the settings OneLaser includes, then dial in with test cards.

**Watch:** [Hydra series Part 5 – Connect to LightBurn & Run Your First Project](https://youtu.be/uB9iavKPw44?t=332s) at 5:32 — finding your own scanning offsets, then running the first projects.

## Home/shop checklist

1. **Delivery:** confirm the doorway and floor first, and leave room behind for the exhaust and chiller.
2. **Electrical:** dedicated 20 A circuit and receptacle.
3. **Exhaust:** included fan, vented outside, never off while lasing. See [Ventilation and safety](../machines/ventilation-and-safety.md).
4. **Air:** a compressor (55 PSI max into the machine) if you're cutting.
5. **Cooling (Hybrid):** chiller with distilled water or approved antifreeze, alarm cable connected.
6. **Safety:** CO₂ extinguisher nearby, never run unattended, interlocks intact. See [Laser eye safety and fire](../safety/laser-eye-safety-and-fire.md).

## Still unknown / confirm with OneLaser

- **Amperage:** OneLaser hasn't published Gen2 amperage; 20 A is my recommendation based on my machine's plug.
- **Exhaust:** the exact fan spec for Gen2 Hydras ("higher than X-Series"). My Gen1 had an 8″ port, fan and duct; confirm Gen2 matches.
- **Size and weight:** for the Hydra 13 and 16 Gen2.
- **Chiller:** it was a separate purchase for my Gen1 (the antifreeze bottle was in the toolbox). Confirm what Gen2 Hybrid bundles include.
- **Laser class:** Class 1 vs Class II.

## Sources

**OneLaser:**
- [Hydra Series Wiki](https://wiki.1laser.com/en/hydra-series)
- [Hydra Gen 2 manual (wiki)](https://wiki.1laser.com/hydra-gen-2)
- [Hydra Gen 2 User's Manual (PDF)](https://cdn.shopify.com/s/files/1/0747/8748/7778/files/ONELASER_Hydra_Gen_2_Users_Manual-251126.pdf?v=1773987311)

**My videos:** the full Hydra series is listed near the top of this page. Also: [Best laser for your small business](https://youtu.be/HOh6qitWLqI)

**Accessories:**
- [Multi-Function Rotary (Hydra & Cobra)](https://www.1laser.com/products/multi-function-rotary-axis-57-motor?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }
- [Focal lens (Hydra & X Series)](https://www.1laser.com/products/2-inch-focal-lens-laser-engraver?sca_ref=10053141.1zp8EjLd81){: rel="nofollow sponsored" target="_blank" }

<div class="bb-cta" markdown="1">
**Buying a Hydra?** Use my partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) and code `BEARDEDBUILDS`. Then dial in production with [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=onelaser-hydra-setup).
</div>

!!! note "Disclosure"
    Bearded Builds Co is a OneLaser partner. OneLaser links include my referral, and I may earn a commission at no extra cost to you. **As an Amazon Associate I earn from qualifying purchases.** OneLaser Wiki content is summarized in my own words and linked as the source.
