---
sidebar_position: 4
---

# Instability & Abstractness

Instability and Abstractness are two metrics proposed by "Uncle Bob" Martin in 1994,
focused on the relationship between packages in a software project.

## Concepts

### Instability
Instability is a way to measure how dependent is a package related to other packages within a system.
In other words it shows the probability that a package needs to change in response to changes in other packages.

#### Calculating Instability
To calculate instability first we need to understand two concepts, Afferent and Efferent coupling.
- **Afferent Coupling ($Ca$):** Represents when one or more packages import the analyzed package.
- **Efferent Coupling ($Ce$):** Represents when the analyzed package imports one or more packages within a system.

<img src="/screenshots/analysis-tools/instability-abstractness/instability-01.png" alt="Afferent and Efferent Coupling" title="Afferent and Efferent Coupling" />

$$
I : Instability = \cfrac{Ce}{Ca+Ce}
$$

This metric has the range [0,1].
- $I=0$ indicates a maximally stable category. It means that the package is not affected by any change in the rest of the system.
- $I=1$ indicates a maximally instable category. It means that the package is affected by changes in the rest of the system and any change in this package does not affect the rest of the system.

> **Note**
> There is a border case when you have an isolated package, that is a package the does neither imported any other package in the system
> nor imported by any other package in the system. In this case the instability formula is broken (because $Ca+Ce = 0$).
> In this case, as the package is not affected by any change in the system, Go-Architect considers $Instability = 0$.

### Abstractness
Abstraction is a concept in software development that comes from object-oriented programming (OOP) languages.
Its main goal is to define abstractions to hide concrete implementations, allowing implementing complex logic on top of the provided abstractions without understanding all the hidden complexity.

Abstractness is a measure of the flexibility of a software system. Higher the abstraction, greater the flexibility, and lower the abstraction the system comes more rigid.
If system components depend on abstractions, the system is easier to extend and change than if they depend directly on concrete implementations.

#### Calculating Abstractness
$$
A : Abstractness = \cfrac{Abstract\ Classes}{Total\ Classes}
$$

This metric range is [0,1].
This metric has the range [0,1].
- $A=0$ indicates a complete concrete.
- $A=1$ indicates a complete abstract.

> **Note**
> As Go doesn't include the concept of classes nor abstract and concrete classes, Go-Architect considers interfaces and structures as abstractions while functions and methods as implementations, so then the formula to calculate abstractness in a package is:
>
> $$
> A : Abstractness = \cfrac{number\ of\ (interfaces, structs)}{number\ of\ (interfaces, structs, functions, methods)}
> $$


## The Instability v/s Abstractness Graph

### The Main Sequence
The main sequence represents the balance between Abstraction and Stability of our module/package.
<img src="/screenshots/analysis-tools/instability-abstractness/instability-02.png" alt="Instability vs Abstractness Main Sequence" title="Instability vs Abstractness Main Sequence" style={{ width:"50%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />

To calculate how far our module is from the main sequence, we can use the normalized distance formula.

$$
D = \lvert A + I - 1 \rvert
$$
- $D=0$ indicates a balanced module, it means that it is as abstract as stable.
- $D=1$ indicates a unbalanced module, it means a full abstract and instable module or a full concrete and stable one

<img src="/screenshots/analysis-tools/instability-abstractness/instability-03.png" alt="Normalized Distance from Main Sequence" title="Normalized Distance from Main Sequence" style={{ width:"55%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />


> **Note**
> This formula is used to simplify the calculation for the distance from the main sequence, is not the exact distance, but it works to
> estimate how far a module is form the main sequence.

## Using the Go-Architect Tool

The Instability & Abstractness Tool in Go-Architect includes a chart representation for all the packages in the project and a detailed
table with the corresponding metrics for each one.
<img src="/screenshots/analysis-tools/instability-abstractness/instability-04.png" alt="Instability & Abstractness Tool" title="Instability & Abstractness Tool" />

The Instability v/s Abstractness Graph shows all the packages in the project positioned according to they abstractness and instability metrics.
If you put the mouse hover a package, it will display the detailed values for each metric (as shown in the following image).
<img src="/screenshots/analysis-tools/instability-abstractness/instability-05.png" alt="Instability vs Abstractness Graph" title="Instability vs Abstractness Graph" style={{ width:"40%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />


In the right side of the tool, a table contains all the detailed metrics for each package in the project.
<img src="/screenshots/analysis-tools/instability-abstractness/instability-06.png" alt="Metric Details Table" title="Metric Details Table" style={{ width:"70%", marginLeft: "30px", marginTop: "-10px", marginBottom: "30px" }} />
