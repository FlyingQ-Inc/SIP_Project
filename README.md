# Intelligent Tower Mounted Distribution Node

This repository contains the website and supporting materials for my Student Innovation Project at the University of Advancing Technology. The project supports my studies in Network Engineering and Cybersecurity.

**Author:** Caleb Quisenberry  
**Course:** SIP408, SIP Documentation  
**Status:** Physical distribution concepts previously deployed; revised monitoring prototype planned  
**Last updated:** September 30, 2026

## Project Website

- [Home](https://flyingq-inc.github.io/SIP_Project/index.html)
- [SIP Documentation and Progress](https://flyingq-inc.github.io/SIP_Project/sip.html)
- [Current SIP Brief Video](https://youtu.be/cqMiUOfy-Ek)

## Project Overview

Fixed wireless installations require power and fiber connections for multiple tower-mounted radios. Individual cable runs can increase installation costs, consume tower space, and complicate maintenance and expansion.

The Intelligent Tower Mounted Distribution Node combines fiber distribution and DC power protection and distribution into a modular assembly near the radios. The next development phase will add circuit monitoring and wireless fault reporting to help technicians identify power problems from the ground.

## Innovation Goals

- Reduce individual cable runs along the tower.
- Improve the organization of power and fiber connections.
- Simplify future site expansion.
- Monitor power circuits and report fault conditions.
- Reduce unnecessary tower climbs for power diagnostics.

These goals combine previously implemented distribution features with monitoring capabilities that remain under development.

## Completed Development

### First Iteration: Fiber Distribution

The first field installation provided fiber distribution near the fixed wireless base nodes, improving cable organization and supporting future expansion.

### Second Iteration: Power Distribution and Protection

The second installation added DC circuit protection and power distribution. This design eliminated the need for up to six individual copper runs along the full tower span.

Photographs and earlier project videos document these installations. They demonstrate the physical distribution concept, not the planned monitoring and reporting functions.

## Current Direction

Following a job change, I no longer have access to the original field installations. Further development will use an **off-tower test and display module** that can support controlled testing and project demonstrations.

The revised monitoring design will use:

- An **Arduino-based controller** for circuit monitoring and fault detection.
- Compatible **LoRaWAN hardware** for wireless status reporting.
- Two **12V DC demonstration circuits** with voltage and current sensing.
- A **small UPS dedicated to the controller and sensors**.
- A separately powered gateway and supporting services to deliver readings to a receiving application.

The earlier Raspberry Pi and cellular communication concept has been replaced by this planned approach. Solar power is no longer part of the design. A proposed parts list has been developed, but final component selection and software configuration remain to be completed.

## Progress Update: September 30, 2026

> [!IMPORTANT]
> **The current SIP brief video is available:** [Watch on YouTube](https://youtu.be/cqMiUOfy-Ek).
>
> Recent progress includes an updated speech, presentation materials, a proposed parts list, and a concept rendering of the test module. The rendering illustrates the planned layout and does not show a completed build.
>
> The prototype will use 12V DC with UPS backup for monitoring only. Assembly, programming, and functionality testing remain pending.

The primary setback remains the loss of access to the two original installations. Building a standalone test module will provide an accessible platform for continued development, testing, and presentation.

For the planned demonstration, a switch will disconnect the main 12V supply while the UPS keeps the Arduino and sensors operating. This will allow the monitoring system to detect and report the power loss. The LoRaWAN gateway will remain separately powered.

The revised design also provides an opportunity to explore LoRaWAN networking, device authentication, and protection of communication credentials.

## Planned Minimum Demonstration

The initial demonstration will aim to:

1. Show normal operation of the two monitored 12V circuits.
2. Use a switch to turn off the main supply.
3. Keep the controller and sensors operating through the UPS.
4. Transmit the outage status over LoRaWAN.
5. Display the received status in an application.
6. Restore power and verify a recovery report.

This demonstration has not yet been completed. The current SIP brief video explains the project and planned functionality.

## Proposed Development Timeline

The earlier Week 3 functionality target has been revised to reflect the remaining work and component availability.

| Stage | Planned Work | Completion Target |
|---|---|---|
| Design and selection | Confirm components, UPS requirements, and gateway arrangements. | Week 4 |
| Assembly and programming | Assemble the 12V test module and develop sensing and reporting functions. | Week 4, subject to parts availability |
| Initial functionality | Verify outage detection and LoRaWAN reporting while monitoring runs on UPS power. | After assembly and integration |
| Validation and documentation | Test fault and recovery conditions, record the functioning prototype, and update documentation. | Following successful functionality testing |

This timeline is a target and depends on component availability and successful integration.

## Remaining Work

- Finalize the controller, LoRaWAN hardware, circuit sensors, and UPS.
- Build the off-tower test and display module.
- Program circuit monitoring and fault detection.
- Establish the LoRaWAN reporting path and receiving application.
- Plan device authentication and secure handling of communication credentials.
- Verify that monitoring remains operational when the main supply is switched off.
- Test normal, fault, and recovery conditions.
- Update diagrams to match the revised design.
- Revise the written SIP Brief with dated and highlighted progress.
- Capture photographs and video of the functioning prototype.

## Website Contents

| Page | Purpose |
|---|---|
| `index.html` | Introduction and project website entry point |
| `sip.html` | Innovation claim, development progress, visuals, SIP Brief, and videos |
| `boards.html` | Boards materials |
| `projects.html` | Additional project work |
| `links.html` | References and supporting links |
| `contact.html` | Contact information |

The website uses HTML and CSS and is published through GitHub Pages.

## Documentation Notes

Earlier diagrams, photographs, and videos are retained to show the project's development history. Some materials describe the previous cellular and solar concepts and may not reflect the current Arduino, LoRaWAN, and UPS design.

The [current SIP brief video](https://youtu.be/cqMiUOfy-Ek) presents the latest project update. The earlier written SIP Brief remains a separate PDF and requires its own revision.

Concept images illustrate proposed designs. Photographs and test results will document the completed prototype when available.

## Feedback

Feedback is welcome on:

- Clarity of the innovation claim and project scope.
- Website professionalism and readability.
- Distinction between completed features and planned development.
- Effectiveness of the visuals in explaining the design.
- Clarity of the proposed functionality demonstration.

## Author

**Caleb Quisenberry**  
Network Engineering and Cybersecurity  
University of Advancing Technology

[LinkedIn](https://www.linkedin.com/in/caleb-quisenberry-611b11b3) | [GitHub Repository](https://github.com/FlyingQ-Inc/SIP_Project)
