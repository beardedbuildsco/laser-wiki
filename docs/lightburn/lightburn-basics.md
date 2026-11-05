# LightBurn basics: setup to first job

LightBurn is the control software many diode and CO₂ (and some fiber) users rely on to design, nest, and run jobs. This page is a practical path from install to a finished scrap test — not a full manual replacement.

<div class="bb-cta bb-cta--compact" markdown="1">
**Course:** [This wiki gets you started — Master LightBurn takes you the rest of the way.](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=lightburn-basics)
</div>

Confirm your controller is on LightBurn’s supported list before you buy a license. Device setup differs by DSP, GRBL, Ruida, and others.

## What you need

- A LightBurn license appropriate for your controller class
- USB or Ethernet connection as your machine requires
- Correct **laser safety** setup before any beam fires ([ventilation and safety](../machines/ventilation-and-safety.md))
- Scrap material and a fire plan

## Install and add your device

1. Install LightBurn from the official LightBurn site on a computer that will stay near the machine.
2. Open **Devices** (or the first-run wizard) and add your controller type.
3. Set **work area** size to match the machine’s usable bed — measure if the marketing number is optimistic.
4. Set origin behavior to match how your machine homes (front-left, rear-left, etc.). Wrong origin is a top cause of “job outside the bed” confusion — see [common errors](../troubleshooting/common-lightburn-errors.md).
5. Save the device profile with a clear name (`Shop CO₂`, `Diode garage`, …).

!!! tip "One computer, one truth"
    If two PCs control one laser, keep device profiles in sync or you will chase phantom offsets.

## Tour the workspace (just enough)

- **Edit toolbar:** select, draw, text, nodes
- **Cuts / Layers:** each color maps to a cut setting (power, speed, mode)
- **Laser panel:** Frame, Start, Stop, power scale, and connection status
- **Console / status:** where GRBL-style machines often show errors

You do not need every tool on day one. You need layers, frame, and start.

## Connect and home

1. Power on the laser and any water chiller / exhaust first (order can matter — follow your manual).
2. Connect in LightBurn; wait for a ready state.
3. Home the machine if your controller supports it.
4. Use **Frame** (with the lid behavior your machine expects) to preview the travel path with the beam off or at tracing power only — know which framing mode you are using.

Never assume the red-dot preview equals the CO₂/diode beam path until you have verified offset calibration for your head.

## Your first job (scrap)

1. Create a new file; confirm units (mm vs inches).
2. Draw a 20–50 mm square and a short line of text.
3. Assign the square to a **cut** or **engrave** layer intentionally — beginners often leave everything on the same layer.
4. Open **Cut Settings** for that layer: set a conservative engrave first (you can cut after you trust focus).
5. Place the artwork where you want it relative to your chosen **Start From** mode (Absolute Coordinates, Current Position, or User Origin — understand which you selected).
6. Focus for material thickness ([focus and alignment](../machines/focus-and-alignment.md)).
7. Put scrap down; close interlocks; start exhaust.
8. **Frame** the job; adjust placement until the frame sits on the scrap.
9. Run the job while watching through a safe viewing method for your machine class.
10. Stop immediately if you see uncontrolled flame.

Congratulations — that scrap is more valuable than a perfect Instagram post. Save the settings that worked into the Material Library ([starter settings](../materials/starter-settings.md)).


<div class="bb-cta bb-cta--mid" markdown="1">
**Want this to click faster?** [Master LightBurn](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=lightburn-basics) walks the tools and workflows step by step — lifetime access, one clear path.
</div>

## Layers worth understanding early

| Layer mode | Use |
| --- | --- |
| Line | Cuts or scores along paths |
| Fill | Engraves filled shapes / text |
| Image | Photos and greyscale bitmaps |
| Offset fill / other variants | Situational — learn after basic fill/line |

Name layers by process (`engrave`, `score`, `cut`) so files stay maintainable when you add operations.

## Artwork tips that save hours

- Prefer **vector** logos (SVG, DXF, AI) for clean cuts; flatten or link images carefully
- Convert text to paths when sending files to other shops if fonts might be missing
- Keep strokes set appropriately for your import; hairline meanings differ by file type
- Nest multiple parts with spacing for kerf and handling

## After the first job

- Build a labeled test grid on your main materials
- Learn **User Origin** for repeatable jigs
- Learn **rotary** setup only after flat work feels boring ([rotary engraving](../projects/rotary-engraving.md))
- Backup `.lbrn2` files and your Material Library with the rest of your shop backups

## Related reading

- [Common LightBurn errors](../troubleshooting/common-lightburn-errors.md)
- [Starter settings](../materials/starter-settings.md)
- [Engraving a plaque](../projects/engraving-a-plaque.md)

## Go further

<div class="bb-cta" markdown="1">
<p class="bb-cta__eyebrow">Primary next step</p>

### Master LightBurn

Structured LightBurn training from Bearded Builds — skip the scattered YouTube rabbit holes. Lifetime access with updates.

[**View the course →**](https://course.beardedbuildsco.com/master-lightburn?utm_source=wiki&utm_medium=cta&utm_campaign=lightburn-basics){: .bb-cta__btn }

Also: [Shop custom plaques](https://beardedbuildsco.com) · [YouTube](https://www.youtube.com/@BeardedBuildsCo) · [Course hub](https://course.beardedbuildsco.com?utm_source=wiki&utm_medium=cta&utm_campaign=lightburn-basics-hub)
</div>
