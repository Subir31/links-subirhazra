# links-subirhazra

Mobile-first personal links site for Subir Hazra, built as a lightweight GitHub Pages project.

## Live Site

https://links.subirhazra.com/

This repository powers a simple public profile page that highlights:

- personal website
- side projects
- services
- social profiles

## Stack

- HTML
- CSS
- vanilla JavaScript
- no build step

## Project Structure

- `index.html` - page shell and script loading
- `styles.css` - layout, theme, responsive styling, and motion
- `config.js` - profile content, grouped links, and social links
- `app.js` - client-side rendering for links and socials
- `assets/` - background image assets
- `profilepic.jpg` - profile photo used on the page

## Customize

Most content can be updated by editing `config.js`.

Key fields:

- `profile.name`
- `profile.tagline`
- `profile.avatarUrl`
- `linkGroups`
- `socials`

Supported social icon values for `socials[].platform`:

- `email`
- `facebook`
- `github`
- `instagram`
- `linkedin`
- `spotify`
- `tiktok`
- `website`
- `x`
- `youtube`

## Local Preview

You can open `index.html` directly, but a local server is better for testing assets and cache behavior.

Example:

```powershell
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## GitHub Pages Deployment

This project is ready to deploy as a static GitHub Pages site.

1. Push the repository to GitHub.
2. Open `Settings > Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the `main` branch.
5. Select the `/ (root)` folder.
6. Save the settings.

GitHub Pages will publish the site without any additional build configuration.

## Custom Domain

This site is configured to use the custom subdomain:

`links.subirhazra.com`

The repository includes a `CNAME` file so the domain configuration stays in version control.

## Notes

- The site is optimized primarily for mobile viewing.
- A cache-busting loader is used so content updates appear reliably after deploys.
- Motion is intentionally lightweight and respects reduced-motion preferences.
