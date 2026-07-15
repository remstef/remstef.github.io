// Close all summary-detail dropdowns (called if clicked anywhere, but not on an open details summary dropdown)
export function forceCloseAllDetailSummaryDropdowns(
  e?: React.MouseEvent<HTMLAnchorElement> | MouseEvent,
) {
  // console.log('force closing has been called, the event listener should have been removed')
  const currentDetails = (
    e?.target as HTMLElement | null
  )?.closest<HTMLDetailsElement>("details.dropdown");
  if (currentDetails && currentDetails?.open) {
    // console.log('clicked on an open details summary, not force closing any details summary')
    return;
  }
  // console.log('force closing all details summary')
  document
    .querySelectorAll("details[open]")
    .forEach((d) => d.removeAttribute("open"));
  return;
}

// Close summary-detail dropdown (called if clicked on an item)
export function closeDetailsSummaryDropdown(
  e?: React.MouseEvent<HTMLAnchorElement>,
) {
  const currentDetails = (
    e?.target as HTMLElement | null
  )?.closest<HTMLDetailsElement>("details.dropdown");
  if (currentDetails && currentDetails?.open) {
    // console.log('closing only current ds');
    currentDetails.open = false;
    return;
  }
  return;
}

// Register a new eventlistener that closes all summary-detail dropdowns, except when clicked on an open details-summary dropdown)
export function registerCloseCurrentDetailsSummaryDropdown(
  e: React.MouseEvent<HTMLAnchorElement>,
) {
  const currentDetails = (
    e?.target as HTMLElement | null
  )?.closest<HTMLDetailsElement>("details.dropdown");
  if (!currentDetails || currentDetails?.open) {
    // console.log('trying to register new eventlistener but ds is open, so skipping new registration')
    return;
  }
  // console.log('register eventlistener')
  document.addEventListener("click", forceCloseAllDetailSummaryDropdowns, {
    capture: true,
    once: true,
  });
  return;
}

export function getPathRelativeToAppFolder(fileMetaUrl: string): string {
  const filePath = new URL(fileMetaUrl).pathname;
  const normalized = filePath.replaceAll("\\", "/");

  const marker = "/src/app";
  const i = normalized.lastIndexOf(marker);
  const j = normalized.lastIndexOf("/");

  if (i === -1) return "";
  return normalized.slice(i + marker.length, j); // e.g. /, /about, /cv, ...
}