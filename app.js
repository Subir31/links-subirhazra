const iconMap = {
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm2.35-.75L12 10.26l6.65-5.76H5.35Zm14.15 2.22-6.72 5.82a1.2 1.2 0 0 1-1.56 0L4.5 6.72v12.03c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75V6.72Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.18h2.42l.36-2.82H13.5V9.2c0-.82.23-1.37 1.4-1.37h1.5V5.3c-.26-.03-1.15-.11-2.18-.11-2.16 0-3.64 1.32-3.64 3.75V11H8.14v2.82h2.44V21Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.55 0-.27-.01-.99-.02-1.95-3.12.68-3.78-1.32-3.78-1.32-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 2.11-.71 2.62-1.14.1-.73.39-1.23.71-1.51-2.49-.29-5.11-1.24-5.11-5.54 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.15a10.8 10.8 0 0 1 5.67 0c2.16-1.45 3.11-1.15 3.11-1.15.61 1.55.23 2.7.11 2.98.72.78 1.15 1.78 1.15 3 0 4.31-2.63 5.24-5.13 5.52.4.35.76 1.02.76 2.05 0 1.48-.02 2.67-.02 3.03 0 .31.2.66.78.55A11.25 11.25 0 0 0 12 .75Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.75A3.5 3.5 0 0 0 3.75 7.25v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5h-9.5Zm10.13 1.37a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 3A2.5 2.5 0 1 1 3 5.5 2.5 2.5 0 0 1 5.5 3ZM3.75 8.25h3.5V21h-3.5ZM9 8.25h3.36v1.74h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.2 2.34 4.2 5.38V21h-3.5v-5.9c0-1.41-.02-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V21H9Z"/></svg>`,
  spotify: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.51 10.51 0 0 0 12 1.5Zm4.82 15.16a.87.87 0 0 1-1.2.29 9.85 9.85 0 0 0-9-.96.87.87 0 1 1-.68-1.6 11.58 11.58 0 0 1 10.59 1.11.87.87 0 0 1 .29 1.16Zm1.72-2.84a1.08 1.08 0 0 1-1.48.37 12.23 12.23 0 0 0-11.24-1.19 1.08 1.08 0 1 1-.78-2 14.37 14.37 0 0 1 13.21 1.41 1.08 1.08 0 0 1 .29 1.41Zm.15-3.01a1.3 1.3 0 0 1-1.78.44A14.94 14.94 0 0 0 4.34 9.56a1.3 1.3 0 0 1-.94-2.42 17.53 17.53 0 0 1 14.97 1.95 1.3 1.3 0 0 1 .32 1.72Z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.83 2c.4 1.87 1.86 3.33 3.73 3.73v2.67a6.34 6.34 0 0 1-3.73-1.2v6.4a5.6 5.6 0 1 1-5.6-5.6c.38 0 .76.04 1.12.11v2.79a2.86 2.86 0 1 0 1.74 2.7V2Z"/></svg>`,
  website: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm6.88 9h-3.06a15.5 15.5 0 0 0-1.11-5 8.29 8.29 0 0 1 4.17 5ZM12 4.08c.99 1.18 1.79 3.27 2.07 5.17H9.93C10.21 7.35 11.01 5.26 12 4.08ZM4.95 13h3.02a15.47 15.47 0 0 0 1.12 5.02A8.29 8.29 0 0 1 4.95 13ZM7.97 11H4.95a8.29 8.29 0 0 1 4.14-5 15.44 15.44 0 0 0-1.12 5Zm4.03 8.92c-.99-1.18-1.79-3.27-2.07-5.17h4.14c-.28 1.9-1.08 3.99-2.07 5.17ZM14.3 13H9.7a13.84 13.84 0 0 1 0-2h4.6a13.84 13.84 0 0 1 0 2Zm.41 5.02A15.47 15.47 0 0 0 15.83 13h3.05a8.29 8.29 0 0 1-4.17 5.02Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.74L6.2 22H3.08l7.24-8.28L.8 2h6.39l4.41 6.15L18.9 2Zm-1.09 18h1.72L6.25 3.9H4.4Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.19a2.92 2.92 0 0 0-2.06-2.07C17.71 4.63 12 4.63 12 4.63s-5.71 0-7.52.49A2.92 2.92 0 0 0 2.42 7.2 30.53 30.53 0 0 0 2 12a30.53 30.53 0 0 0 .42 4.81 2.92 2.92 0 0 0 2.06 2.07c1.81.49 7.52.49 7.52.49s5.71 0 7.52-.49a2.92 2.92 0 0 0 2.06-2.07A30.53 30.53 0 0 0 22 12a30.53 30.53 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>`
};

const config = window.profileConfig || {};
const profile = config.profile || {};
const theme = config.theme || {};
const links = Array.isArray(config.links) ? config.links : [];
const linkGroups = Array.isArray(config.linkGroups) ? config.linkGroups : [];
const socials = Array.isArray(config.socials) ? config.socials : [];

function setTheme() {
  const root = document.documentElement;
  if (theme.button) {
    root.style.setProperty("--button", theme.button);
  }
  if (theme.buttonEdge) {
    root.style.setProperty("--button-edge", theme.buttonEdge);
  }
  if (theme.text) {
    root.style.setProperty("--surface-text", theme.text);
    root.style.setProperty("--icon", theme.text);
  }
  if (theme.mutedText) {
    root.style.setProperty("--muted-text", theme.mutedText);
  }
}

function setProfile() {
  const nameElement = document.getElementById("profile-name");
  const taglineElement = document.getElementById("profile-tagline");
  const avatarElement = document.getElementById("profile-avatar");

  nameElement.textContent = profile.name || "Your Name";
  taglineElement.textContent = profile.tagline || "Artist / Creator / Developer";
  document.title = profile.title || `${nameElement.textContent} | Links`;

  if (profile.avatarUrl) {
    const image = document.createElement("img");
    image.src = profile.avatarUrl;
    image.alt = profile.name ? `${profile.name} profile photo` : "Profile photo";
    avatarElement.replaceChildren(image);
    return;
  }

  avatarElement.textContent = profile.initials || "YN";
}

function createLinkButton(item) {
  const anchor = document.createElement("a");
  anchor.className = "link-button";
  anchor.href = item.url || "#";
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = item.label || "New Link";
  return anchor;
}

function createLinkGroup(group) {
  const wrapper = document.createElement("section");
  wrapper.className = "link-group";

  if (group.title) {
    const heading = document.createElement("p");
    heading.className = "link-group-title";
    heading.textContent = group.title;
    wrapper.appendChild(heading);
  }

  const items = Array.isArray(group.links) ? group.links : [];
  items.forEach((item) => wrapper.appendChild(createLinkButton(item)));

  return wrapper;
}

function normalizeLinkGroups() {
  if (linkGroups.length) {
    return linkGroups.filter(
      (group) => Array.isArray(group.links) && group.links.length
    );
  }

  if (links.length) {
    return [{ links }];
  }

  return [{ links: [{ label: "Add your first link", url: "#" }] }];
}

function createSocialLink(item) {
  const hasUrl = Boolean(item.url);
  const anchor = document.createElement(hasUrl ? "a" : "span");
  const platform = String(item.platform || "website").toLowerCase();

  anchor.className = "social-link";
  if (hasUrl) {
    anchor.href = item.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  } else {
    anchor.classList.add("social-link--static");
  }

  anchor.setAttribute("aria-label", item.label || platform);
  anchor.innerHTML = iconMap[platform] || iconMap.website;

  return anchor;
}

function renderLinks() {
  const linkStack = document.getElementById("link-stack");
  linkStack.replaceChildren(...normalizeLinkGroups().map(createLinkGroup));
}

function renderSocials() {
  const socialRow = document.getElementById("social-row");
  if (!socials.length) {
    socialRow.hidden = true;
    socialRow.replaceChildren();
    return;
  }

  socialRow.hidden = false;
  socialRow.replaceChildren(...socials.map(createSocialLink));
}

function applyEntranceMotion() {
  const elements = document.querySelectorAll(
    ".profile, .link-group-title, .link-button, .social-row, .social-link"
  );

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-index", String(index + 1));
  });

  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

setTheme();
setProfile();
renderLinks();
renderSocials();
applyEntranceMotion();
