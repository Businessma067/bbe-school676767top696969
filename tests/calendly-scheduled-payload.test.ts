import { describe, expect, test } from "bun:test";
import { parseScheduledPayload } from "../src/components/CalendlyInlineEmbed";

describe("parseScheduledPayload", () => {
  test("reads Calendly event_scheduled URIs", () => {
    const parsed = parseScheduledPayload({
      event: "calendly.event_scheduled",
      payload: {
        event: { uri: "https://api.calendly.com/scheduled_events/EVT" },
        invitee: {
          uri: "https://api.calendly.com/scheduled_events/EVT/invitees/INV",
        },
      },
    });
    expect(parsed).toEqual({
      eventUri: "https://api.calendly.com/scheduled_events/EVT",
      inviteeUri: "https://api.calendly.com/scheduled_events/EVT/invitees/INV",
    });
  });

  test("parses stringified postMessage data", () => {
    const parsed = parseScheduledPayload(
      JSON.stringify({
        event: "calendly.event_scheduled",
        payload: {
          event: { uri: "https://api.calendly.com/scheduled_events/A" },
        },
      }),
    );
    expect(parsed?.eventUri).toBe("https://api.calendly.com/scheduled_events/A");
  });

  test("ignores unrelated Calendly events", () => {
    expect(
      parseScheduledPayload({
        event: "calendly.date_and_time_selected",
        payload: {},
      }),
    ).toBeNull();
  });
});
