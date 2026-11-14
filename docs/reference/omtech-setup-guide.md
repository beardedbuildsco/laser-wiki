---
title: OMTech CO2 Laser Setup Guide
description: Bearded Builds Co's step-by-step setup order for a new OMTech CO2 laser, from tube and cooling to your first test cards.
---

<!--
INTERNAL NOTE (not rendered): reference page kept for OMTech ("home tech") customer cases so it can be sent to customers.
Adapted from https://www.laser-guys.com/setup — rewritten in Bearded Builds voice with credit. Draft branch only; do not merge without Brandt's review.
-->

# OMTech CO₂ Laser Setup Guide

!!! quote "Credit"
    Adapted from the [Laserguys OMTech setup guide](https://www.laser-guys.com/setup). Big thanks to Cam Edmonds and the Laserguys crew for putting together the original setup order that so many of us learned on.

You've got the crate open and the laser sitting where it's going to live. This page walks you through everything between that moment and your first real test cut, in the order I'd do it in my own shop.

Work through the steps in order. A couple of them won't apply to your model, and that's fine. Skipping the ones that *do* apply is how you end up chasing weak cuts and fuzzy engraves for weeks.

!!! tip "Running a OneLaser instead of an OMTech?"
    Use the machine-specific versions: [X-Series (XT / XRF)](onelaser-x-series-setup.md) · [Hydra Gen2](onelaser-hydra-setup.md).

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Once it's set up, Master LightBurn takes you from test card to sellable work.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=omtech-setup-guide)
</div>

**The setup order at a glance**

1. Laser tube (if yours shipped without one installed)
2. Cooling: stock pump or chiller
3. Inline exhaust fan
4. Lens orientation
5. Bed tram (level)
6. First power-on
7. Mirror alignment
8. Clean the optics
9. Install LightBurn
10. Add your laser in LightBurn
11. Back up your machine settings
12. Ramp test for focus
13. Test cards

---

## 1. Laser tube (if it isn't already in)

Some OMTech models ship with the tube installed, and some ship with it packed separately. You'll run into three tube brands:

- OMTech's own branded tubes
- YongLi (YL)
- EFR

**Connections:** OMTech and YL tubes use screw terminals. EFR tubes attach the same general way but use a high-voltage connector.

!!! danger "High-voltage leads"
    Don't solder them. Don't wrap them in electrical tape or heat shrink, and don't twist them together under a wire nut. Any of those will arc, and an arcing connection kills a tube early.

**The tape on the tube:** if your tube came pre-installed with tape along its length, it's just shipping tape holding the wiring and hoses still. The tube body doesn't get hot, so you can leave it on. I take mine off because it gets in the way when I wipe the tube down.

**Install videos:**

- EFR-style tubes: [Edmonds Woodshop](https://youtu.be/SDt2-lIZJEA) · [OMTech Laser](https://youtu.be/fAMP9mzIdBc)
- YL / OMTech-style tubes: [Edmonds Woodshop](https://youtu.be/0JPcG7gvKLs) · [VanStray](https://youtu.be/pL2YRUEoKmk) · [Laser Everything](https://youtu.be/ZEbG1WwlSCQ)

## 2. Cooling: stock pump or chiller

A CO₂ glass tube needs water moving through it the whole time it fires. **Use distilled water, every time.**

### If you're using the stock pump

OMTech ships a submersible pump meant to sit in a tub of water.

- **Swap the tub for a bucket with a lid.** Debris stays out, and so does whatever else in the shop wants to fall in.
- **Know the temperature window.** The tube runs in a 15–25 °C range, and it's happiest at 18–21 °C.
- **Plan on ice.** With the stock pump, the only way to hold that range is to drop in ice packs or frozen water bottles.
- **Add a thermometer.** A cheap aquarium thermometer like this [digital one](https://www.amazon.com/dp/B07NWY9G2Q?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" } takes the guesswork out.
- **Bigger tubes need more.** At 100 W and up, the stock pump may not keep up. On the 130 W and 150 W OMTech models, a real chiller isn't optional.

Video: [Stock water pump install (OMTech Laser)](https://www.youtube.com/watch?v=xE6i3UiXViU&t=90s)

### If you're upgrading to a chiller

OMTech sells three units:

- **CW3000:** really a radiator with a fan, not a true chiller. It's OK on smaller 40–50 W machines.
- **CW5200:** a compressor-based chiller that refrigerates the water.
- **CW5202:** the same compressor design as the CW5200, but with two circuits so one unit can cool two lasers.

**Hooking up a CW5200 or CW5202:**

1. Run the chiller's **OUTLET** to the laser's **INLET**.
2. Run the chiller's **INLET** to the laser's **OUTLET**.
3. On 130 W and 150 W machines, connect the alarm cable between the chiller and the laser.
4. Top the chiller off with distilled water before it ever gets power. It holds roughly 2 gallons, and you can check the level in the window on the back.
5. Running a CW5202 with only one laser? Loop a short piece of tubing from outlet B back to inlet B.
6. Clamp every water connection with spring clamps or hose clamps. This applies to the stock pump setup too.

**Air bubbles:** pea-size or larger bubbles stuck in the tube are bad news. Pinch the water line for a second or two and let go. The pulse usually breaks them loose.

**Chiller modes on the CW5200 and CW5202:**

- **Intelligent:** holds the water within about 5° of room temperature. Great in a climate-controlled shop, but not in a hot garage.
- **Constant:** holds the water within about 5° of a temperature you set. Use this one if your shop gets hot.

Videos: [CW5200 install (Wrights Woodworks)](https://youtu.be/r4lkmlmhKFM) · [Programming your chiller (Bearded Builds Co)](https://youtu.be/6aOOl0uVssQ)

## 3. Inline exhaust fan

The stock fans on these machines don't move enough air to clear the smoke. Plan on an inline fan from day one. Fans I'd look at:

- [AC Infinity CLOUDLINE S6](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }
- [VIVOSUN 6″ 390 CFM](https://www.amazon.com/dp/B01DXYMJ94?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }
- [6″ flexible aluminum ducting](https://www.amazon.com/dp/B0791V19H7?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }

More options are on [Gear we use](../buying-guides/gear-we-use.md).

**Installing it:**

- Point the fan's airflow toward the outside, and mount it closer to the exit end of the duct run than to the laser.
- How you route it (window, wall, or something else) depends on your space.
- Example install: [Laser venting (MericaLaser)](https://youtu.be/waR4gDGH_po)

**Pull the stock fan.** Its airflow doesn't match the inline fan's, so leaving it in just creates a choke point. The process is the same on every OMTech:

1. Unbolt the stock fan and remove it.
2. Take off the grate.
3. Cut the fan wires and cap the ends with wire nuts.
4. Push the duct into the hole you just opened. 6″ flex duct is a snug fit.

Video (older, but still accurate): [Removing the stock fan (Edmonds Woodshop)](https://youtu.be/mHfyE5m8ZOs)

## 4. Lens orientation

Factory lenses get installed upside down more often than you'd think. **The curved side faces up.** Look into it, and if you can see your reflection, it's the right way.

Where the lens lives depends on the model:

- **Up in the lens tube:** unscrew the collar and slide the nozzle all the way down. The lens sits inside with a retaining ring. Snap-ring pliers work if you don't have a lens tool.
- **In the nozzle:** spin the nozzle off, and a silver retaining ring holds the lens in. That ring unscrews too.

Videos: [Lens orientation (Wrights Woodworks)](https://www.youtube.com/watch?v=Al_GrYgdsfM) · [Lens removal & cleaning (Bearded Builds Co)](https://youtu.be/HpaPEYRWnzw)

## 5. Bed tram (level)

"Level" here doesn't mean level to the floor. It means the nozzle stays the same distance from the bed everywhere the head can travel.

**How to check:**

1. Jog the head to each corner and measure from the nozzle to the bed.
2. If the four numbers don't match, adjust the screw rails at the bed corners until they do.

If you skip this, you'll get engraves that fade from one side of the bed to the other and cuts that go through in one spot but not another.

Video: [How to level your laser bed](https://youtu.be/5rFjYjVboPc)

## 6. First power-on

The first time you power up, **watch which corner the head travels to.** That's your machine's home, or origin, and you'll need it when you set the laser up in LightBurn. Rear-right and rear-left are both common. Some heads hit the corner and then drift back to the middle, which is normal.

**Power-up checklist:**

1. **Two power cords?** Some bigger machines have two. Plug both in and make sure they're seated. Every one of these lasers has two supplies inside: a 24 V supply and a tube power supply.
2. **Turn the key to the right.** That only powers the laser tube supply.
3. **Release the e-stop.** Make sure it's popped up.
4. **Press the power button.** That brings up the 24 V side: motors, lights and the control panel.
5. **mA dial:** if your machine has one, leave it at MAX. If it's turned down, the laser may not fire.
6. **Side toggle switches:** if you have them, make sure they're on and lit.

## 7. Mirror alignment

**Don't skip this one.** The goal is a beam that runs parallel to the X and Y axes and drops straight down the nozzle through the lens. Some machines show up aligned; plenty get knocked out on the trip.

**How I think about it:**

- **Stack the dots first; centering comes later.** At first you're only trying to get the burn marks at the near and far positions to land on top of each other.
- **Mirror 1 → 2:** compare a pulse with the head at the back of the machine, where mirrors 1 and 2 are closest, against one at the front, where they're farthest apart.
- **Mirror 2 → 3:** same idea, but compare the left side of the machine (close) against the right side (far).
- **Only mirror 3 needs to be centered.** Once the pulses stack, shim and adjust the tube to aim the beam at the center of mirror 3, then check again. A centered hit on mirror 3 sends the beam straight down the tube.
- **Go easy at the far position.** Tiny adjustments there make big moves.

**Videos:**

1. [Laser mirror alignment how-to (Edmonds Woodshop)](https://youtu.be/GyOKzy-riLE)
2. [Aligning OMTech mirrors (Edmonds Woodshop)](https://youtu.be/G-HhArItCqQ)
3. [Laser alignment principles (Bearded Builds Co)](https://youtu.be/6GtwjxUpEEs)
4. [CO₂ mirror & beam alignment (Bearded Builds Co)](https://youtu.be/tFbuOs_98n8)
5. [Laser cutter mirror alignment (MakeStuffNow!)](https://youtu.be/e1c3keOKL6Y)
6. [Align your laser in 5 steps (Maker Monkey Industries)](https://youtu.be/oSzFJGCPapc)

More on this: [Focus and alignment](../machines/focus-and-alignment.md)

## 8. Clean the optics

Alignment tape leaves residue, and the beam is only as good as the surfaces it bounces off.

**What you need:** 99% isopropyl alcohol, though 91% works. Here's the [99% IPA I use](https://www.amazon.com/dp/B07NFSFBXQ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }. Pair it with a lint-free lens cloth or microfiber and some swabs.

**Steps:**

1. Pull the lens out of the nozzle.
2. Put a little alcohol on the cloth and clean the lens.
3. Reinstall it **curved side up**.
4. Wipe mirrors 1 and 2 with the cloth and a little alcohol.
5. Clean mirror 3 with a swab.
6. Swab the output window on the tube's exit end. It's a semi-transparent mirror and gets dirty too.

Videos: [Cleaning mirrors and lenses (OMTech Laser)](https://youtu.be/igrO8ph1bwI) · [Lens removal & cleaning (Bearded Builds Co)](https://youtu.be/HpaPEYRWnzw)

## 9. Install LightBurn

Your laser ships with RDWorks, but I'd run LightBurn. It's easier to design in, easier to learn, and it has a strong support forum, both from the developers and from other users.

- [Download the 30-day full trial](https://lightburnsoftware.com/pages/download-trial) (official site)
- [Buy LightBurn (DSP license for Ruida controllers)](https://lightburnsoftware.com/products/lightburn-dsp) (official site)

**Windows:** when the installer offers **"install FTDI serial driver,"** check that box. Without it, LightBurn usually won't connect to the laser. If you missed it, the quickest fix is to uninstall LightBurn and reinstall it.

**Mac:** you won't see the driver option. You'll add the laser manually instead (next step).

## 10. Add your laser in LightBurn

**Set your units to millimeters first.** You'll get better accuracy than working in inches. Go to *Edit → Settings → Units / Grid* and choose mm/sec.

**Windows over USB:**

- Turn the laser on and plug in USB *before* you open LightBurn. Order matters here.
- Click **Devices** (lower right), choose **Find My Laser**, then **Next**.
- Not found? Check that the laser is on, close LightBurn, and reopen it. Still nothing? Use **Create Manually**.

**Mac over USB:**

- Auto-detect often fails, so go straight to **Create Manually**.
- Choose **Ruida** if it asks.
- Pick **Serial/USB** for a USB cable, or **Ethernet/UDP** if you're on the network.

**Ethernet:** enter the laser's IP address when prompted.

**Bed size:** name the device if you like, then enter your bed size.

- X is the left-to-right measurement; Y is front-to-back.
- Example: a 20″ × 28″ bed is 500 × 700 mm, so Y = 500 mm and X = 700 mm.

**Origin:** pick the corner you saw the head travel to in step 6. Most go to rear-left or rear-right. Then click **Finished**.

Video: [First-time setup (LightBurn Software)](https://www.youtube.com/watch?v=BkNeVjbZncc)

## 11. Back up your machine settings

Everybody pokes around in the settings when the machine is new, and sooner or later something gets changed by accident. A backup lets you get back to where you started.

1. In LightBurn, go to *Edit → Machine Settings → Save*.
2. Name the file something like "Default Laser Settings" and click OK.
3. Keep copies in more than one place: the computer, a thumb drive, and an email to yourself.

!!! tip "Rotary users"
    I keep two files, one for flatwork and one for rotary, and switch between them depending on the job.

## 12. Ramp test to find focus

Focal distance is the gap between the nozzle and the top of your material. The acrylic gauge that came with your machine is a starting point, but it's often not quite right.

A ramp test shows you the real number. Re-run it after every alignment, because the sweet spot can move a little each time.

Videos: [Ramp test & optimal focus (Bearded Builds Co)](https://www.youtube.com/watch?v=KWrS1MsRoIM&t=168s) · [Ramp test (Edmonds Woodshop)](https://youtu.be/fPlPysbwws0)

**Need a new focus gauge?** There's a file in a third-party community group: [Focal gauge file](https://www.facebook.com/groups/thelaserguys/permalink/951121463649336) (Laserguys Facebook group, login required).

## 13. Test cards

If you made it here, nice work. The machine is ready. Test cards give you starting cut and engrave settings for *your* laser on *your* material.

**Where to get them:** these cards were made by community member Jonathan Frost and are posted in the Laserguys Facebook group (third-party community, login required). Look in the group's Files section, or use the direct posts:

- [Laserguys Facebook group](https://www.facebook.com/groups/299416405486515)
- [3 mm (1/8″) cut test card](https://www.facebook.com/groups/299416405486515/permalink/889335573161259)
- [6 mm (1/4″) cut test card](https://www.facebook.com/groups/299416405486515/permalink/889335863161230)
- [Fill (engrave) test card](https://www.facebook.com/groups/299416405486515/permalink/889341466494003)
- [Ultra-dense card for thicker material](https://www.facebook.com/groups/299416405486515/permalink/889336436494506)

For the cut cards, make sure the file matches the thickness of the material you're testing.

**Reading the cards:**

- Every square is a combination of power (%) and speed (mm/s). Find a square that cut all the way through, read the power along one edge of the card and the speed along the other, and enter that combination in LightBurn.
- Engrave cards read the same way. You'll just use those numbers on a **Fill** layer.

**Nothing cut through at all?** Look at two things:

1. Alignment and dirty optics, which takes you back to steps 7 and 8.
2. A power supply tuned at the factory so that your tube's max mA sits close to 100% power. A power line test will tell you.

Power line test: [How-to video (Edmonds Woodshop)](https://youtu.be/_VjU2OGeg-8) · [Test file by Cam Edmonds](https://www.facebook.com/groups/thelaserguys/permalink/949825560445593) (Laserguys Facebook group, login required)

---

## Where to go next

- [Focus and alignment](../machines/focus-and-alignment.md)
- [Ventilation and safety](../machines/ventilation-and-safety.md)
- [CO₂ tube and mirror maintenance](../machines/co2-tube-and-mirror-maintenance.md)
- [Starter settings](../materials/starter-settings.md)

<div class="bb-cta" markdown="1">
**Ready to actually make money with it?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=omtech-setup-guide) walks you through the software and workflows step by step. Shopping for a new machine? Use my OneLaser partner link [1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS) with code `BEARDEDBUILDS`.
</div>

!!! note "Disclosure"
    Some links on this page are affiliate links. **As an Amazon Associate I earn from qualifying purchases.** Bearded Builds Co is a OneLaser partner, so OneLaser links may earn us a commission at no extra cost to you.
