import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDocsScrollSpy } from "../hooks/use-docs-scroll-spy";

describe("useDocsScrollSpy", () => {
  const sampleSections = ["quickstart", "cli-options", "presets", "deployment"];

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initializes with initialId", () => {
    const { result } = renderHook(() => useDocsScrollSpy(sampleSections, "quickstart"));
    expect(result.current.activeSection).toBe("quickstart");
  });

  it("updates active section when scrollToSection is called", () => {
    const { result } = renderHook(() => useDocsScrollSpy(sampleSections, "quickstart"));

    act(() => {
      result.current.scrollToSection("presets");
    });

    expect(result.current.activeSection).toBe("presets");
  });
});
