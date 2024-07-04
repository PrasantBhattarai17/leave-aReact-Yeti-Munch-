import { render,screen } from "@testing-library/react";
import Cart from "../cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MunchStore from "../store/munchStore";
import "@testing-library/jest-dom";
it("should contain the clear cart button",()=>{

    // renderring the cart component
    render(<BrowserRouter>
        <Provider store={MunchStore}>
    <Cart/>
        </Provider>
        </BrowserRouter>
     );

const button=screen.getByRole("button");

expect(button).toBeInTheDocument;

}
);