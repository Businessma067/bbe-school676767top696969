/** Serialize backups and final submission for the same sitting in this browser. */
const pending = new Map<string, Promise<unknown>>();

export function queueMockSave<T>(examId: string, save: () => Promise<T>): Promise<T> {
  const previous = pending.get(examId) ?? Promise.resolve();
  const next = previous.catch(() => undefined).then(save);
  pending.set(examId, next);
  void next.finally(() => {
    if (pending.get(examId) === next) pending.delete(examId);
  }).catch(() => undefined);
  return next;
}