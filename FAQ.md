## New Application Solution and Solution Consumption License Charges Frequently Asked Questions ##

### Solution Consumption License Charges ###

**Why is IBM introducing Solution Consumption License Charges?**
    
Solution Consumption License Charges (SCLC) bases the charges for MLC software on the total MSUs consumed by a Container Pricing solution during a reporting period - instead of a peak rolling four-hour average. 

SCLC utilizes the Container Pricing infrastructure to provide truly consumption based pricing for a solution. This delivers on the "pay as you go" pricing promised by public cloud providers, without the need for ongoing technical management required to manage instance charging in those environment.

Additionally, by basing charges on total consumption, SCLC provides additional value over peak R4HA models for workloads that are unpredictable and/or subject to high spikes in utilization.

These characteristics also enable SCLC as a simple and transparent mechanism to tie the cost of the workload to the actual business value delivered.

### Container Pricing New Application Solution ###

**Which IBM servers are eligible?**

The New Application Solution is available for qualified solutions running on IBM z14 and z13 servers (including the z13s®).
    
**Which releases of z/OS are eligible?**

For colocated New Application Solutions, z/OS V2R2 or above is required with the PTFs for APARs associated with fix category “IBM.Function.Pricing Infrastructure”.
For separate LPAR Solutions, z/OS V2R1 or above is required.
    
**What is a "new” application workload?**

A New Application Solution is a new z/OS application not previously running on any mainframe server in the client's enterprise. In certain cases it can also include an existing z/OS application which undergoes significant enhancements. IBM must approve all New Application Solutions. 

Taking existing z/OS workload off the mainframe for a period of time and then moving it back on later will not qualify as “new” workload.

**How is IPLA product entitlement measured in the New Application Solution?**

IPLA programs whose Value Units are based upon MSUs and are part of the Container solution software stack must be entitled to the peak rolling four-hour average of the Container Solution, as reported by SCRT. 

**Can VUE products be used within the updated New Application Solution?**


### Calculating and Reporting Consumed MSU ###
    
**What is the reporting process for Solution Consumption License Charges?**     

There is no new tool or data collection process for SCLC. SCRT has been enhanced to report the MSU consumption for Container Pricing Solutions as of SCRT V25.2.

No new SMF data need be collected for SCLC. The existing SMF records already collected for SCRT use contain all the data needed to support the SCLC metric.
    
**How is the MSU consumption measured by SCRT?** 

For each hour during a reporting period, SCRT will calculate the MSUs consumed by the LPARs and/or tenant resource groups (TRGs) that are configured to be part of the Container. This MSU calculation is based on the actual general purpose processor CPU time that the workloads consume. 

SCRT will simply sum the hourly MSU consumption for the reporting period - this is reported as the "Total MSU Consumption" for the Container.

More details can be found here *insert techdoc link*
    
