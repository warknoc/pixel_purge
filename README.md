# Pixel Purge

A lightweight, zero-telemetry Chrome extension built on Manifest V3 and the `declarativeNetRequest` API.

## Features
- **Query Parameter Stripping:** Automatically intercepts and removes marketing tracking keys (`utm_*`, `fbclid`, `gclid`, `msclkid`, HubSpot tokens) before requests leave the browser.
- **Ghost Beacon & Telemetry Blocking:** Silently drops 1x1 tracking pixels, telemetry pings, and analytics collect beacons at the network layer.
- **Zero Overhead:** No persistent background scripts eating memory; runs entirely through Chrome's native declarative rule engine.
- **Complete Privacy:** Operates 100% locally. No data collection, external servers, or telemetry.

## Manual Installation (Developer Mode)
1. Clone this repository:
   ```bash
   git clone [https://github.com/warknoc/pixel_purge.git](https://github.com/warknoc/pixel_purge.git)
