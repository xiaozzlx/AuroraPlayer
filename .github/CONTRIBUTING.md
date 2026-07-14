# Contributing to Aurora

Thank you for your interest in contributing to Aurora.

Aurora is not only a music player.

It is a long-term evolving audio experience platform.

Every contribution should help Aurora become:

- More maintainable
- More extensible
- More understandable
- More reliable


# Before Contributing

Before making changes, please understand Aurora's engineering philosophy.

Important documents:
docs/

├── 00_Project/
│
├── 01_Architecture/
│
├── 02_Development/
│
├── 03_Features/
│
├── 04_API/
│
├── 05_Design/
│
├── 06_Releases/
│
└── 07_Research/

Especially:

- Project Vision
- Engineering Principles
- Architecture Specifications
- Engine Catalog


# Engineering Principles

Aurora follows these principles:

## Documentation Before Implementation

Significant changes should have documentation before implementation.

Examples:

- Architecture changes
- New engines
- New public interfaces
- Major features


## Architecture Before Features

Features should not damage architecture.

A feature that creates long-term architectural problems is incomplete.


## Verify Before Assuming

Do not guess:

- APIs
- Interfaces
- Behaviors
- System limitations

Verify information before implementation.


## Reuse Before Reinvention

Prefer existing solutions when appropriate.

Create new systems only when they provide long-term value.


## Small Modules

Prefer:

- Clear responsibility
- Small modules
- Explicit boundaries
- Stable interfaces


## Observable Architecture

Important systems should provide visibility into:

- State
- Events
- Performance
- Failures
- Runtime behavior


# Development Workflow

A typical Aurora contribution follows:
Understand

↓

Document

↓

Design

↓

Implement

↓

Test

↓

Review

↓

Merge


# Code Changes

Before submitting code:

Please ensure:

- Code follows existing architecture.
- Responsibilities remain clear.
- Existing interfaces are respected.
- New dependencies are justified.
- Documentation is updated when necessary.


# Architecture Changes

Architecture changes require additional care.

For changes involving:

- Engines
- Public interfaces
- Event systems
- Plugin systems
- Core infrastructure

Please provide:

- Motivation
- Alternatives considered
- Impact analysis
- Migration plan


# Testing

Contributions should include appropriate validation.

Depending on the change:

- Unit tests
- Integration tests
- Manual verification
- Performance measurements


Performance changes should include evidence.

Avoid optimization without measurement.


# Commit Messages

Aurora follows conventional commit style.

Examples:
feat(audio): add audio analyzer

fix(player): resolve playback state issue

docs(architecture): update engine model

refactor(renderer): simplify rendering pipeline

perf(audio): optimize fft processing


# Pull Requests

Pull requests should explain:

## What changed?

Describe the implementation.


## Why?

Explain the motivation.


## How was it tested?

Provide validation information.


## Architecture impact

Explain whether architecture is affected.


# AI-Assisted Development

Aurora supports AI-assisted development.

AI tools are treated as engineering assistants.

AI contributions must:

- Verify information before implementation.
- Respect existing architecture.
- Avoid inventing interfaces.
- Clearly state uncertainty.
- Preserve documentation quality.


# Code of Conduct

Aurora values:

- Respect
- Transparency
- Collaboration
- Continuous learning
- Engineering excellence


Good engineering is collaborative.

Knowledge should be shared.

---

Thank you for helping Aurora evolve.