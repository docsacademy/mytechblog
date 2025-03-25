---
draft: true
---

# Setting Up DeepSeek on a Mac with Ollama & Chatbox AI

Running Large Language Models (LLMs) locally can offer significant advantages in terms of privacy, speed, and cost. Here are a few common approaches:

**Native applications** <br />
Applications specifically designed for running LLMs locally with minimal setup:

* **Ollama**: Lightweight, optimized app for running various LLMs
* **LM Studio**: User-friendly GUI with model management and chat interface
* **GPT4All**: Simple application with bundled models

**Command-line tools** <br />
For users who prefer terminal interfaces:

* **llama.cpp**: C++ implementation for running LLMs
* **koboldcpp**: Focused on story generation and creative writing

**Web UIs** <br />
Browser-based interfaces connecting to locally running models:

* **Text Generation WebUI**: Web interface for interaction with different models
* **Jan.ai**: Open-source ChatGPT alternative

In this tutorial, we'll focus on setting up DeepSeek-R1 using Ollama on a Mac. The combination of Ollama (for model management) with Chatbox AI (for user interface) offers an excellent balance of simplicity and functionality for most users running LLMs locally.

## Installation on Mac

1. Visit ollama.com and click the download button for macOS.
2. Open the downloaded DMG file and drag the Ollama icon to your Applications folder.
3. Launch Ollama from your Applications folder. You'll see a small icon appear in your menu bar.
4. Verify the installation by opening Terminal and running:

````bash
ollama --version
```

Note for Windows Users

Windows users can also use Ollama by downloading the Windows installer from ollama.com and running the installer and following the prompts.