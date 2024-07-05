import { render,act,screen} from "@testing-library/react";
import Body from "../body";
import "@testing-library/jest-dom";
import MOCK_DATA_RESTRO from "../__mocks__/RestaurantDataApi.json"
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=> Promise.resolve({
   json: ()=> Promise.resolve(MOCK_DATA_RESTRO)
}));

it("should contain search button ",async()=>{
   await act(async()=>{ render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
     );
     });

     const searchBtn =screen.getByRole("button",{name:'Searchh'});

    expect(searchBtn).toBeInTheDocument();
      } );