# Intelligent Tower Mounted Distribution Node

This repository contains the website and supporting materials for my Student Innovation Project at the University of Advancing Technology. The project supports my studies in Network Engineering and Cybersecurity.

**Author:** Caleb Quisenberry  
**Course:** SIP408, SIP Documentation  
**Status:** Physical distribution concepts previously deployed; revised monitoring prototype planned  
**Last updated:** September 20, 2026

## Project Website

- [Home](https://flyingq-inc.github.io/SIP_Project/index.html)
- [SIP Documentation and Progress](https://flyingq-inc.github.io/SIP_Project/sip.html)

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
- Circuit-sensing components selected for the demonstration.
- A gateway and supporting services to deliver readings to a receiving application.

The earlier Raspberry Pi and cellular communication concept has been replaced by this planned approach. Specific hardware and software selections remain to be finalized.

## Progress Update: September 20, 2026

No additional construction or testing has been completed since the previous course module. This update reflects changes in project direction and planned work.

The primary setback is the loss of access to the two original installations. Building a standalone test module will provide an accessible platform for continued development, testing, and presentation.

Solar and battery power were considered in the earlier design. Their role will be reevaluated after the revised hardware and power requirements are established. Reporting during a site outage remains an unverified design goal.

## Planned Minimum Demonstration

The initial demonstration will aim to:

1. Represent a monitored power circuit in the off-tower module.
2. Detect a simulated circuit fault using the Arduino-based controller.
3. Transmit the circuit status over LoRaWAN.
4. Display the received status in an application.
5. Detect and report recovery when the circuit returns to its normal state.

This demonstration has not yet been completed.

## Proposed Development Timeline

| Stage | Planned Work | Completion Target |
|---|---|---|
| Design and selection | Define the demonstration scope, select components, and confirm gateway and service requirements. | Week 2 |
| Assembly and programming | Assemble the test module and develop basic sensing and reporting functions. | Week 2 through Week 3 |
| Initial functionality | Demonstrate detection and transmission of a simulated circuit fault. | End of Week 3 |
| Validation and documentation | Test fault and recovery conditions, record results, and update presentation materials. | Following initial functionality |

This timeline is a target and depends on component availability and successful integration.

## Remaining Work

- Finalize the controller, LoRaWAN hardware, and circuit-sensing components.
- Build the off-tower test and display module.
- Program circuit monitoring and fault detection.
- Establish the LoRaWAN reporting path and receiving application.
- Plan device authentication and secure handling of communication credentials.
- Test normal, fault, and recovery conditions.
- Update diagrams to match the revised design.
- Revise the SIP Brief with dated and highlighted progress.
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

Earlier diagrams, photographs, and videos are retained to show the project's development history. Some materials describe the previous cellular design and may not reflect the current Arduino and LoRaWAN direction.

The embedded SIP Brief is a separate PDF. Updating the website or this README does not revise that document.

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