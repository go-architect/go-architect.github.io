---
sidebar_position: 5
---

# Dependency Coupling

Dependency Coupling Tool helps us to detect how coupled is our artifact with a specific dependency, that can be an internal, same organization, external or a standard package.

## A short but very common story
Imaging that you're working on a Go Project that uses YAML files, in the beginning you decided to use an external package to work with YAML files, and you found that [gopkg.in/yaml.v2](https://gopkg.in/yaml.v2) fits your requirements.

Few months later, a friend told you about am alternative package (https://github.com/goccy/go-yaml) that seems to be more active in terms of maintainability, so you're thinking in replace `gopkg.in/yaml.v2` with `github.com/goccy/go-yaml`.

The reasonable way to do this should start with an analysis of how coupled our project is with this dependency. It is very different in terms of complexity and effort to change a library that is used in a single package (and perhaps a single file), than when an external library is used directly in almost any package and file in the project (yes, it would be a very poor design, but it often happens).
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-01.png" alt="Dependency Management" title="Dependency Management" />

Sometimes our code is very coupled to an external dependency, in these cases a good approach is to abstract this dependency to decouple our code and then replace the specific dependency to the new one, this approach
helps us to be prepared to future dependency updates or a new replacement (in case that a more fancy YAML library appears). The following image represents this case.
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-02.png" alt="Dependency Management" title="Dependency Management" />

The previous example applies in the same way if we want to upgrade a dependency version and there are some breaking changes (for example when we're upgrading to a new major version).


## Using the Go-Architect Tool

The Dependency Coupling Analysis Tool offers a very simple way to analyze how coupled is your project to a specific package.
To start the analysis, you need to enter the package in the form at the top of the page.
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-03.png" alt="Select Dependency" title="Select Dependency" />

In this example we're going to analyze how coupled is the [arch-go](https://github.com/fdaines/arch-go) tool to the [github.com/spf13/cobra](https://github.com/spf13/cobra) package.
The tool will show the summary result for the coupling analysis, in this case is showing that the calculated coupling level is 11, it means that there are 11 instructions in the project that uses the `Cobra` package.
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-04.png" alt="View Dependency Coupling Summary" title="View Dependency Coupling Summary" />


Also, you can expand the dependant package to list all the files in this package that depends on the selected dependency.
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-05.png" alt="View Dependency Coupling Details" title="View Dependency Coupling Details" />


Finally, for a more detailed view, you can open the entry for a specific file to display the source code.
The code will highlight every line that uses the dependency.
<img src="/screenshots/analysis-tools/dependency-coupling/dependency-coupling-06.png" alt="View SourceFile Details" title="View SourceFile Details" />

> **Note**
> The 4th time that `describe.go` file uses the `Cobra` package is line number 21 that is not showed in the previous screenshot.
