---
sidebar_position: 1
---

# Introduction
This section explains why an architecture analysis tool can be useful for software projects, and also the architecture and features of Go-Architect.

## What is Go-Architect?
Go-Architect is a Software Architecture Analysis Tool for projects written in Go language. You can use this tool to analyze the design of your artifacts
in order to ease decisions related to refactoring your code, fixing issues or evolving the artifact's features.
<img src="/screenshots/intro-01.png" alt="Go-Architect First View" title="Go-Architect First View" />

## Why we should use an Architecture Analysis Tool?
Software Architecture Analysis Tool are used to improve quality and maintainability of software architectures.

There are some benefits for using this kind of tools, like:
- _**Early Detection of Design Flaws:**_ Architecture analysis tools can help identify design flaws, inconsistencies,
or violations of architectural principles before they become critical issues, saving time and resources by addressing problems
when they are easier and cheaper to fix.
- _**Quality Assurance:**_ These kind of tools can enforce best practices, coding standards and clean architecture concepts, ensuring that the software architecture adheres to established guidelines.
- _**Enhance Maintainability:**_ Ensuring that our architecture adheres to established architectural guidelines over time.
- _**Architectural Evolution Analysis:**_ This tools offers several ways to analyze (in different ways) the changes in software architecture over the time.

## Architecture
Go-Architect features are offered through a User interface created with Wails Project (https://wails.io/).

The User interface uses Go-Architect Library (https://pkg.go.dev/github.com/fdaines/go-architect-lib) to analyze Go Projects and collect architecture metrics.

To store the created projects and historical data, Go-Architect uses a set of json files saved in the HOME directory of the current user.
<img src="/screenshots/intro-02.png" alt="Go-Architect Architecture" title="Go-Architect Architecture" width="50%" />



## Features
- Analyze projects in Go language, collecting metrics and interpreting architectural information.
- Graphic visualization to facilitate the understanding of architectural decisions.
- Stores historical data to compare the evolution of your architecture.
