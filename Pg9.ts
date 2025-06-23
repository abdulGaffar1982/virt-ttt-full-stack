async function* getUserStream(): AsyncIterableIterator<{ email: string }> {
  yield { email: "arun@example.com" };
  yield { email: "meena@domain.in" };
  yield { email: "ravi@sample.org" };
  yield { email: "anita@example.com" };
}

async function processUsers(): Promise<void> {
  const domainSet = new Set<string>();
  const domainRegex = /@(?<domain>[a-zA-Z0-9.-]+\.[a-z]{2,})$/;

  const stream = (async () => {
    for await (const user of getUserStream()) {
      const match = user.email.match(domainRegex);
      const domain = match?.groups?.domain;
      if (domain) {
        domainSet.add(domain);
      }
    }
  })();

  stream
    .then(() => {
      console.log("Unique Domains:", [...domainSet]);
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    })
    .finally(() => {
      console.log("Stream completed");
    });
}

processUsers();
