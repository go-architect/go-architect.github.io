---
sidebar_position: 6
---

# VCS Analysis

A Version Control System (VCS) is a software tool commonly used to manage changes to a collection of files or documents over time.
Even if the use of a VCS or not during the project lifecycle, we decided to analyze few things related to how you're using the VCS in your project.

> **Note**
> At this moment Go-Architect only support analysis over projects that use Git as VCS.

You can select the number of months to filter the timespan for the analysis. The tool will analyze only the modifications done since this number of months.
On the right side of the tool there is a summary for contributors, containing the number of modified lines and the ratio for each contributor.

The left side of the tool contains a list of modified paths, listed ordered by status (showing first the paths with some kind of alert) and then by number of changes.
<img src="/screenshots/analysis-tools/vcs-analysis/vcs-01.png" alt="" title="" style={{ width:"70%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />

Go-Architect considers any kind of modification (additions and deletions) as a change, so if you remove 1 line and add 5 lines of code, then Go-Architect will consider 6 changes.

Also, the tool includes a list of modified files, listed ordered by status (showing first the files with some kind of alert) and then by number of changes.
<img src="/screenshots/analysis-tools/vcs-analysis/vcs-02.png" alt="" title="" style={{ width:"70%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />

The status `alert` is given when the path (or the file) contains changes from not enough contributors. The status criteria is:
- If only 1 contributor made changes to the path/file.
- In case that the project has more than 4 contributors, a minimum of 3 contributors must be involved in changes to each path/file.

<img src="/screenshots/analysis-tools/vcs-analysis/vcs-03.png" alt="" title="" style={{ width:"70%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />

In case that a path/file has enough contributors, then a status `OK` is given.
<img src="/screenshots/analysis-tools/vcs-analysis/vcs-04.png" alt="" title="" style={{ width:"70%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />
