import { render,act,screen, fireEvent} from "@testing-library/react";
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

     const searchBtn =screen.getByRole("button",{name:'Search'});

    expect(searchBtn).toBeInTheDocument();
      } );
it("should contain total 8 items as restaurant card ",async()=>{
   await act(async()=>{ render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
     );
     });
    const cardItem = screen.getAllByTestId("cardItem");
    expect(cardItem.length).toBe(8);
} );

it("should contain 2 items for search text Pizza ",async()=>{
    await act(async()=>{ render(
     <BrowserRouter>
         <Body />
     </BrowserRouter>
      );
      });
      const SearchTXt=screen.getByTestId("searchId");
    fireEvent.change(SearchTXt,{target:{ value:"pizza"}});
    const searchBtn=screen.getByRole("button",{name:"Search"});
    fireEvent.click(searchBtn);
     const cardItem = screen.getAllByTestId("cardItem");
     expect(cardItem.length).toBe(2);
 } );