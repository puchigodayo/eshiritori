
self.addEventListener("push", (event) => {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = {
      title: "無線機",
      body: event.data ? event.data.text() : "新しい通知があります"
    };
  }

  const title = data.title || "無線機";
  const options = {
    body: data.body || "新しいイベントがあります",
    tag: data.tag || "radio-notification",
    data: {
      url: self.registration.scope
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
