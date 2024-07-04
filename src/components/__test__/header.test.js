import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MunchStore from "../store/munchStore";
it("should contain the login button",()=>{

render(
    <BrowserRouter>
    <Provider store={MunchStore}>
   <Header />
    </Provider>
    </BrowserRouter>);

    
});