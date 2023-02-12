import react from 'react';
import {screen, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import {render} from "./defaultTest";
import List from "../components/list/List";
import Header from "../components/Header";
import Cart from "../components/cart/Cart";
import {productsApi} from "../redux/services/products";
import CardCustom from "../components/list/CardCustom";


afterEach(() => {
    jest.clearAllMocks();
    cleanup();
})
describe("test ol app", () => {
    test("renders Header component", () => {
            render(<Header />);
            const headerElement = screen.getByText(/Etaration/i);
            const headerSearch =screen.getByPlaceholderText("Search…");


            expect(headerElement).toBeInTheDocument();
            expect(headerElement).toHaveTextContent(/Etaration/i);
            expect(headerElement.closest("a")).toHaveAttribute("href", "/products");
            expect(headerSearch).toHaveAttribute("value");
        });
        test("renders Cart component", () => {
            render(<Cart />);
            const button = screen.getByText(/Checkout/i);
            const button2 = screen.getByText("Total Price :");
            expect(button).toBeInTheDocument();
            expect(button2).toBeInTheDocument();
        });
        test("renders custom card component",  () => {
            render(<CardCustom item={
                {
                    "id": 1,
                    "name": "Apple iPhone 12 Pro Max 128GB Pacific Blue",
                    "price": 12999,
                    "image": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/medium/iphone-12-pro-max-128gb-pacific-blue-1.jpg",
                    "description": "Apple iPhone 12 Pro Max 128GB Pacific Blue",
                    "brand": "Apple"
                }
            } />);
            const card = screen.getByText(/Add to Cart/i);
            expect(card).toBeInTheDocument();
            userEvent.click(card);
            expect(card).toHaveTextContent(/Delete to Cart/i);
        });
})





















