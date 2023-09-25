---
sidebar_position: 2
---

# Dependency Graph

The Dependency Graph is a visual representation that illustrates the relationships and dependencies between packages in a software artifact.
It helps developers and maintainers understand packages relations, which is crucial for managing and building complex software projects.

<img src="/screenshots/analysis-tools/dependency-graph/dependency-graph-01.png" alt="XXXXXX" />

You can move through the dependency graph canvas using the controls in the lower left corner, and zoom-in, zoom-out and center the canvas using the controls located in the lower right corner.
<img src="/screenshots/analysis-tools/dependency-graph/dependency-graph-02.png" alt="XXXXXX" style={{ border: "1px solid gray", width:"100px", height:"70px", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }}  />
<img src="/screenshots/analysis-tools/dependency-graph/dependency-graph-03.png" alt="XXXXXX" style={{ border: "1px solid gray", width:"70px", height:"70px", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }}  />

The nodes of the graph are classified using the following criteria:

| Package Type          | Description                                                                      |
|-----------------------|----------------------------------------------------------------------------------|
| Internal packages     | Packages included in the analyzed project.                                       |
| External packages     | 3rd party packages and libraries.                                                |
| StandardLib packages  | Packages and libraries from the golang standard lib.                             |
| Organization packages | Packages that are owned by the same organization that owns the analyzed project. |

Using the previous criteria, all the nodes in the graph are coloured using the following configuration.
<img src="/screenshots/analysis-tools/dependency-graph/dependency-graph-04.png" alt="XXXXXX" style={{ width:"50%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }}  />

If you click on a specific node, then it details will be displayed on the `Package Details` Widget.
<img src="/screenshots/analysis-tools/dependency-graph/dependency-graph-05.png" alt="Package Details" title="Package Details" />

The selected package details includes:
- **Selected Package:** The name of the selected package.
- **Depends on Packages:** Packages used by the selected package.
- **Dependant Packages:** Packages that uses the selected package.
