// Close all summary-detail dropdowns (called if clicked anywhere, but not on an open details summary dropdown)
export function forceCloseAllDetailSummaryDropdowns(e?:React.MouseEvent<HTMLAnchorElement> | MouseEvent) {
  // console.log('force closing has been called, the event listener should have been removed')
  const currentDetails = (e?.target as HTMLElement | null)?.closest<HTMLDetailsElement>("details.dropdown");
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
export function closeDetailsSummaryDropdown(e?:React.MouseEvent<HTMLAnchorElement>) {
  const currentDetails = (e?.target as HTMLElement | null)?.closest<HTMLDetailsElement>("details.dropdown");
  if (currentDetails && currentDetails?.open) {
    // console.log('closing only current ds');
    currentDetails.open = false;
    return;
  }
  return;
}

// Register a new eventlistener that closes all summary-detail dropdowns, except when clicked on an open details-summary dropdown)
export function registerCloseCurrentDetailsSummaryDropdown(e:React.MouseEvent<HTMLAnchorElement>) {
  const currentDetails = (e?.target as HTMLElement | null)?.closest<HTMLDetailsElement>("details.dropdown");
  if (!currentDetails || currentDetails?.open) {
    // console.log('trying to register new eventlistener but ds is open, so skipping new registration')
    return;
  }
  // console.log('register eventlistener')
  document.addEventListener("click", forceCloseAllDetailSummaryDropdowns, {capture: true, once:true});
  return;
}

export const AlertInfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

export const AlertSuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const AlertWarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const AlertErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
