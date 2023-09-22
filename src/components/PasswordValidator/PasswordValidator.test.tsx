import { PasswordValidator } from "..";
import { render } from "@testing-library/react";

describe("Testujemy PasswordValidator komponent", () => {
  it("Happy path", () => {
    const el = render(<PasswordValidator password="Qwert1234!" />);
    const items = el.getAllByRole("listitem");
    expect(
      items.filter((x) => x.className === "flex flex-row my-2 text-green-600")
        .length
    ).toBe(4);
  });

  test.each([["fds32"], ["fdksjhj311!"], ["fdsfdassd"], ["432432!"]])(
    "Nieprawidłowe hasło %s",
    (a) => {
      const el = render(<PasswordValidator password={a} />);
      const items = el.getAllByRole("listitem");
      expect(
        items.filter((x) => x.className === "flex flex-row my-2 text-green-600")
          .length
      ).toBeLessThan(4);
    }
  );
});
