/** How many demo tasks a visitor can answer in one subject with no account. */
export const GUEST_PREVIEW_PER_SUBJECT = 2;

export type GuestTaskAccess = "play" | "register";

/**
 * First N demo-unlocked tasks in subject order are playable signed out.
 * Everything after that asks for an account, including tasks the course still locks.
 */
export function guestAccessByTaskId(
  ordered: { id: string; demoLocked: boolean }[],
): Map<string, GuestTaskAccess> {
  const access = new Map<string, GuestTaskAccess>();
  let opened = 0;
  for (const task of ordered) {
    if (!task.demoLocked && opened < GUEST_PREVIEW_PER_SUBJECT) {
      access.set(task.id, "play");
      opened += 1;
    } else {
      access.set(task.id, "register");
    }
  }
  return access;
}
