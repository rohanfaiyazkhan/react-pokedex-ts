import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchBarElementIds } from "./../../components/SearchBar/SearchBarElementIds";

test("Search bar component", async () => {
    render(<SearchBar />);

    const overlay = screen.getByTestId(SearchBarElementIds.ScreenOverlay);
    const dropdown = screen.getByRole("listbox");
    const input = screen.getByLabelText("search-input");

    expect(overlay).toHaveClass("animation-overlay-fade-out");
    expect(dropdown).toHaveClass("invisible");

    userEvent.click(input);

    expect(overlay).toHaveClass("animation-overlay-fade-in");
    expect(dropdown).toHaveClass("invisible");

    userEvent.keyboard("bu");

    expect(overlay).toHaveClass("animation-overlay-fade-in");
    expect(dropdown).toHaveClass("invisible");

    userEvent.keyboard("bul");

    expect(overlay).toHaveClass("animation-overlay-fade-in");
    expect(dropdown).not.toHaveClass("invisible");
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
