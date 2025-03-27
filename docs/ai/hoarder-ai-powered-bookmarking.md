---
draft: true
---

# Setting Up Hoarder on Your Mac

I'll guide you through the entire process of setting up Hoarder on your Mac, step by step.

## 1. Install Prerequisites

First, make sure Docker Desktop is installed on your Mac:

1. If you don't have Docker Desktop yet, download it from [Docker's official website](https://www.docker.com/products/docker-desktop/).
2. Install Docker Desktop by dragging it to your Applications folder.
3. Launch Docker Desktop and wait for it to fully start (the whale icon in your menu bar will indicate when it's ready).

Docker Desktop includes both Docker and Docker Compose, so you'll have everything you need.

## 2. Create a Directory for Hoarder

Open Terminal (you can find it in Applications → Utilities, or search for it using Spotlight with ⌘+Space).

Create a new directory for Hoarder:

```bash
mkdir ~/hoarder-app
cd ~/hoarder-app
```

## 3. Download the Docker Compose File

Mac doesn't come with `wget` by default, but you can use `curl` instead:

```bash
curl -O https://raw.githubusercontent.com/hoarder-app/hoarder/main/docker/docker-compose.yml
```

## 4. Create the Environment Variables File

Create a `.env` file in the same directory:

```bash
touch .env
```

Now open the file with a text editor:

```bash
open -e .env
```

Let's generate secure random strings for your configuration. In a new Terminal tab/window, run:

```bash
openssl rand -base64 36
```

Run this command twice to get two different strings. Then add these values to your `.env` file:

```
HOARDER_VERSION=release
NEXTAUTH_SECRET=your_first_random_string_here
MEILI_MASTER_KEY=your_second_random_string_here
NEXTAUTH_URL=http://localhost:3000
```

Save and close the file.

## 5. Set Up OpenAI (Optional but Recommended)

To enable automatic tagging, you'll need an OpenAI API key:

1. Visit [OpenAI's website](https://platform.openai.com/signup) to create an account if you don't have one
2. Go to the [API keys section](https://platform.openai.com/api-keys)
3. Create a new secret key
4. Add the key to your `.env` file:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Alternatively, if you prefer to use Ollama for local inference, [install Ollama](https://ollama.com/) separately.

## 6. Start the Hoarder Service

Return to your Terminal where you're in the `~/hoarder-app` directory and run:

```bash
docker compose up -d
```

This will download the necessary Docker images and start the services in the background. The first run might take a few minutes as it downloads all the required components.

## 7. Access Hoarder

Once the services are running, you can access Hoarder by:

1. Opening your browser
2. Navigating to http://localhost:3000
3. You should see the Sign In page

## 8. Optional: Enable Additional Features

If you want to enable additional features like full page archival, full page screenshots, or additional inference languages, check the [configuration documentation](https://github.com/hoarder-app/hoarder/blob/main/docs/CONFIGURATION.md).

## 9. Optional: Set Up Quick Sharing Extensions

To make hoarding content faster, you can install:
- Mobile apps
- Browser extensions

These can be found on the quick sharing page within the Hoarder application once you're logged in.

## Updating Hoarder

To update Hoarder in the future:

- If you used `HOARDER_VERSION=release`, run:
  ```bash
  docker compose up --pull always -d
  ```

- If you pinned to a specific version, update your `.env` file with the new version number and run:
  ```bash
  docker compose up -d
  ```

Is there any specific part of the setup process you'd like me to explain in more detail?