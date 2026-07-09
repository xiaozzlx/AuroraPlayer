# Player Module

> Aurora Player 核心播放器模块设计文档

---

# Overview（概述）

Player Module 是 Aurora Player 的核心模块。

它负责所有与音乐播放相关的功能，包括：

- 播放
- 暂停
- 上一首
- 下一首
- 播放进度
- 时间同步
- 音量控制
- 播放模式

Player Module 不负责音乐库、搜索、歌词等业务。

---

# Responsibilities（职责）

Player Module 负责：

- 控制音频播放
- 管理播放状态
- 更新播放时间
- 更新播放进度
- 切换歌曲
- 控制音量
- 控制播放模式

Player Module 不负责：

- 搜索歌曲
- 管理歌单
- 管理数据库
- 下载音乐
- UI 布局

---

# Current Architecture

目前播放器由以下几个部分组成：

App
│
├── SongList
│
├── PlayerBar
│
└── HTMLAudioElement

其中：

App 保存播放器状态。

PlayerBar 负责显示播放器 UI。

HTMLAudioElement 负责真正播放音乐。

---

# Player State

当前播放器状态：

currentSong

当前播放歌曲

---

currentIndex

当前歌曲索引

---

currentTime

当前播放时间

---

duration

歌曲总时长

---

isPlaying

播放状态

true

false

---

audio

HTMLAudioElement

---

# User Actions

播放器支持以下用户操作：

Play

Pause

Previous

Next

Seek

Volume

Loop

Shuffle（未来）

Repeat（未来）

---

# Event Flow

## 点击播放

Play Button

↓

togglePlay()

↓

audio.play()

↓

isPlaying = true

↓

UI 更新

---

## 点击暂停

Pause Button

↓

audio.pause()

↓

isPlaying = false

↓

UI 更新

---

## 点击下一首

Next Button

↓

nextSong()

↓

更新 currentIndex

↓

更新 currentSong

↓

更新 audio.src

↓

自动播放

↓

UI 更新

---

## 点击上一首

Previous Button

↓

previousSong()

↓

更新 currentIndex

↓

更新 currentSong

↓

更新 audio.src

↓

自动播放

↓

UI 更新

---

## 点击进度条

Progress Bar

↓

handleSeek()

↓

audio.currentTime

↓

更新 currentTime

↓

UI 更新

---

# Future Features

播放器未来计划支持：

- 音量控制
- 随机播放
- 单曲循环
- 列表循环
- 倍速播放
- 播放历史
- 播放队列
- Crossfade（淡入淡出）
- Equalizer（均衡器）

---

# Design Principles

播放器遵循以下设计原则：

1. UI 与业务逻辑分离

PlayerBar 不负责播放逻辑。

所有播放逻辑由 App（未来迁移至 useAudio 或 Player Context）统一管理。

---

2. 单一数据源

播放器状态只能有一个来源。

避免多个组件维护同一份状态。

---

3. 低耦合

UI 不直接操作 Audio。

UI 只发送事件。

真正播放由播放器核心完成。

---

4. 可扩展

播放器未来能够替换播放引擎，而无需修改 UI。

例如：

HTMLAudioElement

↓

Howler.js

↓

Web Audio API

↓

libmpv

UI 均无需修改。

---

# Version

Current Version

v0.1

Status

In Development