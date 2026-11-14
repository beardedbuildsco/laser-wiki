---
title: OMTech ("home tech") CO2 Laser Setup Guide — reference
---

# OMTech CO₂ Laser Setup Guide (reference)

!!! warning "DRAFT — internal reference, not published"
    **Internal note:** reference copy kept for **home-tech (OMTech) customer cases** so it can be sent out later. Not linked in the site nav.
    **Source:** Laserguys "SETUP GUIDE" — <https://www.laser-guys.com/setup> (also posted as the blog article <https://www.laser-guys.com/post/order-of-setup-setting-up-your-new-omtech-laser>, updated Apr 25, 2024). Captured Nov 14, 2026.
    **Before publishing:** confirm Laserguys is OK with a full republish (or credit/link back), and re-check every link.
    **Link changes vs. original:** Laserguys' `/upgrades` links (which lead to Amazon links tagged `cameronedmond-20`) were replaced with Bearded Builds equivalents (`tag=beardedbuilds-20`) or official LightBurn pages; YouTube `?si=` share-tracking params removed; the Laserguys affiliate footer (asks for OneLaser code `LASERGUYS`) was removed and replaced with our disclosure below.

!!! info "Running a OneLaser instead?"
    See the OneLaser-specific versions: [X-Series (XT / XRF)](onelaser-x-series-setup.md) · [Hydra Gen2](onelaser-hydra-setup.md) · [Cobra](onelaser-cobra-setup.md).

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Once the machine is set up, learn LightBurn the right way with Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=omtech-setup-guide)
</div>

By now you have uncrated your laser and moved it to its permanent location. This section covers everything you need to do in order to fully setup your laser so that in the end you’re ready to run your first test cuts.

Note: When going through the order of setup, do not skip any of these steps. However, some steps may not apply to your machine. If some steps are skipped, your laser beam quality or cut/engraving abilities may be compromised.

## 1. Install the Laser Tube (If Applicable)

Some models require the laser tube to be installed, and some are already installed prior to shipment. OMTech uses a few different brands of CO2 laser tubes.

1. OMTech (self-branded)
2. YongLi (YL)
3. EFR

OMTech branded and YL laser tubes use screw terminal connectors. EFR tubes are installed the same way by using a high voltage connector. DO NOT SOLDER, USE ELECTRIAL TAPE/HEAT SHRINK, or a WIRING CAP to connect the high voltage lines. This will result in arcing and premature failure.

NOTE: If your laser is already installed and has tape running the length of it, feel free to remove it or leave it. They use it to hold the wires and water lines in place. The tube does not get hot so leaving it will not do anything. I chose to remove mine because it interferes with my cleaning process when I occasionally wipe down the tube.

Below are various videos on how to install each style of laser tube:

* [How to Install your CO2 Laser Tube - Edmonds Woodshop (EFR or EFR style tubes)](https://youtu.be/SDt2-lIZJEA)
* [How to install your CO2 Laser Tube - Edmonds Woodshop (YL or OMTech style tubes)](https://youtu.be/0JPcG7gvKLs)
* [Installing Your New Laser Tube - VanStray (YL or OMTech style tubes)](https://youtu.be/pL2YRUEoKmk)
* [How to Install or Replace a CO2 Laser Tube - Laser Everything (YL or OMTech style tubes)](https://youtu.be/ZEbG1WwlSCQ)
* [Changing Your CO2 Laser Tube - OMTechLaser (EFR or EFR style tubes)](https://youtu.be/fAMP9mzIdBc)

## 2. Install the Stock Water Pump or Water Chiller

Stock Water Pump: Water flows through the laser tube in order to keep the tube cool and working at optimal efficiency. OMTech lasers come stock with a water pump system to flow water through your laser tube. Distilled water should be used for this. 

Although the stock setup utilizes a tub filled with water, we recommend substituting the tub with a bucket and lid. This allows the water flowing through the system to stay clean, and free from outside debris. The operating temperature range of your laser should fall within 15-25 degrees Celsius with optimal performance occurring between 18 to 21 degrees Celsius. With the stock system, users need to use ice packs or frozen water bottles to chill your water to within the acceptable range. An aquarium thermometer will help determine the temperature as you operate your laser. If you have a 100w laser tube or larger you may find that the stock pump is not strong enough. You may need to upgrade to a chiller (this is mandatory for the 130w and 150w OMTech models).

Alternatively, if you choose to upgrade to a chiller, OMTech sells the CW3000, CW5200, and CW5202. Keep in mind that the CW3000 isn’t a true chiller. The CW3000 model is more suitable for a smaller lasers, such as the 40 and 50w machines. The CW5200 and CW5202 use a compressor to chill your water, similar to your refrigerator. The main difference between the CW5200 and the CW5202, is that the 5202 has two outlets to used on up to two lasers.

Below is a video on how to install the stock water pump system:

* [Stock Water Pump Install - OMTech Laser](https://www.youtube.com/watch?v=xE6i3UiXViU&t=90s)


Upgraded Water Chiller: To install either the 5200 or the 5202 chiller models, hook up the tubing between the chiller and the laser as follows:

CW5200/CW5202:

1. Chiller OUTLET goes to Laser INLET
2. Chiller INLET goes to Laser OUTLET
3. 130w & 150w models will have an alarm cable that connects from the chiller to the laser
4. The MF1624-60 is the ONLY model that has an internal water pump similar to the CW3000. Its not an active chiller. This is fine for climate controlled environments and part time users. Otherwise a chiller is recommended for the MF1624-60. Here is a Facebook post for those wishing to add a chiller to this model: [Example: Only for MF1624-60](https://www.facebook.com/groups/1364016877267714/posts/2037443476591714)
5. Make sure to fill the chiller with distilled water before turning the power on to the chiller. The chiller takes approximately 2 gallons to fill. Double check the fill level on indicator window on the back of the chiller.
6. If you are using a CW5202, and only one laser, you'll need to loop a smaller section of tubing from outlet B to inlet B on your chiller. If you are using two lasers, follow the same instructions as above for the second set of hookups.
7. Make sure to use spring clamps or hose clamps at the connection points of your water lines to ensure they stay secure. This is for both the stock pump and water chiller setups.

Note: You don't want to have bubble (pea size or bigger) in your laser tube. If you have bubbles that are stuck, try pinching the water line, holding it for a second or two, and then releasing. This will disrupt the follow and break the bubbles apart.

The CW5200 and CW5202 chillers have two operating modes: Intelligent and Constant 

1. Intelligent Mode: Keeps the temperature of your water within 5 degrees of the ambient room temperature. If you're in a climate controlled environment this is perfect. If you're in a hot environment then you need to be in constant mode.
2. Constant Mode: Keep the temperature of you water within 5 degrees of a "set" point programed by you.

Below are videos on how to install the stock water pump system:

* [CW5200 Chiller Install Video - Wrights Woodworks](https://youtu.be/r4lkmlmhKFM)
* [Program Your Chiller - Bearded Builds Co](https://youtu.be/6aOOl0uVssQ)

## 3. Install your Inline Fan

If you didn't upgrade to an inline fan, you NEED to. None of the stock fans on the lasers are effective at properly ventilating your machine. You'll end up smoking up your work area without one: see our recommended inline fans: [AC Infinity CLOUDLINE S6 6″ inline fan](https://www.amazon.com/dp/B07FPFVZTZ?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }, [VIVOSUN 6″ 390 CFM inline fan](https://www.amazon.com/dp/B01DXYMJ94?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }, and [6″ flexible aluminum ducting](https://www.amazon.com/dp/B0791V19H7?tag=beardedbuilds-20){: rel="nofollow sponsored" target="_blank" }. More options on our [Gear we use](../buying-guides/gear-we-use.md) page.

1. Install the inline fan so that its ventilating towards the exit. Generally the fan should be closer to the exit
2. Installation will be dependent on your ventilation requirements i.e. out of a window, through a wall, etc.
3. Here is an example installation: [Laser Venting via MericaLaser](https://youtu.be/waR4gDGH_po)

We recommend removing the stock fan. Since the CFM (airflow) doesnt match between the stock fan and the inline fan, you'll end up with a bottleneck with your ventilation. This video is a little dated, but shows how to remove it:  [How to Remove the Stock Fan via Edmonds Woodshop](https://youtu.be/mHfyE5m8ZOs)

No matter the type of OMTech laser, the process is the same:

1. Unbolt the fan and remove it
2. Remove the grate cover
3. Snip the fan wires and cap them with wire caps
4. Run your duct through the opening (a 6 inch flexible duct will fit perfectly)

## 4. Check Lens Orientation

Chinese manufactures are quick to install the lens in the laser nozzle which can lead to the lens being installed upside down. Check your lens orientation and ensure that the lens is installed round side up (you should be able to see your face when looking into it). Some OMTech lasers have the lens installed in the nozzle, where others are installed higher up in the tube. For those installed in the tube, unscrew the collar and completely pull down the laser nozzle. The lens will be mounted in there with a retaining ring. If you don’t have a lens removal tool, a pair of snap ring pliers can help unscrew the retaining ring. For those with lenses in the nozzle, unscrew the nozzle and you’ll find a silver retaining ring holding the lens. The retaining ring unscrews as well.

Below are a couple videos on lens removal and orientation:

* [Lens Orientation Video - Wrights Woodworks](https://www.youtube.com/watch?v=Al_GrYgdsfM)
* [Lens Removal & Cleaning - Bearded Builds Co](https://youtu.be/HpaPEYRWnzw)

## 5. Laser Bed Level/Trammed?

When we say level, we don't mean level with the earth using an actual level. We mean that the laser nozzle needs to be an equal distance from the top of your work bed as it moves across the entire work area.  
  
If you were to move your laser head in each corner of bed and measure the distance from the nozzle to the bed, that distance should be the same in each corner. If they are at all different, you’ll need to go through and adjust the screw rails in the corners of your bed, otherwise you may see inconsistencies in your engravings and cuts.

Below is a video on how to level your laser bed:

* [How To Level Your Laser Bed Video](https://youtu.be/5rFjYjVboPc)

## 6. Power on your Laser and Chiller

As you power on your laser for the first time, watch which corner your laser moves to. This is your home/origin and will be selected in your software when you setup your controller. For example, some laser heads move to the right rear, and some move to the left rear. When you setup your controller in your software, for your origin you’ll choose the rear right corner or the corner the laser goes to when turning on the machine. Your laser may move to the corner and then immediately return to the center. This is totally normal.

1. Some of the bigger lasers have two power cords. If you have two plugs on your laser, ensure they're both plugged in and fully seated. All lasers have two power supplies: A 24v power supply and a laser tube power supply.
2. Turn the key on to the right. This provides power to your laser power supply only.
3. Ensure the emergency stop switch is popped up and not engaged.
4. Press the power button in. This powers your 24v system such as stepper motors, lights, and control panels.
5. Some bigger lasers have a mA power dial. It needs to be on MAX all the time or your laser may not fire.
6. Some lasers have toggle switches on the sides. Ensure those are on and lit.

## 7. Check and Align Mirrors

Proper laser alignment will ensure you have quality cuts and engravings. The idea is to get your laser beam to run parallel with your X and Y axis and directly down the laser nozzle through the lens. This is not a suggestion. You MUST do this, or your cut/engraving quality will suffer. Some lasers arrive perfectly aligned, and some arrive needing adjustments after the long journey. Helpful Key Notes:

* Don't worry about hitting center just yet. Your primary focus is to get your pulses to fall on top of each other. This will make sense as you watch the videos below. When you go to align mirror 1 to mirror 2, you want your laser pulse in the NEAR (back of the machine) position (where mirror 1 and 2 are closest) to hit the same pulse in the FAR (front of the machine) position (where mirror 1 and 2 are farthest apart.
* Aligning Mirror 2 to Mirror 3 process as mirror 1 to 2, except that you're aligning the pulses to fall on top of each other in the NEAR (left side of the machine where the mirrors are closest) and FAR (right side of the machine where the mirrors are farthest apart) positions.
* Hitting the center of the mirrors isn't necessary until Mirror 3. As the beam hits center of mirror 3, the beam will travel 90 degrees down the center of your tube. Once your pulses are aligned you will adjust and shim your tube to aim center of mirror 3 i.e. shim and check, shim and check. (New alignment video coming soon)
* Near position is when the mirrors are closest to each other (left side of bed). Far position is when they are farthest apart (right side of bed). Very minor adjustments should be made when you are in the far position. Very slight adjustments go a long way

Below are a couple videos on laser mirror alignment:

1. [Laser Mirror Alignment | How To Guide | OMTech - Edmonds Woodshop](https://youtu.be/GyOKzy-riLE)
2. [How To Align Your OMTech Laser Mirrors - Edmonds Woodshop](https://youtu.be/G-HhArItCqQ)
3. [Laser Alignment Principles - Bearded Builds Co](https://youtu.be/6GtwjxUpEEs)
4. [Co2 Laser Mirror & Beam Alignment - Bearded Builds Co](https://youtu.be/tFbuOs_98n8)
5. [Laser Cutter Mirror Alignment - MakeStuffNow!](https://youtu.be/e1c3keOKL6Y)
6. [Align Your Laser In 5 Easy Steps - Maker Monkey Industries](https://youtu.be/oSzFJGCPapc)

## 8. Clean your Mirrors and Lenses

Do not skip this step. After alignment, the tape residue can leave your mirrors and lens dirty. Remember, your laser reflects off these mirrors and optics. If they're poorly maintained, your beam will poorly perform. Use 99% isopropyl alcohol, but 91% is acceptable. Found at most CVS or Walgreen type stores.

1. Remove lens from laser nozzle (See video below)
2. Apply a small amount of alcohol to your lint free lens cloth or microfiber cloth and clean the lens
3. Install the lens back in place, ROUND SIDE FACING THE SKY (you should be able to see your reflection)
4. Use cloth to with small amount of alcohol to clean mirror 1 and 2
5. Apply a small amount of alcohol to a qtip or cleaning swab and clean mirror 3
6. There is a lens (known as a semi-transparent mirror) at the end of the laser tube that needs to be cleaned as well with a qtip or cleaning swap

Below are a couple videos on cleaning mirrors and lenses:

* [How to Clean Mirrors and Lenses - OMTech Laser](https://youtu.be/igrO8ph1bwI)
* [Lens Removal & Cleaning - Bearded Builds Co](https://youtu.be/HpaPEYRWnzw)

## 9. Download & Install Lightburn

Although your laser comes with RDWorks software, we highly recommend using Lightburn as your primary laser software. The software has an intuitive design space, user friendly functionality, and a dedicated support forum not only from the developers, but from the laser community as well. You have the option to download the full access trial version (30 days) directly from their website or you can choose to purchase here:

- [Download the LightBurn 30-day trial](https://lightburnsoftware.com/pages/download-trial) (official site)
- [Buy LightBurn (DSP license for Ruida controllers)](https://lightburnsoftware.com/products/lightburn-dsp) (official site)

Once you are ready to download Lightburn, be sure to select the "install FTDI serial driver" box when prompted in the download process, or Lightburn will most likely not establish connection with your laser. If you missed this step, the fastest way to get back to this menu is to uninstall and reinstall the Lightburn software.

Mac Users will not have the driver option. Instead, you'll need to manually create a device explained in the next step.

## 10. Setup Your Laser Controller In Lightburn

Units of Measure:

Ensure your units of measurements are in “mm” (millimeters) and not “in” (inches). This will ensure the highest level of accuracy with your laser. To change the unites of measure:

Lightburn> EDIT > SETTINGS > UNITS / GRID > Select mm/sec

Connect Laser To Lightburn:

Windows Users / USB Connections

1. Select “Devices” towards the lower right of the screen and choose “Find My Laser”. Select NEXT

Note: In some cases order of operations matter. Ensure your laser is on and connected to your computer before opening your software. If your laser controller isn't recognized, ensure your laser is on. Close Lightburn and re-open. If you are still having trouble finding your laser, proceed with the “Create Manually” option.

MAC Users / USB Connections

1. Device detection may not work so you will choose the “Create Manually” option.
2. If prompted, choose Ruida
3. If using USB connection, select Serial/USB. If using ethernet, select Ethernet/UDP

Ethernet Connections

1. If prompted, enter IP Address
2. Feel free to add a custom name otherwise enter your X and Y bed measurements

Note: The X length is the left and right bed measurement. The Y length is the front and back measurement. For example: A laser with a 20inch x 28inch bed is also 500mm x 700mm where 500mm is the Y length and 700mm is the X length

Select your correct origin. In the previous steps you watched which corner your laser moved to when you first powered it on. This your origin. Most lasers move to the rear left or right. Make sure to select corner in the settings that match the laser movement at startup.

Select "Finished"

Below is a video on connecting your laser to Lightburn

* [First Time User Setup Video - Lightburn Software](https://www.youtube.com/watch?v=BkNeVjbZncc)

## 11. Save A Copy Of Your Default Laser Settings

As new users we tend to explore settings and functionalities of our new machines. Accidents happen and you may unknowingly change something that causes your laser to misbehave. In order to default back to our original laser settings, you must save your default laser settings.

TIP: I save a copy of my "default laser settings" and "rotary laser settings" and flip back and forth when working between flatwork and rotary work.

Here is the steps to save your default settings:

Lightburn > Edit > Machine Settings > Save.

When prompted, select a save location and name as "Default Laser Settings" > Select OK

Put this saved file is a safe place. Wouldn't be a bad idea to save a copy on the computer, thumb drive, and email a copy to yourself... just to be safe.

## 12. Conduct a Ramp Test to Determine Focal Distance

A ramp test is used to find your focal distance. Focal distance is the length from the nozzle to your workpiece. Your laser may have come with an acrylic gauge on a keychain from the manufacturer. However, a lot of the time this distance is not optimized. Conducting your own ramp test will verify what that focal distance should be. This will change slightly each time you align the mirrors. A ramp test after alignment ensures you are running at the correct focal distance.

Below are a couple videos on how to conduct a ramp test:

* [Ramp Test & Optimal Focus For Co2 Laser - Bearded Builds Co](https://www.youtube.com/watch?v=KWrS1MsRoIM&t=168s)
* [How To Do A Ramp Test On Your Co2 Laser - Edmonds Woodshop](https://youtu.be/fPlPysbwws0)

If you need a new focus gauge, a file set is posted in the Laserguys Facebook group (third-party community, Facebook login required):

* [Focal Gauge File Download](https://www.facebook.com/groups/thelaserguys/permalink/951121463649336)

## 13. Running A Test Card

If you got this far, Congratulations! You are ready to download and run a series of test cards. Each card below is used to find CUT and ENGRAVING settings that will work on you specific material for your laser. With the cut test cards, make sure you are using the matching test file with the corresponding thickness of your material.

Go to the "FILE" section in the [LASERGUYS Facebook Group](https://www.facebook.com/groups/299416405486515) and download the 3mm & 6mm test cut cards, and the fill test cards, created by one of our group members, Jonathan Frost.

1. [3mm (1/8") Test Card For Cutting](https://www.facebook.com/groups/299416405486515/permalink/889335573161259)
2. [6mm (1/4") Test Card For Cutting](https://www.facebook.com/groups/299416405486515/permalink/889335863161230)
3. [Fill Test Card For Engraving](https://www.facebook.com/groups/299416405486515/permalink/889341466494003)
4. [Ultra Dense Test card (for testing thicker material)](https://www.facebook.com/groups/299416405486515/permalink/889336436494506)

How do I read these cards or what do the cutouts/engravings mean?

* Lightburn uses a combination of power (%) and speed (mm/s) when applying settings to your cuts/engravings. The test cards read up/down and left/right. This means that if you have a hole cut through on the test card, you will have to look left on the test card to see what the power is and up to see what the speed is to find the combination of settings needed to apply in Lightburn in order to cut through that specific material.
* For engravings, the concept is the same, except in Lightburn, you will use the “Fill” option.

NOTE: If you aren't cutting any holes out on the test cards, its either due to your alignment/mirror & lens cleanliness OR your power supply has been tuned at the factory. This means that the max mA rating for your laser tube is probably closer to 100% power.

In order to check this you'll have to run a power line test.

* [How To Run A Power Line Test On Your Co2 Laser by Edmonds Woodshop](https://youtu.be/_VjU2OGeg-8)
* [Power Line Test File by Cam Edmonds](https://www.facebook.com/groups/thelaserguys/permalink/949825560445593)

---

## Next steps

- [Focus and alignment](../machines/focus-and-alignment.md) · [Ventilation and safety](../machines/ventilation-and-safety.md) · [CO₂ tube and mirror maintenance](../machines/co2-tube-and-mirror-maintenance.md) · [Starter settings](../materials/starter-settings.md)
- **Master LightBurn** — the full step-by-step course: [course.beardedbuildsco.com/master-lightburn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=omtech-setup-guide)

!!! note "Disclosure"
    Some links on this page are affiliate links. **As an Amazon Associate I earn from qualifying purchases.** Bearded Builds Co is a OneLaser partner ([1laser.com/BEARDEDBUILDS](https://1laser.com/BEARDEDBUILDS), code `BEARDEDBUILDS`).
