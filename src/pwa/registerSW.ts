// ─── Service Worker Registration ───

export async function registerSW(): Promise<ServiceWorkerRegistration | undefined> {
  if (!("serviceWorker" in navigator)) {
    return undefined;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });

    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "activated") {
            console.log("[SW] Nouveau service worker activé.");
          }
        });
      }
    });

    return registration;
  } catch (error) {
    console.error("[SW] Échec enregistrement Service Worker:", error);
    return undefined;
  }
}
