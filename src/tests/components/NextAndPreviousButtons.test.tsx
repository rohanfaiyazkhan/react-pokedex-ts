import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FloatingNextAndPreviousButtons from "../../components/IndividualView/PreviousAndNext/FloatingNextAndPreviousButtons";
import { getRoute } from "./../../router/getRoute";
import { RouteNames } from "./../../router/RouteNames";

test("floating Next and Previous Buttons correctly render when index is 1 only next button", () => {
    render(
        <MemoryRouter>
            <FloatingNextAndPreviousButtons currentIndex={1} />
        </MemoryRouter>
    );

    const next = screen.queryByTitle(/next pokemon/i);
    const prev = screen.queryByTitle(/previous pokemon/i);

    expect(next).toBeInTheDocument();
    expect(prev).not.toBeInTheDocument();
    expect(next?.getAttribute("href")).toBe(
        getRoute(RouteNames.View, { id: "2" })
    );
});

test("when index is more than one both buttons", () => {
    render(
        <MemoryRouter>
            <FloatingNextAndPreviousButtons currentIndex={5} />
        </MemoryRouter>
    );

    const next = screen.queryByTitle(/next pokemon/i);
    const prev = screen.queryByTitle(/previous pokemon/i);

    expect(next).toBeInTheDocument();
    expect(prev).toBeInTheDocument();
    expect(next?.getAttribute("href")).toBe(
        getRoute(RouteNames.View, { id: "6" })
    );

    expect(prev?.getAttribute("href")).toBe(
        getRoute(RouteNames.View, { id: "4" })
    );
});
