import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookCallButton from "@/components/BookCallButton";
import Hero from "@/components/home/Hero";
import { site } from "@/content/site";

// CLAUDE.md: keep the same Calendly link and make sure every CTA reaches it.
describe("booking CTA", () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it("keeps the original Calendly link", () => {
    expect(site.calendlyUrl).toBe("https://calendly.com/dkotlidas-vrwr/free-strategy-call");
  });

  it("links to /book and pushes cta_click", () => {
    render(
      <MemoryRouter>
        <BookCallButton location="test" />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: site.cta.book.label });
    expect(link).toHaveAttribute("href", "/book");

    fireEvent.click(link);
    expect(window.dataLayer).toContainEqual({ event: "cta_click", cta_id: "book_call", location: "test" });
  });

  it("shows the booking button in the hero", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: site.cta.book.label })).toHaveAttribute("href", "/book");
  });
});
