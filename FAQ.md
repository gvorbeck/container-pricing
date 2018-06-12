### New Application Solution and Solution Consumption License Charges Frequently Asked Questions ###

**Why is IBM introducing Solution Consumption License Charges?**
    Solution Consumption License Charges (SCLC) bases the charges for MLC software on the total MSUs consumed by a Container Pricing solution during a reporting period - instead of a peak rolling four-hour average. 
    SCLC utilizes the Container Pricing infrastructure to provide truly consumption based pricing for a solution. This delivers on the "pay as you go" pricing promised by public cloud providers, without the need for ongoing technical management required to manage instance charging in those environment.
    Additionally, by basing charges on total consumption, SCLC provides additional value over peak R4HA models for workloads that are unpredictable and/or subject to high spikes in utilization.
    These characteristics also enable SCLC as a simple and transparent mechanism to tie the cost of the workload to the actual business value delivered.
    
**How is the MSU consumption measured by SCRT?** 
    For each hour during a reporting period, SCRT will calculate the MSUs consumed by the LPARs and/or tenant resource groups (TRGs) that are configured to be part of the Container. This MSU calculation is based on the actual general purpose processor CPU time that the workloads consume. 
    SCRT will simply sum the hourly MSU consumption for the reporting period - this is reported as the "Total MSU Consumption" for the Container. 
    More details can be found here <insert techdoc link>
    
**Which IBM servers are eligible?**
    The New Application Solution is available for qualified solutions running on IBM z14 and z13 servers (including the z13s®).
    
**What releases of z/OS are eligible?**
    For colocated New Application Solutions, z/OS V2R2 or above is required with the PTFs for APARs associated with fix category “IBM.Function.Pricing Infrastructure”.
   


**How does this relate to the Container Pricing New Application Solution announced in November 2017?**
    <tbd>
    
**What is “new” application workload?**
    A New Application Solution is a new z/OS application not previously running on any mainframe server in the client's enterprise. In certain cases it can also include an existing z/OS application which undergoes significant enhancements. IBM must approve all New Application Solutions. Taking existing z/OS workload off the mainframe for a period of time and then moving it back on later will not qualify as “new” workload.


### Competitive Differentiators ###

Container Pricing can scale from collocated solutions within existing LPARs, through to separate LPARs, up to multiple-LPAR solutions
Container Pricing does not directly impact the cost of unrelated workloads
Client has flexibility to determine where to deploy based on technical requirements and preference – not driven by pricing
z/OS enables solution-level metering and controls
he client is not responsible for monthly manual tagging and tracking
