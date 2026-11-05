# Common LightBurn errors (and fixes)

When LightBurn and the controller disagree, the symptoms look dramatic — but a short list of causes covers most shop-floor failures. Below are well-established issues and fixes. If your exact error string differs by controller, the *category* still usually applies.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [Fix the fire drill, then learn the workflows properly in Master LightBurn.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=common-lightburn-errors)
</div>

!!! note "Controller manuals win"
    Ruida, GRBL, SoftMotion, and others phrase alarms differently. Use this page to narrow the category, then confirm in your controller documentation.

## Cannot connect / device not found

**Symptoms:** LightBurn shows disconnected; ports missing; “failed to open” style messages.

**Check in order:**

1. Cable and port — try another USB cable (data-capable, not charge-only) and port.
2. Power — controller powered on; some machines need the lid/interlock state satisfied before the port enumerates.
3. Correct device profile — the profile’s connection type (USB/Ethernet) must match reality.
4. Drivers — on Windows, confirm the USB Serial device appears without errors in Device Manager.
5. Exclusive access — close other programs that might hold the serial port (other CNC tools, leftover LightBurn instances).
6. Ethernet — correct IP, same subnet, firewall not blocking; power-cycle the controller after network changes.

If connection flakes only during jobs, look for USB noise, hubs, and cable length — short, quality cables help.

## Wrong origin / unexpected start location

**Symptoms:** Job runs in the wrong corner; framing looks fine relative to the head but the burn lands elsewhere; coordinates seem “mirrored” mentally.

**Common causes:**

- **Start From** mode misunderstanding: Absolute Coordinates vs Current Position vs User Origin
- Device origin set to a different corner than you assume
- Homing not completed after power-up
- User Origin left over from a previous jig

**Fixes:**

1. Home the machine.
2. Decide one workflow for beginners: Absolute Coordinates with artwork placed in the workspace, *or* Current Position with the head jogged to a known corner of the scrap.
3. Clear or re-set User Origin intentionally when using jigs.
4. Frame before every real run until muscle memory sticks.

## Job outside the frame / outside the bed

**Symptoms:** LightBurn warns that the job exceeds the machine area; controller refuses to start; head hits soft limits.

**Common causes:**

- Artwork placed outside the grey machine area in LightBurn
- Work area in the device settings smaller/larger than the physical bed
- Current Position start with artwork extending negative relative to the head
- Rotary mode enabled with diameter/circumference math pushing travel out of range
- Wrong units (design in inches imported as mm or the reverse)

**Fixes:**

1. Select all → confirm coordinates; move artwork fully inside the bed graphic.
2. Recheck device **work area** against a tape-measure of usable travel.
3. For Current Position jobs, remember the head is the reference — oversized art will cross a limit.
4. Disable rotary if you are not on a rotary.
5. Normalize units on import.

## Framing does not match the burn

**Symptoms:** Red-dot or tracing frame looks correct, but the laser hits a different place.

**Common causes:**

- Red-dot offset not calibrated (dot and beam are not the same optical path)
- Focus lens changed without updating offsets
- Scanning/galvo calibration issues on galvo systems (separate from gantry diodes/CO₂)

**Fixes:**

1. Run your manufacturer’s beam-to-dot alignment / LightBurn offset calibration where supported.
2. Frame with the actual beam at very low power on scrap if your machine and safety procedures allow a safe low-power score — only when you understand the risks for your laser class.
3. Re-check after any head maintenance.

## Job runs but nothing burns (or extremely light)

**Checks:**

- Layer power set near zero, or wrong layer selected
- “Laser on” / enable signals, water protection, or door interlocks inhibiting the tube/diode
- Focus far off
- PWM / power wiring after a DIY repair (seek qualified help)
- Tube/diode failure — verify with manufacturer diagnostics

## Cuts do not go through

**Checks:**

- Focus, dirty lens/mirrors, failing tube/diode
- Speed too high / power too low / not enough passes
- Air assist off when the material needs it
- Material thicker than the machine can realistically cut — believe physics over marketing

Build a fresh [test grid](../materials/starter-settings.md) after cleaning optics.

## Random stops, freezes, or USB disconnect mid-job

**Checks:**

- USB cable quality and routing away from spindle/laser PSU noise
- Laptop sleep / power saving disabling USB
- Streaming vs buffered controller behavior — large high-DPI images can overwhelm some setups; reduce image resolution or use a controller that handles the stream better
- Overheating PSU or controller

## Text or shapes look wrong after import

**Checks:**

- Missing fonts → LightBurn substituted something else (convert text to paths when sharing files)
- SVG stroke/fill quirks — Expand/Offset as needed
- Open contours where you expected a cut closed shape

## Rotary-specific trouble

- Wrong rotary axis enabled
- Incorrect diameter / object circumference / steps per rotation
- Chassis rollers slipping — clean and add light pressure, do not crush the cup
- Design width not matching the unrolled circumference

See [rotary engraving](../projects/rotary-engraving.md).


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=common-lightburn-errors) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## A calm debugging order

```text
1. Can LightBurn connect and home?
2. Is Start From intentional?
3. Does Frame stay on the part?
4. Is the correct layer powered?
5. Is focus clean and correct?
6. Did this material ever work on this machine?
```

Work top to bottom; do not change five variables at once.

## Related reading

- [LightBurn basics](../lightburn/lightburn-basics.md)
- [Focus and alignment](../machines/focus-and-alignment.md)
- [Starter settings](../materials/starter-settings.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=common-lightburn-errors){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=common-lightburn-errors-hub)
</div>
