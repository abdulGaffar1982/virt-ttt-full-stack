function checkUserAccess(): void {
  const privilegedRoles = ["admin", "moderator", "superuser"];

  const user = {
    name: "Lakshmi",
    roles: ["editor", "admin", "reviewer"]
  };

  const hasAccess = user.roles.some(role => privilegedRoles.includes(role));
  const powerScore = 2 ** user.roles.length;

  const message = hasAccess
    ? `Access Granted. Power Score: ${powerScore}`
    : `Access Denied. Power Score: ${powerScore}`;

  console.log(message);
}

checkUserAccess();
