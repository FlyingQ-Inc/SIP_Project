# Intelligent Tower Mounted Distribution Node

**Student Innovation Project (SIP) and technical portfolio**  
**Author:** Caleb Quisenberry  
**University:** University of Advancing Technology (UAT)  
**Programs:** Network Engineering and Cybersecurity  
**SIP subject matter expert:** Professor Aaron Rodriguez  
**Current status:** Working off-tower monitoring and notification prototype demonstrated and tested on November 22, 2026

This repository publishes my SIP documentation alongside my UAT Boards portfolio and selected professional projects. The SIP is based on real fixed wireless deployment problems: distributing fiber and DC power to tower-mounted equipment and identifying individual power faults without unnecessary diagnostic visits.

## Website and videos

- [Home](https://flyingq-inc.github.io/SIP_Project/index.html)
- [SIP documentation and revised brief](https://flyingq-inc.github.io/SIP_Project/sip.html)
- [Boards overview](https://flyingq-inc.github.io/SIP_Project/boards.html)
- [Network Engineering objectives](https://flyingq-inc.github.io/SIP_Project/network-engineering.html)
- [Network Security objectives](https://flyingq-inc.github.io/SIP_Project/network-security.html)
- [Projects](https://flyingq-inc.github.io/SIP_Project/projects.html)
- [Working prototype technical walkthrough](https://youtu.be/4rTvz5r6Yhw)
- [Photograph of completed prototype enclosure](assets/sip-evidence/completed-monitoring-enclosure.svg)
- [Earlier SIP brief video](https://youtu.be/cqMiUOfy-Ek)

**SIP409 Showcase:** The separate five-minute faculty presentation has been recorded as `SIP409_cquisenberry_5minVid.mp4`. The public SIP page contains a Showcase player that activates when `assets/videos/SIP409_cquisenberry_5minVid.mp4` is committed and served by GitHub Pages. Until that upload is complete, it shows a pending-publication message. The longer YouTube prototype walkthrough remains supporting technical evidence.

All website links now use **the current browser tab**, including the academic evidence links and externally hosted resources. The browser's Back button returns to the portfolio.

## Showcase media publishing

The final five-minute SIP409 Showcase has been recorded locally in `~/Projects/School/SIP408_409/SIP409_cquisenberry_5minVid.mp4`. This file is **not yet in the public repository**. A local Codex session will prepare and commit a browser-compatible H.264/AAC MP4 to:

```text
assets/videos/SIP409_cquisenberry_5minVid.mp4
```

The GitHub Pages SIP webpage detects the published file before displaying an HTML5 player, so visitors do not see a broken video while the upload is pending. Preserve the original recording. Keep the GitHub-hosted file below GitHub's 100 MB per-file limit without using Git LFS for Pages delivery. Separately upload the Showcase to YouTube or Vimeo for the SIP409 faculty submission requirement, then add that platform URL to the website and README.

## Problem and innovation

Fixed wireless sites may require separate fiber and DC power cables for each tower-mounted base node. As more equipment is installed, cabling and troubleshooting become more complex.

The project joins two related developments:

1. **Modular power and fiber distribution:** Two previously field-deployed iterations provided fiber distribution, then DC power distribution and protection closer to the radios. In the second iteration, the design eliminated the need for up to six individual copper runs along the full tower span.
2. **Circuit monitoring and remote notifications:** A newly assembled, off-tower low-voltage prototype detects circuit faults and recoveries, sends LoRaWAN telemetry, logs it locally, and generates email notifications.

The distribution installations demonstrate the physical tower concept. The off-tower monitoring prototype demonstrates the new telemetry and notification subsystem. They should not be mistaken for a single fully integrated, production-ready installation.

## Completed monitoring prototype

The prototype monitors **Incoming**, **Load 1**, and **Load 2** with three INA219 voltage/current sensors attached by I²C to an Arduino MKR WAN 1310.

```text
Three INA219 sensors -> I2C -> Arduino MKR WAN 1310
  -> LoRaWAN -> RAK gateway (built-in network server)
  -> direct Ethernet / MQTT -> Python monitoring service
  -> SQLite records -> Gmail SMTP -> notification recipient
```

### Implemented design

| Component | Implementation |
| --- | --- |
| Sensors | Three INA219 devices at I²C addresses 0x40, 0x41, 0x44 |
| Controller | Arduino MKR WAN 1310 |
| Fault/recovery detection | A change is confirmed after three qualifying samples |
| Radio | US915 sub-band 2, channels 8–15 and 65, OTAA, LoRaWAN Class A |
| Telemetry | 28-byte port-10 payload with voltage, current, status, boot ID, sequence, and uptime |
| Heartbeat | Every 60 seconds, plus event-driven circuit state changes |
| Local forwarding | Gateway built-in server to Ethernet/MQTT, port 1883, QoS 1 |
| Receiver | Python service with SQLite persistence, notification queue, reconnect handling, duplicate-alert suppression |
| Email transport | Gmail SMTP, port 587, authenticated with certificate-verified STARTTLS |
| Power arrangement | UPS supports monitoring during the demonstrated input-power interruption |

The LoRaWAN server is local to the gateway and does not require a cloud LoRaWAN service for radio telemetry. Delivering email still requires the receiving computer to have an internet connection.

## Final prototype demonstration and test evidence

On November 22, 2026, all three physical fault and recovery tests passed, and alert emails were received. The email exports document the following **separate** fault and normal-state records:

| Monitored circuit | Fault voltage | Normal-state voltage |
| --- | --- | --- |
| Incoming | 5.57 V | 11.89 V |
| Load 1 | 5.58 V | 11.89 V |
| Load 2 | 5.56 V | 11.88 V |

The recorded normal-state emails have earlier timestamps than the fault emails. These particular PDF records therefore must **not** be interpreted as a chronological fault-then-recovery sequence. A further message documented loss of monitoring data for at least three minutes and thirty seconds.

### PDF notification records

These seven public PDF files are **redacted reproductions transcribed from the received Gmail PDF exports**, not byte-for-byte copies of the original Gmail printouts. They preserve the reported status, readings, time, and event ID while omitting personal Gmail addresses and private message URLs.

| Notification | PDF record |
| --- | --- |
| Incoming fault, event 29 | [Open PDF](assets/sip-evidence/incoming-fault.pdf) |
| Incoming normal state, event 26 | [Open PDF](assets/sip-evidence/incoming-restored.pdf) |
| Load 1 fault, event 30, marked FORMAT PREVIEW in source | [Open PDF](assets/sip-evidence/load-1-fault-format-preview.pdf) |
| Load 1 normal state, event 27 | [Open PDF](assets/sip-evidence/load-1-restored.pdf) |
| Load 2 fault, event 31 | [Open PDF](assets/sip-evidence/load-2-fault.pdf) |
| Load 2 normal state, event 28 | [Open PDF](assets/sip-evidence/load-2-restored.pdf) |
| Monitoring connection lost, event 32 | [Open PDF](assets/sip-evidence/monitor-connection-lost.pdf) |

The source Gmail exports also contain private message-specific URLs; those are intentionally omitted from the public reproductions.

## Security and limitations

The functional prototype demonstrates monitoring and notification, **not electrical protection**. Its 12V sensing hardware is not suitable for direct connection to -48V telecommunications circuits. Production use would need appropriately rated sensing hardware, power protection, physical and environmental validation, and reliability testing.

LoRaWAN uses OTAA session security, but the present direct-Ethernet MQTT link uses port 1883 **without encryption or broker authentication**. Restrict access to the demonstration network. A production deployment would require MQTT TLS, authentication, topic permissions, hardened gateway access, and separate device credentials. Outage alerting also depends on gateway, laptop, network, queue, and email service availability.

No SMTP passwords, radio application keys, private environment files, local logs, or raw monitoring databases are included in the public website.

## Website structure

| Path | Purpose |
| --- | --- |
| `index.html` | Technical portfolio home |
| `sip.html` | Updated SIP overview, working demonstration, test results, revised brief, and email evidence |
| `boards.html` | Boards portfolio overview |
| `network-engineering.html` | Network Engineering objectives and evidence |
| `network-security.html` | Network Security objectives and evidence |
| `projects.html` | Selected technical and professional projects |
| `links.html` | References and resources |
| `contact.html` | Contact information |
| `assets/sip-evidence/` | Public redacted notification PDFs |
| `site.js` | Shared navigation; standard same-tab link behavior |
| `style.css` | Shared responsive styling |

The static website publishes through GitHub Pages from `main`. Earlier photographs, diagrams, and presentations remain available as an archive of the project's evolution. Older solar and cellular concepts are historical and do not represent the final Arduino / LoRaWAN implementation.

## Contact

[LinkedIn](https://www.linkedin.com/in/caleb-quisenberry-611b11b3) · [GitHub repository](https://github.com/FlyingQ-Inc/SIP_Project)
