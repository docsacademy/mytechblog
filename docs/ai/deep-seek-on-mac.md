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

## Installing Ollama

1. Go to the [Ollama website](https://ollama.com/) and click the download button for macOS.

    ![Downloading Ollama](/img/docs/ai/ollama-download.png)

2. Double-click the downloaded zip file to extract the DMG installation file.
3. Drag the DMG file into your **Applications** folder and launch it from that folder.
4. Follow the on-screen instructions to install Ollama. After successful installation, you'll see a small icon appear in your menu bar.

    ![Ollama icon in the menu bar](/img/docs/ai/ollama-icon.png)

5. Copy the command displayed on the **Finish** screen and click **Finish**.

    ![Copying the Ollama command](/img/docs/ai/ollama-command.png)

6. Open Terminal and run the copied command, e.g.;

    ```bash
    $ ollama run llama 3.2
    ```

7. Verify the installation by opening Terminal and running:

    ```bash
    $ ollama --version
    ollama version is 0.5.13
    ```

 > **Note for Windows users** <br />
 > Windows users can also use Ollama by downloading the Windows installer from the [Ollama website](https://ollama.com/) and running the installer and following the prompts.

## Installing DeepSeek-R1

DeepSeek is a family of powerful open-source language models with impressive capabilities.

1. Return to the Ollama website and search for **DeepSeek**.​

    ![Searching for DeepSeek-R1](/img/docs/ai/ollama-looking-for-deepseek.png)

2. Click the **deepseek-r1** link to open the DeepSeek-R1 page.
3. Choose the model size based on your Mac's capabilities.

    ![Selecting the DeeSeek-R1 model](/img/docs/ai/ollama-selecting-model.png)

4. Click the **Copy** button to copy the installation command (e.g., ollama run deepseek-r1:7b for the 7b version of DeepSeek-R1).​

5. Open Terminal, paste the copied command, and press Return. The model (~4.9GB) will begin downloading and installing. This may take a few minutes, depending on your internet speed.

    ![Downloading DeepSeek-R1](/img/docs/ai/ollama-downloading-deepseek.png)

## Running DeepSeek in Terminal

* After installation, you can start using DeepSeek immediately. In Terminal, type a prompt and press Return.​

* To exit, type **/bye** and press Return.​

* To restart DeepSeek later, run the command ollama run `deepseek-r1:8b` in Terminal.

## Installing Chatbox AI

While terminal interaction works, a graphical interface makes conversations more intuitive and easier to manage.

Chatbox AI is an open-source, cross-platform application that provides a ChatGPT-like interface for various AI models, including those running locally through Ollama.

1. Go to the [Chatbox website](https://chatboxai.app/en#download) and download the latest version for macOS (.dmg file).

    ![Downloading Chatbot AI](/img/docs/ai/ollama-downloading-chatbot-ai.png)

2. Open the downloaded DMG file and drag the Chatbox icon to your Applications folder.

    ![Dragging Chatbot AI into Applications](/img/docs/ai/ollama-chatbox-to-applications.png)

3. Launch Chatbox from your Applications folder. When prompted, click **Open**.

    ![Launching Chatbot AI](/img/docs/ai/ollama-launching-chatbox.png)

If macOS shows a security warning, right-click the app and select "Open" instead.

## Connecting Chatbox to Ollama

1. Click **Use My Own API Key / Local Model**.
2. Select **Ollama API**.

    ![Selecting Ollama API](/img/docs/ai/ollama-selecting-ollama-api.png)

3. Select the installed DeepSeek-R1 model and click **Save**.

    ![Selecting DeepSeek-R1 in Chatbox AI](/img/docs/ai/ollama-selecting-model-in-chatbox.png)

4. In the left navigation menu, click **New Chat** and type your first question.

    ![Asking your question in Chatbox AI](/img/docs/ai/ollama-chatbox-question.png)