# Aurora Project Glossary

> Status: Draft
>
> Version: 0.1.0
>
> Applies To: Entire Aurora Project
>
> Related Documents:
>
> - PROJECT_CHARTER.md
> - PROJECT_VISION.md

---

# 1. Purpose

This document defines the official terminology used throughout the Aurora Project.

The definitions in this document are normative.

Project documentation, architecture, RFCs, ADRs, discussions, and source code SHOULD use these terms consistently.

When new architectural concepts are introduced, this glossary SHOULD be updated before widespread adoption.

---

# 2. Project Terminology

## Aurora

Aurora is an open-source music experience platform.

Aurora is not merely a music player.

Aurora includes applications, engines, documentation, APIs, plugins, tools, and community contributions.

---

## Platform

The complete Aurora ecosystem.

A Platform consists of multiple independent systems working together.

Examples include:

- Desktop Application
- Engines
- Plugin System
- Documentation
- APIs
- Community

---

## Core

The minimum runtime required for Aurora to function.

The Core should remain lightweight, stable, and independent.

Everything else should be considered optional or extensible.

---

# 3. Architecture

## Engine

An Engine is an independent runtime subsystem responsible for one major capability.

Examples:

- Audio Engine
- Visualization Engine
- Plugin Engine
- AI Engine

Engines communicate through well-defined interfaces.

---

## Module

A Module is a self-contained implementation unit.

Modules belong to an Engine.

Modules SHOULD have a single responsibility.

Modules SHOULD avoid unnecessary coupling.

---

## Component

A reusable software building block.

Components are typically user interface elements or reusable implementation pieces.

A Component is smaller than a Module.

---

## Service

A Service provides reusable functionality to other parts of the system.

Services contain business logic.

Services SHOULD avoid direct user interface responsibilities.

---

## Interface

A formal contract between software components.

Interfaces define communication.

Interfaces SHOULD remain more stable than implementations.

---

# 4. Extensibility

## Plugin

A Plugin is an independently developed runtime extension.

Plugins communicate only through official Aurora APIs.

Plugins should never rely on internal implementation details.

---

## Extension

A generic capability that extends Aurora.

Plugins are one type of Extension.

Future extension mechanisms may also exist.

---

## Theme

A Theme defines the application's visual appearance.

Themes should affect presentation only.

Themes must not change application behavior.

---

## Integration

A connection between Aurora and external software or services.

Examples include:

- Jellyfin
- Navidrome
- Subsonic
- OBS

---

# 5. Audio

## Track

A single playable audio item.

---

## Playlist

An ordered collection of Tracks.

---

## Library

The complete collection of music managed by Aurora.

A Library may combine multiple sources.

---

## Audio Analysis

The process of extracting meaningful musical information from audio.

Examples include:

- Frequency
- Beat
- Tempo
- Pitch
- Loudness
- Rhythm
- Musical Structure

Audio Analysis is independent from visualization.

---

## Beat Detection

The process of identifying rhythmic events within music.

Future implementations may distinguish:

- Kick
- Snare
- Hi-Hat

Beat Detection is considered part of Audio Analysis.

---

# 6. Visualization

## Visualization

Any visual representation generated from music.

Examples include:

- Spectrum
- Waveform
- Particles
- Camera Motion
- Shader Effects

Visualization should react naturally to music.

---

## Scene

The visual environment rendered while music is playing.

A Scene may contain:

- Background
- Lighting
- Particles
- Camera Motion
- Lyrics Animation
- Shader Effects
- 3D Objects

---

## Shader

A programmable graphics effect executed by the rendering pipeline.

Shaders modify visual appearance rather than application logic.

---

## Renderer

The subsystem responsible for producing visual output.

Renderer implementations may evolve without changing higher-level architecture.

---

## Render Pipeline

The sequence of rendering operations that produce the final image.

---

# 7. Artificial Intelligence

## AI Feature

A user-facing capability powered by Artificial Intelligence.

Examples include:

- Lyrics Enhancement
- Visualization Generation
- Recommendations

---

## AI Assistant

An AI system that assists users or developers.

AI should remain transparent, optional, and controllable.

---

# 8. Engineering

## RFC

Request for Comments.

A document proposing significant project changes before implementation.

---

## ADR

Architecture Decision Record.

A document recording important architectural decisions.

---

## Specification

A document describing required behavior.

Specifications define expectations independently of implementation.

---

## Draft

A document under active development.

Content may change.

---

## Stable

A document or feature considered mature enough for long-term use.

---

## Deprecated

A feature scheduled for future removal.

Deprecated features should be avoided in new development.

---

# 9. Aurora Concepts

## Living Platform

Aurora is designed as a Living Platform.

A Living Platform continuously evolves without requiring complete redesign.

Its architecture embraces change while preserving long-term stability.

---

## Evolution

The continuous improvement of Aurora through incremental, sustainable development.

Evolution is preferred over repeated rewrites.

---

## Music Experience

The complete experience created by combining music, visualization, interaction, AI, and design.

Music playback is only one part of the Music Experience.

---

# 10. Controlled Vocabulary

The terminology defined in this document represents the official language of the Aurora Project.

Important architectural terms SHOULD be defined here before widespread use.

Documentation and source code SHOULD avoid introducing conflicting terminology.

Consistency of language improves consistency of architecture.

---

# 11. Living Document

This glossary will evolve alongside Aurora.

Definitions should remain stable whenever possible.

Changes affecting architectural terminology should be reviewed carefully because they influence documentation, implementation, and future design.