---
sidebar_position: 3
---

# Dependency Structure Matrix

A Dependency Structure Matrix can be used to represent many kind of relations between elements, components, and other entities. We can use a DSM to represent, for example:
- package dependencies, for example, package `P` uses functions/classes declared in package `J`
- dataflow dependencies, for example component `A` needs data from components `W` and `X`.
- task dependencies, for example task `X` should start only when tasks `B` and `C` finished.
- other kind of relations between any kind of entities.

Go-Architect uses a Dependency Structure Matrix to represent dependencies between packages in a Go Project.
<img src="/screenshots/analysis-tools/dsm/dsm-01.png" alt="Dependency Structure Matrix" title="Dependency Structure Matrix" />

## How to read a DSM
The following example shows a Dependency Structure Matrix for a 7-element project (Elements `A` to `G`), as you can see, a DSM is a `NxN matrix`
containing the `N` elements in its rows and columns, if you take a single column (in the example, column for element `B`), each cell in this column
represents if the corresponding element (element `B`) depends on the element for the corresponding row. The following image shows that element `B` depends on elements `D` and `F`.

You can use the same criteria to verify that element `E` depends on elements `D` and `F`.
<img src="/screenshots/analysis-tools/dsm/dsm-02.png" alt="DSM basics" title="DSM basics" style={{ width:"40%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />


## Rearrange elements in a DSM
The Dependency Structure Matrix showed in the example above is easy to read and understand what are the elements with more or fewer dependants, but in real life projects
we will have a lot of elements, for example the first image in this page (from Go-Architect) shows a project that uses 46 packages, in this cases showing the packages in
the DSM sorted by alphabetical order or another criteria could not be helpful trying to understand the design of the project.

To represent the dependencies in a more readable way, we could try to transform the DSM into a [strictly lower triangular matrix](https://mathworld.wolfram.com/StrictlyLowerTriangularMatrix.html), to get this we can apply some column-switching operations to the DSM.

The following example shows a re-arranged DSM for the same project as the example above. As you can see, even if the project contains few elements, this second DSM is more readable than the previous one, and we can get fast insights like:
- Elements `A` and `B`, as are not used by any other element, are candidates to be the entry points of the project (maybe they contain the main function or a command function).
- Element `G` is used directly and indirectly by almost all elements in the project, so if we want to update it or replace this dependency, we need to take this task with a lot of care, because we can include some bugs or lose functionalities in the process. In this case we can analyze if using an abstraction first to ensure the update/replace process.

<img src="/screenshots/analysis-tools/dsm/dsm-03.png" alt="Rearranged DSM" title="Rearranged DSM" style={{ width:"40%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />


> **Note**
> If your project contains circular dependencies, then it will not be possible to represent it with a strictly lower triangular matrix DSM, but as Go compiler doesn't allow circular dependencies, Go-Architect should always show the project DSM as a strictly lower triangular matrix.
